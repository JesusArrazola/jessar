const express = require("express");
const router = express.Router();
const globalConfig = require("../../../config");

//ShortenController
const shorten = require("../../controllers/shorten");

router.get("/shorten", async (req, res) => {
  const { url } = req.query;
  let response = await shorten.shorten(url);

  if (response.code === 200) {
    res.status(200).json({
      shortenedUrl: `${globalConfig.domainName}/${response.shortCode}`,
    });
  } else {
    res.status(response.code).json({
      Error: response.status,
    });
  }
});

router.get("/expand", (req, res) => {
  res.send("This is the expand endpoint!");
});

module.exports = router;
