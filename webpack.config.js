const path = require('path');
const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const modeConfiguration = (env) => require(`./bundle/webpack.${env}`)(env);

const MODES = ['production', 'development'];

module.exports = ({ mode } = { mode: 'production' }) => {
	// validate mode is valid, file configuration is loaded according to name
	if (!MODES.includes(mode)) {
		return;
	}

	return merge(
		{
			mode,
			entry: ['./src/index.tsx'],
			output: {
				publicPath: '/',
				path: path.resolve(__dirname, 'build'),
				filename: 'dorsha-app.[contenthash].js',
				clean: true,
				assetModuleFilename: 'images/[hash][ext][query]'
			},
			// loaders
			module: {
				rules: [
					// assets - https://webpack.js.org/guides/asset-modules
					{
						test: /\.(png|jpg|gif|svg)$/,
						type: 'asset/resource'
					},
					{
						test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
						type: 'asset/resource'
					},
					// js/ts/tsx for babel
					{
						test: /\.(js|ts|tsx)$/,
						exclude: /node_modules/,
						use: {
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env', '@babel/preset-typescript']
							}
						}
					},
					// css
					{
						test: /\.css$/i,
						use: ['style-loader', 'css-loader']
					},
					{
						test: /sitemap\.xml/,
						type: 'asset/resource',
						generator: {
							filename: 'sitemap.xml'
						}
					},
					{
						test: /robots\.txt/,
						type: 'asset/resource',
						generator: {
							filename: 'robots.txt'
						}
					},
					{
						test: /404\.html/,
						type: 'asset/resource',
						generator: {
							filename: '404.html'
						}
					},
					{
						test: /google2aaefee79ec62e95\.html/,
						type: 'asset/resource',
						generator: {
							filename: 'google2aaefee79ec62e95.html'
						}
					}
				]
			},
			plugins: [
				new HtmlWebpackPlugin({
					template: path.resolve(__dirname, 'public/index.html'),
					hash: true, // cache busting
					favicon: './src/assets/favicon.ico'
				}),
				new webpack.EnvironmentPlugin({
					NODE_ENV: mode
				})
			],
			resolve: {
				extensions: ['.js', '.ts', '.tsx', '.json', '.css'],
				modules: ['src', 'node_modules'],
				plugins: [new TsconfigPathsPlugin()]
			}
		},
		modeConfiguration(mode)
	);
};
