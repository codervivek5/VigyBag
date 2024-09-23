// server.js
const app = require("./app");
const connectDB = require("./config/db"); // Import the connectDB function from db.js
const config = require("./config/config"); // Import configuration

// Connect to MongoDB
connectDB();

// Start the server
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
