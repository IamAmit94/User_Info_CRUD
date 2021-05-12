var mySql = require("mysql");

var connection = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "users",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Database connected successfully !");
});

module.exports = connection;
