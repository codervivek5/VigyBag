const express = require("express");
const router = express.Router();
const User = require("../models/User");
const userController = require("../controllers/userController")

// router.post("/update-details", async (req, res) => {
//   try {
//     const { email, phone } = req.body;
//     const user = await User.findById(req.user.id);
//     if (user) {
//       user.email = email;
//       user.phone = phone;
//       await user.save();
//       res.status(200).send("Details updated successfully");
//     } else {
//       res.status(404).send("User not found");
//     }
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

router.get("/", userController.getUsers)
router.get("/:user_name", userController.getUserByUsername)
router.put("/:id", userController.updateUser);

module.exports = router;
