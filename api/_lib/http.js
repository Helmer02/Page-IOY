function sendJson(res, status, payload) {
  res.status(status).setHeader("Content-Type", "application/json; charset=utf-8");
  res.send(JSON.stringify(payload));
}

function methodNotAllowed(res, allowed) {
  res.setHeader("Allow", allowed.join(", "));
  sendJson(res, 405, { error: "Método não permitido." });
}

function unauthorized(res) {
  sendJson(res, 401, { error: "Não autorizado." });
}

function readBody(req) {
  if (typeof req.body === "object" && req.body !== null) return req.body;
  return {};
}

module.exports = {
  sendJson,
  methodNotAllowed,
  unauthorized,
  readBody
};

