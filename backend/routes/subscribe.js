const express = require("express");
<<<<<<< HEAD
const router = express.Router();
const validator = require("validator");
const Subscriber = require("../models/subscriber");

// POST /api/subscribe
router.post("/", async (req, res) => {
  const emailRaw = (req.body?.email ?? "").toString();
  const email = emailRaw.trim().toLowerCase();

  // Check if email is provided
  if (!email) {
    return res.status(400).json({ message: "⚠️ A valid email is required." });
  }

  // Validate email format
  if (!validator.isEmail(email)) {
    return res
      .status(400)
      .json({ message: "⚠️ Please provide a valid email address." });
  }

  try {
    const subscriber = new Subscriber({ email });
    await subscriber.save();

    return res.status(201).json({ message: "🎉 Subscribed successfully!" });
  } catch (err) {
    console.error("Subscribe error:", err);

    // Duplicate email
    if (err.code === 11000) {
      return res.status(409).json({ message: "This email is already subscribed." });
    }

    // Schema validation error
    if (err.name === "ValidationError") {
      return res.status(400).json({ message: err.message });
    }

    // Server error
    return res.status(500).json({ message: "❌ Server error. Try again later." });
=======
const validator = require("validator");
const router = express.Router();

// POST /api/subscribe
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required"
      });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address"
      });
    }
    // TODO: Add email to database or mailing list service
    // TODO: Send confirmation email
    
    res.status(200).json({
      success: true,
      message: "Successfully subscribed to newsletter",
      email: email
    });
    
  } catch (error) {
    console.error("Subscribe error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
>>>>>>> 0163c432 (resolve: merge conflicts between fix-vigy-login and main branches)
  }
});

module.exports = router;
