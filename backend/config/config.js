// config/config.js

// Load environment variables from .env file
require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/myapp',
  jwtSecret: process.env.JWT_SECRET || 'mysecretkey',
  sessionSecret: process.env.SESSION_SECRET || 'defaultsessionsecret',
  googleClientID: process.env.GOOGLE_CLIENT_ID || '',
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
  // Add other configuration variables here as needed
};

module.exports = config;
