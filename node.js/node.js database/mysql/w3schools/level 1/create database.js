const mysql = require('mysql');
var con = mysql.createConnection({
   host: 'localhost',
   user: "Yosef",
   password: "200 gates for davil",
});
con.connect(function (err) {
   if (err) {
      console.log(err);
   } else {
      console.log("connected");
      con.query(sql, function (err, result) {
         if (err) return console.error(err);
         console.log("result", result);
      });
      con.query("CREATE DATABASE mydb", function (err) {
         if (err) {
            console.log(err);
         } else {
            console.log('Database created');
         }
      });
   }
});