// config/db.js

const mongoose = require("mongoose");
const config = require("./config"); // Import config.js from the same directory

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    console.log("⚠️  MongoDB not available. Using in-memory fallback for development.");
    // Don't exit for development - let the app continue
  }
};

module.exports = connectDB;
