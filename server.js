var express = require("express");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 3000;

// app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
