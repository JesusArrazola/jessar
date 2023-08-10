const { default: mongoose } = require("mongoose");

const shortLinkSchema = mongoose.Schema({
  url: String,
  shortCode: String,
});

const shortLink = mongoose.model("shortLink", shortLinkSchema);

module.exports = shortLink;
