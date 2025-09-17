const express = require("express");
const router = express.Router();
const passport = require("passport");
const authController = require("../controllers/authController.js");

router.get(
  "/google",
  (req, res, next) => {
    if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
      return res.status(500).json({
        message: "Google OAuth not configured",
        details: "Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET on the server",
      });
    }
    if (!process.env.GOOGLE_CALLBACK_URL && process.env.NODE_ENV !== 'development') {
      return res.status(500).json({
        message: "Missing GOOGLE_CALLBACK_URL",
        details: "Set GOOGLE_CALLBACK_URL to your backend callback URL",
      });
    }
    return next();
  },
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: process.env.FRONTEND_URL + "/auth?error=google_auth_failed" }),
  (req, res) => {
    const email = req.user.email;
    const username = req.user.username;
    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";
    res.redirect(
      `${frontendUrl}/dashboard?email=${encodeURIComponent(email)}&username=${encodeURIComponent(username)}`
    );
  }
);

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/send-otp", authController.otp);
router.post("/verify-otp", authController.verifyOtp);

module.exports = router;
