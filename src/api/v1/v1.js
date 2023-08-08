const express = require("express");
const router = express.Router();

router.get("/shorten", (req, res) => {
  res.send("This is the shorten endpoint!");
});

router.get("/expand", (req, res) => {
  res.send("This is the expand endpoint!");
});

module.exports = router;
