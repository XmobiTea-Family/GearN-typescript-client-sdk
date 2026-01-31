import path from "path";
import TerserPlugin from "terser-webpack-plugin";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Webpack Configuration for Cocos Creator 3.x
 * 
 * This configuration bundles the GearN SDK as a single UMD module
 * that can be imported in Cocos Creator projects.
 * 
 * Usage in Cocos Creator:
 * 1. npm install this package
 * 2. Import: import * as GearN from "@xmobitea/gn-typescript-client";
 */
export default {
  entry: "./src/index.ts",
  target: "web", // Target web/browser environment (Cocos Creator runs in this context)
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig-build.cocos.json",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    fallback: {
      // Polyfills for Node.js built-in modules not available in browser/Cocos Creator
      "buffer": false,
      "stream": false,
      "crypto": false,
      "http": false,
      "https": false,
      "url": false,
      "zlib": false,
    },
  },
  output: {
    filename: "gearn.cocos.js",
    path: path.resolve(__dirname, "dist"),
    library: {
      name: "GearN",
      type: "umd",
      export: "default",
    },
    globalObject: "this",
    environment: {
      arrowFunction: true,
    },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            keep_fnames: true,
            keep_classnames: true,
          },
          mangle: {
            keep_fnames: true,
            keep_classnames: true,
          },
        },
      }),
    ],
  },
  // Don't externalize any dependencies - bundle everything
  externals: [],
};
