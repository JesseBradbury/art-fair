const mongoose = require("mongoose");
require("dotenv").config();

// I've added the .env with my new AtlasDB user and pass.
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/art-fair");

module.exports = mongoose.connection;
