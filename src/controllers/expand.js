const shortLinkModel = require("../models/shortlink");

const expand = async (shortCode) => {
  let expandedUrl = { url: "This code doesn't exists" };

  try {
    expandedUrl = await shortLinkModel.findOne({ shortCode }).exec();
  } catch (err) {
    console.log(err, "Throwing an errrrrrr");
  }

  return expandedUrl !== null ? expandedUrl.url : null;
};

module.exports = { expand };
