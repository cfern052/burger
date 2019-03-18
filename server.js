var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static directory
app.use(express.static("app/public"));

//Route
require("./controllers/burgers_controller.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });