// app.js
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("./middlewares/Passport");

const routes = require("./routes"); // general /api routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const passwordResetRoutes = require("./routes/passwordResetRoutes");
const adminRegistrationRoutes = require("./routes/adminRegistrationRoutes");
const subscribeRoute = require("./routes/subscribe");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/subscribe", subscribeRoute); // POST /api/subscribe
app.use("/auth", authRoutes);              // /auth
app.use("/api", routes);                   // general /api routes (e.g. products)
app.use("/api", passwordResetRoutes);      // /api/password-reset
app.use("/vpi", userRoutes);               // /vpi
app.use("/api/v1", adminRegistrationRoutes); // /api/v1/admin

module.exports = app;
