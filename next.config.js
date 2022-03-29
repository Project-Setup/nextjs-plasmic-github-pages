const json = require('./package.json');
const folder = json.name;

const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: isProduction ? `/${folder}` : '',
  exportPathMap: async () => {
    return {
      '/': { page: '/' },
    };
  },
};

module.exports = nextConfig;
