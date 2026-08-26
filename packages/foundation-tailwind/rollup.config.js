import { defineConfig } from "rollup";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from "rollup-plugin-esbuild";
import fg from "fast-glob";
import path from "node:path";
import fs from "node:fs";

const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf8"));
const externals = new Set([...Object.keys(packageJson.peerDependencies ?? {})]);

function isExternal(id) {
  if (id.startsWith(".") || id.startsWith("/")) return false;
  if (id.startsWith("node:")) return true;
  for (const ext of externals) {
    if (id === ext || id.startsWith(`${ext}/`)) return true;
  }
  return false;
}

const entryFiles = fg.sync("src/**/*.{ts,tsx}", {
  ignore: [
    "**/*.test.*",
    "**/*.spec.*",
    "**/__tests__/**",
    "src/classes.ts",
    "src/classes/*.ts"
  ],
});

const input = Object.fromEntries(
  entryFiles.map((file) => [
    path.relative("src", file).replace(/\.(ts|tsx)$/, ""),
    path.resolve(file),
  ]),
);

const sharedPlugins = [
  resolve({
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  }),
  commonjs(),
  esbuild({
    minify: process.env.NODE_ENV === "production",
    target: "es2022",
    jsx: "automatic",
    tsconfig: "./tsconfig.build.json",
  }),
];

const sharedConfig = {
  external: isExternal,
  plugins: sharedPlugins,
  treeshake: {
    moduleSideEffects: false,
    propertyReadSideEffects: false,
  },
  onwarn(warning, warn) {
    if (warning.code === "CIRCULAR_DEPENDENCY") return;
    if (
      warning.code === "MODULE_LEVEL_DIRECTIVE" &&
      warning.message.includes('"use client"')
    ) {
      return;
    }
    warn(warning);
  },
};

const sharedOutput = {
  sourcemap: process.env.NODE_ENV === "production" ? "hidden" : true,
  entryFileNames: "[name].js",
  chunkFileNames: "[name]-[hash].js",
};

export default defineConfig([
  {
    input,
    ...sharedConfig,
    output: {
      ...sharedOutput,
      dir: "dist/esm",
      format: "es",
    },
  },
  {
    input,
    ...sharedConfig,
    output: {
      ...sharedOutput,
      dir: "dist/cjs",
      format: "cjs",
      exports: "named",
      interop: "auto",
    },
  },
]);
