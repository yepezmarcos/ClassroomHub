import path from "path";

const nextConfig = {
  webpack: (config) => {
    const projectRoot = process.cwd();
    config.resolve.alias["@hub/config"] = path.resolve(projectRoot, "packages/config");
    config.resolve.alias["@hub/ui"] = path.resolve(projectRoot, "packages/ui/src");
    return config;
  },
};

export default nextConfig;
