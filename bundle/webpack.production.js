const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = () => ({
	devtool: 'source-map', // https://webpack.js.org/configuration/devtool
	performance: {
		maxEntrypointSize: 5242880, // 5MB
		maxAssetSize: 5242880 // 5MB
	},
	module: {
		rules: [
			{
				test: /\.sa?css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			}
		]
	},
	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin({}),
			new TerserPlugin({
				parallel: true, // multi-process parallel running to improve the build speed. Default number of concurrent runs: os.cpus().length - 1
				terserOptions: {
					compress: {
						pure_funcs: [
							'console.log',
							'console.info',
							'console.debug',
							'console.warn'
						],
						drop_debugger: true
					},
					output: { comments: false }
				}
			})
		]
	},
	plugins: [new MiniCssExtractPlugin()]
});
