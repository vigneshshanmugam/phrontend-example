var makeconf = require('phrontend-webpack');
var EmitShortStatsPlugin = require('phrontend-webpack/lib/emit-short-stats-plugin');
var __PROD__ = process.env.NODE_ENV==='production';
var __DEV__  = !__PROD__;

module.exports = makeconf({
	src: __dirname,
	separateStylesheet: __PROD__,
	devtool: __DEV__ ? 'cheap-module-inline-source-map' : 'source-map',
	minimize: __PROD__,
});

module.exports.plugins.push(new EmitShortStatsPlugin());
