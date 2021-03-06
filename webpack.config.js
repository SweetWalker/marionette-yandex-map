'use strict';

const webpack = require('webpack');

module.exports = {
	entry: {
		entry: './src/entry',
	},

	output: {
		path: __dirname + "/public/dist",
		filename: '2.js'
	},

	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel',
			query: {
				presets: ['es2015']
			}
		}]
	},

	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			mangle: true
		})
	]
};
