const express = require("express");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");  // ✅ persistent session store
const passport = require("./middlewares/Passport");
const routes = require("./routes"); // general /api routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const passwordResetRoutes = require("./routes/passwordResetRoutes");
const adminRegistrationRoutes = require("./routes/adminRegistrationRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Use persistent session store instead of memory
app.use(
  session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI, // Make sure to set MONGO_URI in .env
      collectionName: "sessions",
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/auth", authRoutes);               // /auth
app.use("/api", routes);                    // general /api routes (includes /api/subscribe inside if defined)
app.use("/api", passwordResetRoutes);       // /api/password-reset
app.use("/vpi", userRoutes);                // /vpi
app.use("/api/v1", adminRegistrationRoutes);// /api/v1/admin

module.exports = app;
