const router = require("express").Router();
const fs = require("fs");
const { uuid } = require("uuidv4");

//display saved notes
router.get("/notes", function (req, res) {
  fs.readFile("db/db.json", "utf8", function (err, data) {
    if (err) throw err;
    res.send(JSON.parse(data));
  });
  console.log("GET working");
});

//save notes and append to json file
router.post("/notes", function (req, res) {
  fs.readFile("db/db.json", "utf8", function (err, data) {
    if (err) throw err;

    let note = JSON.parse(data);
    let newNote = req.body;
    //give an id to each object to retrieve it later
    newNote.id = uuid();
    note.push(newNote);

    //write the file
    fs.writeFile("db/db.json", JSON.stringify(note), (err) => {
      if (err) throw err;
    });
  });
  res.json("");
});

//retrieve the note onject by id and delete it
router.delete("/notes/:id", function (req, res) {
  fs.readFile("db/db.json", "utf8", function (err, data) {
    if (err) throw err;
    let noteId = req.params.id;
    let noteData = JSON.parse(data);
    noteData = noteData.filter(function (note) {
      if (noteId != note.id) {
        return true;
      } else {
        return false;
      }
    });
    //write file
    fs.writeFile("db/db.json", JSON.stringify(noteData), function (error) {
      if (error) throw error;
      res.send(console.log("Deleted Successfully"));
    });
  });
});

module.exports = router;
