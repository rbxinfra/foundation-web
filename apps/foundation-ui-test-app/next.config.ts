import type { NextConfig } from "next";
import { resolve } from "path";

const nextConfig: NextConfig = {
  output: 'export',

  /* config options here */
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  bundlePagesRouterDependencies: true,
  turbopack: {
    root: resolve('../../'),
  },
  assetPrefix: process.env.assetPrefix,
  basePath: process.env.basePath,
  env: {
    robloxSiteDomain: process.env.robloxSiteDomain,
    assetPathPrefix: process.env.assetPathPrefix
  }

};

export default nextConfig;
