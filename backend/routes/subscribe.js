const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriber");
const validator = require("validator");

// POST /api/subscribe
router.post("/", async (req, res) => {
  const emailRaw = (req.body?.email ?? "").toString();
  const email = emailRaw.trim().toLowerCase();

  // Check if email is provided
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  // Validate email format
  if (!validator.isEmail(email)) {
    return res
      .status(400)
      .json({ message: "Please provide a valid email address" });
  }

  try {
    const subscriber = new Subscriber({ email });
    await subscriber.save();
    return res.status(201).json({ message: "Subscribed successfully!" });
  } catch (err) {
    // Duplicate email
    if (err?.code === 11000) {
      return res.status(400).json({ message: "Email already subscribed" });
    }

    // Schema validation error
    if (err?.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: "Please provide a valid email address" });
    }

    // Server error
    console.error("Subscription error:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

