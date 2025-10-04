// app.js
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");

// Passport configuration (middleware)
const passport = require("./middlewares/Passport");

// Route imports
const routes = require("./routes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const passwordResetRoutes = require("./routes/passwordResetRoutes");
const adminRegistrationRoutes = require("./routes/adminRegistrationRoutes");
const subscribeRoute = require("./routes/subscribe");

const app = express();

/* ========================
   Middleware
======================== */

// Enable CORS
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Session middleware (for login sessions)
app.use(
  session({
    secret: process.env.SESSION_SECRET || "Our little secret.", // use env if available
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize Passport for authentication
app.use(passport.initialize());
app.use(passport.session());

/* ========================
   Routes
======================== */

// Public routes
app.use("/", routes);                      // Root-level routes
app.use("/auth", authRoutes);              // Authentication routes
app.use("/api/subscribe", subscribeRoute); // POST /api/subscribe

// API routes
app.use("/api", routes);                   // General /api routes
app.use("/api", passwordResetRoutes);      // Password reset routes
app.use("/vpi", userRoutes);               // VPI routes
app.use("/api/v1", adminRegistrationRoutes); // Admin registration routes

/* ========================
   Export App
======================== */
module.exports = app;
