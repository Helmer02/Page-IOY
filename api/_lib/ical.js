function toIsoDate(date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseIcsDate(value) {
  const clean = String(value || "").trim().slice(0, 8);
  const year = Number(clean.slice(0, 4));
  const month = Number(clean.slice(4, 6));
  const day = Number(clean.slice(6, 8));
  return new Date(Date.UTC(year, month - 1, day));
}

function parseBusyDatesFromIcs(icsText) {
  const lines = String(icsText || "").replace(/\r\n/g, "\n").split("\n");
  const busy = new Set();

  let currentStart = null;
  let currentEnd = null;

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (line === "BEGIN:VEVENT") {
      currentStart = null;
      currentEnd = null;
      continue;
    }

    if (line.startsWith("DTSTART")) {
      const [, value = ""] = line.split(":");
      currentStart = parseIcsDate(value);
      continue;
    }

    if (line.startsWith("DTEND")) {
      const [, value = ""] = line.split(":");
      currentEnd = parseIcsDate(value);
      continue;
    }

    if (line === "END:VEVENT" && currentStart && currentEnd) {
      const cursor = new Date(currentStart.getTime());
      while (cursor < currentEnd) {
        busy.add(toIsoDate(cursor));
        cursor.setUTCDate(cursor.getUTCDate() + 1);
      }
    }
  }

  return [...busy].sort();
}

async function fetchAirbnbBusyDates(icalUrl) {
  if (!icalUrl) return [];
  const upstream = await fetch(icalUrl, { headers: { "User-Agent": "PousadaLanding/1.0" } });
  if (!upstream.ok) throw new Error("Falha ao buscar iCal");
  const icsText = await upstream.text();
  return parseBusyDatesFromIcs(icsText);
}

module.exports = {
  fetchAirbnbBusyDates
};

