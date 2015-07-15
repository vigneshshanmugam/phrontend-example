// a hack to compile for gh-pages
// and host static content in gh-pages

var fs = require('fs');
var path = require('path');

// hack to require json
var pub = path.join(__dirname, 'public');
var versionFile = path.join(pub, 'current.version');
if (fs.existsSync(versionFile))
	fs.renameSync(versionFile, path.join(pub, 'current.version.json'));

var current = require('./public/current.version');

if (fs.existsSync(path.join(pub, current.js[0])))
	fs.renameSync(path.join(pub, current.js[0]), path.join(pub, 'app.bundle.js'));
if (fs.existsSync(path.join(pub, current.css[0])))
	fs.renameSync(path.join(pub, current.css[0]), path.join(pub, 'bundle.css'));

console.log('Rename successful');
