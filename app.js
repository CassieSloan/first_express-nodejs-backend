const express = require("express");
const exhbs = require("express-handlebars");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

//set up database
mongoose.connect("mongodb://localhost/plant_depo",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });


mongoose.Promise = global.Promise
mongoose.connection.on("error", error => console.log(error));

//viewing engine (html) - not relevent to react
app.engine("handlebars", exhbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");


app.use(express.urlencoded({extended: false}));
app.use(express.json()); //replaced default notation with JSON (stream is default);

app.listen(port, () => console.log(`plant depo is running on port${port}`));

