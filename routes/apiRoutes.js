const router = require("express").Router();
const fs = require("fs");
const { uuid } = require('uuidv4');

router.get("/notes", function (req, res) {
  fs.readFile("db/db.json", "utf8", function (err, data) {
    if (err) throw err;
    console.log(data);
    res.send(JSON.parse(data));
  });
  console.log("GET working");
});

router.post("/notes", function (req, res) {
  console.log(req.params);
  fs.readFile("db/db.json", "utf8", function (err, data) {
    if (err) throw err;

   
    let note = JSON.parse(data);
    let newNote = req.body;
    newNote.id = uuid();
    note.push(newNote);

    fs.writeFile("db/db.json", JSON.stringify(note), err => {
      if (err) throw err;
    });
  });
  res.json("POST responding");
});

router.delete("/notes/:id", function (req, res) {
  fs.readFile("db/db.json", "utf8", function(error, data) {
          let noteId = req.params.id;
          let noteData = JSON.parse(data);
          noteData = noteData.filter(function(note) {
              if (noteId != note.id) {
                return true;
              } else {
                return false;
              };
          }); 
    fs.writeFile("db/db.json", JSON.stringify(noteData), function (error) {
      if (error)
        throw error;
      res.send(console.log("Deleted Successfully"));
    });
  });
});


module.exports = router;
