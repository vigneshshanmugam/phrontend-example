var express = require('express'),
	app = express(),
	http = require('http'),
	fs = require('fs'),
	port = process.env.PORT || 3000;

app.use('/public', express.static(__dirname + '/public'));	
app.use(function(req, res, next) {
   if(req.url.substr(-1) == '/' && req.url.length > 1)
       res.redirect(301, req.url.slice(0, -1));
   else
       next();
});
app.get('/*', function(req, res) {
	res.end(fs.readFileSync('index.html'));
});

http.createServer(app).listen(port, function(err) {
	console.log('Express server running on port', port);
});
