const mongoose = require("mongoose");
require("dotenv").config();

const createConnection = async () => {
  const { DB_USER, DB_PASS } = process.env;
  const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.wsfbmmk.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(uri);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createConnection };
