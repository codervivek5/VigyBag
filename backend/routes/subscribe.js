const express = require("express");
const router = express.Router();

// Temporary in-memory storage (replace with DB in production)
const subscribers = [];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation

router.post("/", (req, res) => {
  const { email } = req.body;

  // 1. Verify email exists and is a string
  if (!email || typeof email !== "string") {
    return res.status(400).json({ message: "⚠️ A valid email is required." });
  }

  // 2. Normalize email: trim and lowercase
  const normalizedEmail = email.trim().toLowerCase();

  // 3. Validate email format
  if (!emailRegex.test(normalizedEmail)) {
    return res.status(400).json({ message: "⚠️ Please enter a valid email address." });
  }

  // 4. Check for duplicates using normalized email
  if (subscribers.includes(normalizedEmail)) {
    return res.status(400).json({ message: "This email is already subscribed." });
  }

  // Add subscriber
  subscribers.push(normalizedEmail);

  return res.status(200).json({ message: "🎉 Subscribed successfully!" });
});

module.exports = router;
