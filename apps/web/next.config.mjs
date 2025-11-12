import path from "path";

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["@hub/config"] = path.resolve(__dirname, "../../packages/config");
    config.resolve.alias["@hub/ui"] = path.resolve(__dirname, "../../packages/ui/src");
    return config;
  },
};

export default nextConfig;
