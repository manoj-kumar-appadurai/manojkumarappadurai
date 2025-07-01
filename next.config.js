const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  audio: {
    modules: ['mp3', 'aac', 'wav', 'ogg', 'm4a', 'flac'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'manojkumarappaduraiportfolio.netlify.app', // ✅ Add this
      }
    ]
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  i18n, // ✅ Add i18n here directly
};

module.exports = nextConfig;