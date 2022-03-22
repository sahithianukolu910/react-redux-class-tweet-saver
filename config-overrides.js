// module.exports = function override(config, env) {
//   console.log("override");
//   let loaders = config.resolve;
//   loaders.fallback = {
//     fs: false,
//     tls: false,
//     net: false,
//     stream: require.resolve("stream-browserify"),
//     url: require.resolve("url/"),
//     querystring: require.resolve("querystring-es3"),
//     zlib: false,
//     path: require.resolve("path-browserify"),
//     http: require.resolve("stream-http"),
//     buffer: "buffer/",
//     https: require.resolve("https-browserify"),
//     assert: require.resolve("assert/"),
//     querystring: require.resolve("querystring-es3"),
//     util: require.resolve("util/"),
//     crypto: require.resolve("crypto-browserify"),
//   };

//   return config;
// };
