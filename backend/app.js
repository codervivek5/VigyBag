// app.js
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require('connect-mongo');

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
    secret: process.env.SESSION_SECRET || "Our little secret.",
    resave: false,
    saveUninitialized: false,
    // 2. CONFIGURE THE MONGOSTORE
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      collectionName: 'sessions' // Optional: name of the collection to store sessions
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 // Optional: 1 week
    }
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
