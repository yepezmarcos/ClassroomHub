const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    const projectRoot = process.cwd();
    config.resolve.alias["@hub/config"] = path.resolve(projectRoot, "packages/config");
    config.resolve.alias["@hub/ui"] = path.resolve(projectRoot, "packages/ui/src");
    return config;
  },
};

module.exports = nextConfig;
