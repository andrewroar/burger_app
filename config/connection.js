const mysql = require("mysql");

//const dbOptions = {
//  host: "localhost",
//  port: 3306,
//  user: "root",
//  password: "",
//  database: "burger_db",
//};

//const connection = mysql.createConnection(dbOptions);

//const onConnect = (err) => {
//  if (err) throw err;
//  console.log("Successfully connected to the Burger DB");
//};

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "hacktheplanet",
    database: "burger_db",
  });
}

connection.connect();

module.exports = connection;
