// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "cat_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


//Heroku code 
if (process.env.JAWSDB_URL){
connection=mysql.createConnection(process.env.JAWSDB_URL);
} else{
  connection=mysql.createConnection({
    host:'ls0znzigqvfehvff5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user:'qngbvvh2rdt99qa4',
    passward:'mjyftmv2y43cwse1',
    database:'ac1qn1faoa2rhfhq'

  });
};
// Export connection for our ORM to use.
module.exports = connection;
