const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	entry: "./src/index.ts",
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: "ts-loader",
				options: {
					configFile: "tsconfig-build.udm.json",
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
		filename: "gn.js.client.js",
		path: path.resolve(__dirname, "dist"),
		library: {
			type: "umd",
			name: "GN",
		},
		environment: {
			arrowFunction: true,
		},
	},
	optimization: {
		minimize: false,
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
