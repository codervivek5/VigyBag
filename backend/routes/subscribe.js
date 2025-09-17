const express = require("express");
const validator = require("validator");
const Subscriber = require("../models/subscriber");
const router = express.Router();

// POST /api/subscribe
router.post("/", async (req, res) => {
  const emailRaw = (req.body?.email ?? "").toString();
  const email = emailRaw.trim().toLowerCase();

  if (!email) {
    return res.status(400).json({ message: "⚠️ A valid email is required." });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "⚠️ Please provide a valid email address." });
  }

  try {
    const subscriber = new Subscriber({ email });
    await subscriber.save();
    return res.status(201).json({ message: "🎉 Subscribed successfully!" });
  } catch (err) {
    console.error("Subscribe error:", err);

    if (err.code === 11000) {
      return res.status(409).json({ message: "This email is already subscribed." });
    }

    if (err.name === "ValidationError") {
      return res.status(400).json({ message: err.message });
    }

    return res.status(500).json({ message: "❌ Server error. Try again later." });
  }
});

module.exports = router;
