self.__uv$config = {
  prefix: '/uv/service/',
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: '/uv.sw.js',
  bundle: 'https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@latest/dist/uv.bundle.js',
  config: '/uv.config.js',
  sw: '/uv.sw.js',
};
