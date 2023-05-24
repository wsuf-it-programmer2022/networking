module.exports = function parseCookies(request) {
  const list = {};
  const rc = request.headers.cookie;
  console.log("cookies in raw format: ", rc);
  rc &&
    rc.split(";").forEach(function (cookie) {
      const parts = cookie.split("=");
      list[parts.shift().trim()] = decodeURI(parts.join("="));
    });
  return list;
};
