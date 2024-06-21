// app.js

const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const routes = require("./routes");

const app = express();

// cross origin connection
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use("/api", routes);

// Connect to MongoDB
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
