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
        library: {
            type: "umd",
            name: "GN",
        },
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
