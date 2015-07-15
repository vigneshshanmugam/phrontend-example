# phrontend & phrontend-webpack example

+ [phrontend](https://github.com/flipkart-incubator/phrontend)
+ [phrontend-webpack](https://github.com/flipkart-incubator/phrontend-webpack)

## Demo ?

+ https://vigneshh.in/phrontend-example

## Development

+ requires **npm@3** and **node@0.12**

+ `npm install`
+ `npm start` - starts webpack-dev-server

## Production

+ `npm run build`

This emits css and js files. Use `public/current.version` to pick the current version of the file to push it to CDN or something similar. An example hack for adding it to git is [here](gh-pages.js).
