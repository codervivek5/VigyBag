const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriber");

// POST /api/subscribe
router.post("/", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  try {
    const subscriber = new Subscriber({ email });
    await subscriber.save();
    res.status(200).json({ message: "Subscribed successfully!" });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ message: "Email already subscribed" });
    }
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
