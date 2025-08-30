const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriber");

router.post("/", async (req, res) => {
  const { email } = req.body;

  if (!email || typeof email !== "string") {
    return res.status(400).json({ message: "⚠️ A valid email is required." });
  }

  const normalizedEmail = email.trim().toLowerCase();

  try {
    const newSubscriber = new Subscriber({ email: normalizedEmail });
    await newSubscriber.save();

    return res.status(201).json({ message: "🎉 Subscribed successfully!" });
  } catch (err) {
    console.error("Subscribe error:", err);

    if (err.code === 11000) {
      // Duplicate key error
      return res.status(409).json({ message: "This email is already subscribed." });
    } else if (err.name === "ValidationError") {
      return res.status(400).json({ message: err.message });
    } else {
      return res.status(500).json({ message: "❌ Server error. Try again later." });
    }
  }
});

module.exports = router;
