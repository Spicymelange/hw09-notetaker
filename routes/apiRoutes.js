var router = require("express").Router();
var fs = require("fs");

router.get("/notes", function (req, res) {
    fs.readFile("db/db.json", "utf8", function (err, data) {
        if (err) throw err;
        console.log(data);
        res.send(JSON.parse(data));
    });
    console.log("expect the spanish inquis...");
  
});

// 
router.post("/notes", function (req, res) {
    res.json("false");
});

router.delete("/notes/:id", function (req, res) {
    res.send("test");
});

module.exports = router;