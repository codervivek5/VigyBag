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
<<<<<<< HEAD
const subscribeRoute = require("./routes/subscribe");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
=======
const vigyRoutes = require("./routes/vigyRoutes");
const subscribeRoute = require("./routes/subscribe");

const app = express();

// Middleware setup
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true
}));
>>>>>>> b4f65404 (Fix: Corrected routing for 'Login as Vigy' button (Issue #2638))
app.use(
  session({
    secret: process.env.SESSION_SECRET || "Our little secret.",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
  })
);
app.use(passport.initialize());
app.use(passport.session());

<<<<<<< HEAD
// Routes
app.use("/api/subscribe", subscribeRoute); // POST /api/subscribe
app.use("/auth", authRoutes);              // /auth
app.use("/api", routes);                   // general /api routes (e.g. products)
app.use("/api", passwordResetRoutes);      // /api/password-reset
app.use("/vpi", userRoutes);               // /vpi
app.use("/api/v1", adminRegistrationRoutes); // /api/v1/admin
=======

// Root route for testing
app.get("/", (req, res) => {
  res.json({ 
    message: "VigyBag Backend Server is Running! 🚀",
    status: "success",
    timestamp: new Date().toISOString(),
    endpoints: {
      vigy: "/api/vigy",
      auth: "/auth",
      admin: "/api/v1"
    }
  });
});

// Route setup
app.use("/api/subscribe", subscribeRoute); // POST /api/subscribe
app.use("/auth", authRoutes);
app.use("/api", routes);
app.use("/api", passwordResetRoutes);
app.use("/vpi", userRoutes);
app.use("/api/v1", adminRegistrationRoutes);
app.use("/api/vigy", vigyRoutes);

// Test route for Vigy API
app.get("/api/vigy/test", (req, res) => {
  res.json({ 
    message: "Vigy API is working! ✅",
    status: "success",
    endpoint: "/api/vigy/test"
  });
});

// Test route for Google OAuth configuration
app.get("/auth/google/test", (req, res) => {
  const hasClientId = !!process.env.GOOGLE_CLIENT_ID;
  const hasClientSecret = !!process.env.GOOGLE_CLIENT_SECRET;
  const callbackUrl = process.env.GOOGLE_CALLBACK_URL || "http://localhost:5000/auth/google/callback";
  
  res.json({
    message: "Google OAuth Configuration Test",
    status: hasClientId && hasClientSecret ? "configured" : "missing_credentials",
    configuration: {
      hasClientId,
      hasClientSecret,
      callbackUrl,
      frontendUrl: process.env.FRONTEND_URL || "http://localhost:3000"
    }
  });
});


>>>>>>> b4f65404 (Fix: Corrected routing for 'Login as Vigy' button (Issue #2638))

module.exports = app;
