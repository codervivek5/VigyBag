const User = require("../models/User.js");
const bcrypt = require("bcrypt");

// Signup controller
exports.signup = async (req, res) => {
  try {
    const { fullname, email, password, phone } = req.body;

    // Validate if all required fields are present
    if (!fullname || !email || !password || !phone) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      fullname,
      email,
      password: hashedPassword,
      phone,
    });
    res.status(201).json({ message: "User created successfully", newUser });
  } catch (error) {
    // Handle validation errors or other errors
    if (error.code === 11000 && error.keyPattern && error.keyPattern.fullname) {
      return res.status(400).json({ message: "Username already exists" });
    }
    res.status(500).json({ error: error.message });
  }
};

// Login controller remains unchanged
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
