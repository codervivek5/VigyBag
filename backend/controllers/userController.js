const User = require("../models/User");

exports.getUser = async (req, res) => {
  try {
    const { user_name } = req.params;

    if (!user_name)
      return res.status(400).json({ message: "User name is required" });

    const user = await User.findOne({ username: user_name });

    if (!user) return res.status(404).json({ message: "Account not found" });

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, gender } = req.body;

    if (!name || !email || !phone || !gender) return;
    res
      .status(400)
      .json({ message: "Enter the required fields to update your profile" });

    const user = await User.findById(id);

    if (!user) return res.status(404).json({ message: "Account not found" });

    const updatedUser = await User.findByIdAndUpdate(
      { _id: id },
      { name, email, phone, gender },
      { new: true }
    );

    if (updatedUser)
      return res
        .status(200)
        .json({ message: "Profile updated", data: updatedUser });

    return res.status(500).json({ message: "Failed to your profile" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
