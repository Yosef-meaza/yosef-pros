var mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
var url = "mongodb+srv://Yosefmeaza@77qAq9g-2CqLp4z@cluster().4eew4ay.mongodb.net"
MongoClient.connect(url, function (err, db) {
   if (err) {
      console.error(err)
   } else {
      console.log("db connected");
   }
})
