import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  env: {
    SERVICE_URL: process.env.SERVICE_URL,
  },
};

export default nextConfig;
