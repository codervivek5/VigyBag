const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriber"); // your existing model

router.post("/", async (req, res) => {
  const { email } = req.body;

  if (!email || typeof email !== "string") {
    return res.status(400).json({ message: "⚠️ A valid email is required." });
  }

  const normalizedEmail = email.trim().toLowerCase();

  try {
    // Check if already subscribed
    const existing = await Subscriber.findOne({ email: normalizedEmail });
    if (existing) {
      return res.status(400).json({ message: "This email is already subscribed." });
    }

    // Save to database
    const newSubscriber = new Subscriber({ email: normalizedEmail });
    await newSubscriber.save();

    return res.status(200).json({ message: "🎉 Subscribed successfully!" });
  } catch (err) {
    console.error("Subscribe error:", err);
    return res.status(500).json({ message: "❌ Server error. Try again later." });
  }
});

module.exports = router;
