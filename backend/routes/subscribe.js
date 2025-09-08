const express = require("express");
const express = require("express");
const router = express.Router();
const validator = require("validator");
const Subscriber = require("../models/subscriber");

// POST /api/subscribe
router.post("/", async (req, res) => {
  try {
    const emailRaw = (req.body?.email ?? "").toString();
    const email = emailRaw.trim().toLowerCase();

    // Check if email is provided
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "⚠️ A valid email is required."
      });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "⚠️ Please provide a valid email address."
      });
    }

    // Save subscriber to DB
    const subscriber = new Subscriber({ email });
    await subscriber.save();

    return res.status(201).json({
      success: true,
      message: "🎉 Subscribed successfully!",
      email
    });
  } catch (err) {
    console.error("Subscribe error:", err);

    // Duplicate email
    if (err.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "This email is already subscribed."
      });
    }

    // Schema validation error
    if (err.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: err.message
      });
    }

    // Server error
    return res.status(500).json({
      success: false,
      message: "❌ Server error. Try again later."
    });
  }
});

module.exports = router;

  }
});

module.exports = router;
