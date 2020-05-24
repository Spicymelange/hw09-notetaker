// Dependencies
// =============================================================
var express = require("express"); //set up dependencies
var htmlRoutes = require("./routes/htmlRoutes");
var apiRoutes = require("./routes/apiRoutes");

// Sets up the Express App
// =============================================================
var app = express(); //create your app ( this line must be in this format and must be "app")
var PORT = process.env.PORT || 3000; //assign a port

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
