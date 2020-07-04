const mysql = require("mysql");

const dbOptions = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burger_db",
};

const connection = mysql.createConnection(dbOptions);

const onConnect = (err) => {
  if (err) throw err;
  console.log("Successfully connected to the Burger DB");
};

connection.connect(onConnect);

module.exports = connection;
