var https = require('https');
module.exports = {
   printName(person) {
      return `${person.last}, ${person.first}`;
   },
   loadWiki(person, callback) {
      var url = `https://en.wikipedia.org/wiki/${person.first}`;
      https.get(url, (res) => {
         var body = '';
         res.setEncoding('utf-8');
         res.on('data', (chunk) => { body += chunk });
         res.on('end', () => {
            callback(body)
         });
      })
   }
}