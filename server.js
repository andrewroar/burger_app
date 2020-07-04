const express = require("express");
const mysql = require("mysql");
//const orm = require("./config/orm.js");
//const { selectAll } = require("./config/orm.js");
const PORT = process.env.PORT || 8080;
const app = express();
const expressHandlebars = require("express-handlebars");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
////////

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

////////
const routes = require("./controller/burger_controller.js");
app.use(routes);

////////
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
