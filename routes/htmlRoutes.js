var path = require("path");
var router = require("express").Router();

//display homepage
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//display notes page
router.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = router;