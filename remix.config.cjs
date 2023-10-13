/** 
@type {import('@remix-run/dev').AppConfig}
*/
module.exports = {
  "browserNodeBuiltinsPolyfill": {
    "modules": {
      "events": true,
      "fs": true,
      "stream": true,
      "zlib": true,
      "buffer": true,
      "string_decoder": true,
      "async_hooks": true,
      "path": true,
      "querystring": true,
      "url": true,
      "http": true,
      "crypto": true,
      "util": true,
      "net": true
    }
}
}