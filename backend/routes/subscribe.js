const express = require("express");
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
  }
});

module.exports = router;
