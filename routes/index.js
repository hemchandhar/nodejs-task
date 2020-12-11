var express = require("express");
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Hemchandhar R" });
});

router.post("/my-details", function (req, res, next) {
  const name = req.body.name;
  const college = req.body.college;
  const mobileNO = req.body.mobileNO;
  var logger = fs.createWriteStream("credientials.txt", {
    flags:'a'
  });
  logger.write(name+', ');
  logger.write(college+', ');
  logger.write(mobileNO+'\n');
  res.send(
    `<h1>Entered Name is ${name}</h1> <br> <b>Details are successfully written on text file</b>`
  );
});

module.exports = router;
