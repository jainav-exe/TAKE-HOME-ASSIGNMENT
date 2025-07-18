const express = require("express"); // Load express - like your magic machine brain
const fs = require("fs");           // Load file system - to open the movie box
const app = express();              // Start the machine

// When someone visits your website ("/"), show them the movie box
app.get("/", (req, res) => {
  const movies = JSON.parse(fs.readFileSync("movies_metadata.json"));
  res.json(movies); // Show all the movies
});

// Turn on the machine and say where it’s running
app.listen(3001, () => console.log("Movie machine is on: http://localhost:3001"));
