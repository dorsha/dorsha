const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = () => ({
	devtool: 'eval-source-map', // https://webpack.js.org/configuration/devtool
	devServer: {
		open: true,
		hot: true,
		port: 3333,
		historyApiFallback: true,
		watchFiles: [path.resolve(__dirname, 'src')],
		client: {
			logging: 'warn'
		}
	},
	plugins: [new ReactRefreshWebpackPlugin()],
	module: {
		rules: [
			{
				test: /\.sa?css$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.[jt]sx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: require.resolve('babel-loader'),
						options: {
							plugins: [require.resolve('react-refresh/babel')]
						}
					}
				]
			}
		]
	}
});
