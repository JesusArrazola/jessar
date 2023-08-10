const express = require("express");
const db = require("./src/db/db");

const PORT = process.env.PORT || 3000;
const app = express();

//Middlewares
app.use(express.static("templates"));

//Api versions router
const v1 = require("./src/api/v1/v1");
app.use("/api/v1", v1);

//Home page
app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/templates/home.html");
});

//Main
app.get("/:code", (req, res) => {
  res.status(404).sendFile(__dirname + "/templates/404.html");
});

db.createConnection().catch((err) => {
  console.log(err);
});

app.listen(PORT, () => {
  console.log(`App listenning on ${PORT}`);
});
