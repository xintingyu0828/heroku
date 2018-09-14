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
    host:'localhost',
    user:'ue6ecy2utvzmb21',
    passward:'zhuavdvvsgi15xr6',
    database:'d2sr48blwfwctkjy'

  });
};
// Export connection for our ORM to use.
module.exports = connection;
