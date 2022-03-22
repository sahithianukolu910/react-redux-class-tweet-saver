var Twit = require("twit");
//testexamApp
var T = new Twit({
  consumer_key: "xeOr6cQwIMulI25ApOHKG7TWP",
  consumer_secret: "BkUBl8oCmnxKv8e9OCBpKF6LK3Fszeqt86rp4an45O43zvCmXi",
  app_only_auth: true,
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true, // optional - requires SSL certificates to be valid.
});
//
//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
function get(q, count) {
  //return T.get("search/api-reference/get-search-tweets", { q, count });
  return T.get("search/tweets", { q, count });
}

module.exports = { get };
