var mysql = require('mysql')
const db = mysql.createConnection({
   user: "root",
   host: "localhost",
   password: ''
});
db.connect(err => {
   if (err) throw err; else {
      console.log('database connected');
   }
})
db.query("CREATE DATABASE mydb", err => {
   if (err) throw err; else {
      console.log("created successfuly");
   }
});