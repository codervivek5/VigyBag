// app.js
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("./middlewares/Passport");
const routes = require("./routes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const passwordResetRoutes = require("./routes/passwordResetRoutes");
const adminRegistrationRoutes = require("./routes/adminRegistrationRoutes");

const app = express();

// Middleware setup
app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Route setup
app.use("/auth", authRoutes);
app.use("/api", routes);
app.use("/api", passwordResetRoutes);
app.use("/vpi", userRoutes);
app.use("/api/v1", adminRegistrationRoutes);

module.exports = app;
