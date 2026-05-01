const { loadConfig, sanitizePublicConfig } = require("./_lib/config");
const { sendJson, methodNotAllowed } = require("./_lib/http");

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    methodNotAllowed(res, ["GET"]);
    return;
  }

  const config = await loadConfig();
  sendJson(res, 200, sanitizePublicConfig(config));
};

