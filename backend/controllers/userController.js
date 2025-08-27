const { mongoose } = require("mongoose");
const User = require("../models/User");

exports.getUsers = async (_, res) => {
  try {
    const users = await User.find().select("-password -__v").lean();

    return res.status(200).json({ users });
  } catch (error) {
    console.error("getUsers error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.getUserByUsername = async (req, res) => {
  try {
    const { user_name } = req.params;

    if (!user_name)
      return res.status(400).json({ message: "Username is required" });

    const user = await User.findOne({ username: user_name })
      .select("-password -__v")
      .lean();

    if (!user) return res.status(404).json({ message: "User not found" });

    return res.status(200).json({ user });
  } catch (error) {
    console.error("getUserByUsername error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid user id" });
    }

    const { name, email, phone, gender, profile_picture } = req.body;

    if (!name || !email || !phone || !gender || !profile_picture)
      return res
        .status(400)
        .json({ message: "Enter the required fields to update your profile" });

    const user = await User.findById(id);

    if (!user) return res.status(404).json({ message: "User not found" });

    const updatedUser = await User.findByIdAndUpdate(
      { _id: id },
      { name, email, phone, gender, profile_picture },
      { new: true }
    ).select("-password -__v")
      .lean();

    if (updatedUser)
      return res
        .status(200)
        .json({ message: "Profile updated", user: updatedUser });

    return res.status(500).json({ message: "Failed to your profile" });
  } catch (error) {
    console.error("updateUser error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
