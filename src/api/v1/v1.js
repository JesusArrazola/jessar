const express = require("express");
const router = express.Router();
const globalConfig = require("../../../config");

//Controllers
const shorten = require("../../controllers/shorten");
const expand = require("../../controllers/expand");

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

router.get("/expand", async (req, res) => {
  const { code } = req.query;
  if (code === undefined) {
    //res.status(401).json({ error: "Arguments missing" });
  }

  let url = await expand.expand(code);

  if (url !== null) res.status(200).json({ url });
  else res.status(404).json({ error: "The code doesn't exists" });
});

module.exports = router;
