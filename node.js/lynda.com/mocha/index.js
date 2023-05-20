var { createServer } = require('http');
var express = require('express')();
var tools = require('./lib/tools');


createServer(express).listen(3000);
express.use((req, res, next) => {
   tools.loadWiki({ first: 'NF' }, (html) => {
      res.write('halo');
      res.end(html);
   })
   next();
});
express.get('/', () => { });