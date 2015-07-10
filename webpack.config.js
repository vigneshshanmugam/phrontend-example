var makeconf = require('phrontend-webpack');
var __PROD__ = process.env.NODE_ENV==='production';
var __DEV__  = !__PROD__;

module.exports = makeconf({
	src: __dirname,
	separateStylesheet: true
});
