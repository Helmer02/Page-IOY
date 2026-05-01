const { getAdminPassword } = require("../_lib/config");
const { sendJson, methodNotAllowed, readBody } = require("../_lib/http");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    methodNotAllowed(res, ["POST"]);
    return;
  }

  const body = readBody(req);
  const adminPassword = getAdminPassword();
  const ok = body && body.password === adminPassword;
  sendJson(res, ok ? 200 : 401, { ok });
};

