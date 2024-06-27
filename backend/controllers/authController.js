const User = require("../models/User.js");

exports.signup = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const newUser = await User.create({ username, phone, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
