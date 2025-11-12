import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["@hub/config"] = path.resolve(__dirname, "../../packages/config");
    config.resolve.alias["@hub/ui"] = path.resolve(__dirname, "../../packages/ui/src");
    return config;
  },
};

export default nextConfig;
