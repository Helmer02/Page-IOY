const { loadConfig } = require("./_lib/config");
const { fetchAirbnbBusyDates } = require("./_lib/ical");
const { sendJson, methodNotAllowed } = require("./_lib/http");

function mergeBusyDates(manual, airbnb) {
  return [...new Set([...(manual || []), ...(airbnb || [])])].sort();
}

function countBusyByDate(busyByAccommodation) {
  const counts = new Map();
  for (const item of busyByAccommodation) {
    for (const date of item.busyDates) {
      counts.set(date, (counts.get(date) || 0) + 1);
    }
  }
  return counts;
}

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    methodNotAllowed(res, ["GET"]);
    return;
  }

  const config = await loadConfig();
  const accommodations = Array.isArray(config.accommodations) ? config.accommodations : [];
  const requestedId = req.query && typeof req.query.accommodationId === "string" ? req.query.accommodationId : "";

  const busyByAccommodation = [];

  for (const acc of accommodations) {
    const manual = Array.isArray(acc.manualBusyDates) ? acc.manualBusyDates : [];
    try {
      const airbnb = await fetchAirbnbBusyDates(acc.airbnbIcalUrl || "");
      busyByAccommodation.push({
        id: acc.id,
        name: acc.name,
        busyDates: mergeBusyDates(manual, airbnb),
        source: acc.airbnbIcalUrl ? "airbnb+manual" : "manual"
      });
    } catch {
      busyByAccommodation.push({
        id: acc.id,
        name: acc.name,
        busyDates: manual,
        source: "manual"
      });
    }
  }

  if (requestedId) {
    const match = busyByAccommodation.find((x) => x.id === requestedId);
    if (!match) {
      sendJson(res, 404, { error: "Acomodação não encontrada." });
      return;
    }
    sendJson(res, 200, {
      mode: "single",
      accommodationId: match.id,
      source: match.source,
      busyDates: match.busyDates
    });
    return;
  }

  const totalUnits = busyByAccommodation.length;
  const counts = countBusyByDate(busyByAccommodation);
  const fullyBookedDates = [...counts.entries()]
    .filter(([, count]) => totalUnits > 0 && count >= totalUnits)
    .map(([date]) => date)
    .sort();

  sendJson(res, 200, {
    mode: "global",
    source: "combined",
    totalUnits,
    busyDates: fullyBookedDates,
    accommodations: busyByAccommodation.map((x) => ({ id: x.id, name: x.name }))
  });
};
