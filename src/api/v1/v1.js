const express = require("express");
const router = express.Router();
const globalConfig = require("../../../config");

//ShortenController
const shorten = require("../../controllers/shorten");

router.get("/shorten", (req, res) => {
  const { url } = req.query;
  let shortCode = shorten.shorten(url);

  if (shortCode !== null) {
    res.status(200).json({
      shortenedUrl: `${globalConfig.domainName}/${shortCode}`,
    });
  } else {
    res.status(400).json({
      Error: "Invalid Url",
    });
  }
});

router.get("/expand", (req, res) => {
  res.send("This is the expand endpoint!");
});

module.exports = router;
