const json = require('./package.json');
const projectName = json.name;

const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: isProduction,
  basePath: isProduction ? `/${projectName}` : '',
  exportPathMap: isProduction
    ? async () => {
        return {
          '/': { page: '/' },
        };
      }
    : undefined,
};

module.exports = nextConfig;
