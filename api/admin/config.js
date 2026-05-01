const { loadConfig, saveConfig, getAdminPassword } = require("../_lib/config");
const { sendJson, methodNotAllowed, unauthorized, readBody } = require("../_lib/http");

function isAuthorized(req) {
  const headerPassword = req.headers["x-admin-password"];
  return typeof headerPassword === "string" && headerPassword === getAdminPassword();
}

module.exports = async function handler(req, res) {
  try {
    if (!isAuthorized(req)) {
      unauthorized(res);
      return;
    }

    if (req.method === "GET") {
      sendJson(res, 200, await loadConfig());
      return;
    }

    if (req.method === "POST") {
      const body = readBody(req);
      const current = await loadConfig();
      const next = {
        ...current,
        ...body,
        hero: { ...current.hero, ...((body && body.hero) || {}) },
        galleryImages: Array.isArray(body && body.galleryImages) ? body.galleryImages : current.galleryImages,
        accommodations: Array.isArray(body && body.accommodations) ? body.accommodations : current.accommodations
      };

      const saved = await saveConfig(next);
      sendJson(res, 200, { ok: true, config: saved });
      return;
    }

    methodNotAllowed(res, ["GET", "POST"]);
  } catch (error) {
    sendJson(res, 500, {
      error: "Falha ao salvar no backend.",
      details: error && error.message ? error.message : "Erro interno."
    });
  }
};
