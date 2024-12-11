import type { NextConfig } from "next";
const path = require("path");

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.alias["web_kit_ui"] = path.resolve(
      __dirname,
      "../web_kit_ui/src"
    );
    return config;
  },
};

export default nextConfig;
