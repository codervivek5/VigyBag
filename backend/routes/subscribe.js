// // // const express = require("express");
// // // const router = express.Router();
// // // const Subscriber = require("../models/subscriber"); // ensure this file exists
// // // const validator = require("validator");

// // // // POST /api/subscribe
// // // router.post("/", async (req, res) => {
// // //   const email = (req.body?.email ?? "").toString().trim().toLowerCase();

// // //   if (!email) return res.status(400).json({ message: "Email is required" });
// // //   if (!validator.isEmail(email))
// // //     return res.status(400).json({ message: "Please provide a valid email address" });

// // //   try {
// // //     const subscriber = new Subscriber({ email });
// // //     await subscriber.save();
// // //     res.status(201).json({ message: "Subscribed successfully!" });
// // //   } catch (err) {
// // //     if (err.code === 11000) return res.status(400).json({ message: "Email already subscribed" });
// // //     console.error(err);
// // //     res.status(500).json({ message: "Server error" });
// // //   }
// // // });

// // // module.exports = router;
// // // routes/subscribe.js
// // const express = require("express");
// // const router = express.Router();

// // // Example: In-memory store
// // let subscribers = [];

// // router.post("/", (req, res) => {
// //   const { email } = req.body;
// //   if (!email) return res.status(400).json({ message: "Email is required" });

// //   // Optional: check if already subscribed
// //   if (subscribers.includes(email)) {
// //     return res.status(400).json({ message: "Email already subscribed" });
// //   }

// //   subscribers.push(email);
// //   res.status(200).json({ message: "Subscribed successfully!" });
// // });

// // module.exports = router;
// const express = require("express");
// const router = express.Router();

// // Example: In-memory storage for subscribers
// let subscribers = [];

// router.post("/", (req, res) => {
//   try {
//     const { email } = req.body;

//     if (!email) {
//       return res.status(400).json({ message: "Email is required." });
//     }

//     // Optional: simple email regex validation
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//       return res.status(400).json({ message: "Invalid email format." });
//     }

//     // Check duplicate
//     if (subscribers.includes(email)) {
//       return res.status(400).json({ message: "Email already subscribed." });
//     }

//     subscribers.push(email);
//     return res.status(200).json({ message: "Subscribed successfully!" });
//   } catch (err) {
//     console.error("Subscribe route error:", err);
//     return res.status(500).json({ message: "Server error. Try again later." });
//   }
// });

// module.exports = router;
// const express = require("express");
// const router = express.Router();

// router.post("/", (req, res) => {
//   const { email } = req.body;
//   if (!email) return res.status(400).json({ message: "Email is required." });

//   // For testing: simple in-memory array
//   res.status(200).json({ message: `Subscribed: ${email}` });
// });

// module.exports = router;
const express = require("express");
const router = express.Router();

// Temporary in-memory storage (replace with DB in production)
const subscribers = [];

router.post("/", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }

  // Check if already subscribed
  const exists = subscribers.includes(email.toLowerCase());
  if (exists) {
    return res.status(400).json({ message: "This email is already subscribed." });
  }

  subscribers.push(email.toLowerCase());
  return res.status(200).json({ message: "🎉 Subscribed successfully!" });
});

module.exports = router;

