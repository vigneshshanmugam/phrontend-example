var devServer = require('phrontend-webpack/lib/dev-server');

devServer(require('./webpack.config'), {
	port: process.env.PORT || 3000
});
