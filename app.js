var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser=require('body-parser');

app.use(bodyParser.urlencoded())
app.engine('html', require('ejs').renderFile);
app.use(require('express').static("public"));

var homeController = require("./controllers/HomeController.js");

app.get("/", function (req, res) {
  console.log("index girildi");
  res.render("index.html");
})

app.get("/getusers", homeController.userList);

app.post("/enteringleaving", homeController.enteringLeaving);

app.post("/laststatus", homeController.lastStatus);

app.post("/worktime", homeController.worktime);


app.listen(8888, function() {
  console.log('Server running at http://127.0.0.1:8888/');
});
