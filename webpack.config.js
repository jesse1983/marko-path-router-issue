const webpack = require('webpack');
const path = require('path');

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: './src/index.js',

	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
    resolve: {
        extensions: ['.js', '.marko']
    },
	module: {
		rules: [
			{
				test: /\.marko$/,
				use: [{
                    loader: 'marko-loader'
                }],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}					
                }],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}			
		]
	},

	plugins: [new UglifyJSPlugin()]
};
