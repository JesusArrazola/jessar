const express = require("express");
const db = require("./src/db/db");

const PORT = process.env.PORT || 3000;
const app = express();

//Controllers
const expand = require("./src/controllers/expand");

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
app.get("/:code", async (req, res) => {
  const { code } = req.params;

  let url = await expand.expand(code);
  if (url !== null) {
    res.redirect(`https://${url}`);
  } else {
    res.status(400).sendFile(__dirname + "/templates/404.html");
  }
});

app.listen(PORT, async () => {
  await db.createConnection();
  console.log(`App listenning on ${PORT}`);
});
