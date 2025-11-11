import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias["@hub/ui"] = path.resolve(__dirname, "../../packages/ui/src");
    config.resolve.alias["@hub/lib"] = path.resolve(__dirname, "../../packages/lib/src");
    config.resolve.alias["@hub/config"] = path.resolve(__dirname, "../../packages/config");
    return config;
  },
};

export default nextConfig;
