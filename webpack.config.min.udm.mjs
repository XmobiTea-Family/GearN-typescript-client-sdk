import path from "path";
import TerserPlugin from "terser-webpack-plugin";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
	entry: "./src/index.ts",
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: "ts-loader",
				options: {
					configFile: "tsconfig-build.min.udm.json",
				},
			},
		],
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
		fallback: {

		},
	},
	output: {
		filename: "gn.js.client.min.js",
		path: path.resolve(__dirname, "dist"),
        library: "GN",
		libraryTarget: "umd",
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
};
