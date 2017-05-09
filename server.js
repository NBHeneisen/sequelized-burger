var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");


var port = process.env.PORT || 8080;

var app = express();

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/burgers_controller.js")(app);

app.listen(port);