const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias["@hub/ui"] = path.resolve(__dirname, "../../packages/ui/src");
    config.resolve.alias["@hub/config"] = path.resolve(__dirname, "../../packages/config");
    return config;
  },
};

module.exports = nextConfig;
