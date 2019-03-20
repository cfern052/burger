var express = require("express");
var exphbs = require("express-handlebars");
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//static directory
app.use(express.static("app/public"));

//Route
var routes= require("./controllers/burgers_controller.js");
app.use(routes);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });