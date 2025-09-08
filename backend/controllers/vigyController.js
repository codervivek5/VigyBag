const Vigy = require('../models/Vigy');
const jwt = require('jsonwebtoken');

// Generate JWT Token
const generateToken = (vigyId) => {
  return jwt.sign({ vigyId }, process.env.JWT_SECRET || 'mysecretkey', {
    expiresIn: '7d'
  });
};

// @desc    Register new Vigy user
// @route   POST /api/vigy/register
// @access  Public
const registerVigy = async (req, res) => {
  try {
    const {
      fullname,
      email,
      password,
      phoneNumber,
      address,
      aadhaarNumber,
      gender,
      dob,
      bankAccountName,
      bankAccountNumber,
      bankName,
      bankBranch,
      ifscCode,
      referralCode,
      promotionalCode
    } = req.body;

    // Check if Vigy already exists
    const existingVigy = await Vigy.findOne({ 
      $or: [{ email }, { aadhaarNumber }] 
    });

    if (existingVigy) {
      return res.status(400).json({
        success: false,
        message: existingVigy.email === email 
          ? 'Email already registered' 
          : 'Aadhaar number already registered'
      });
    }

    // Create new Vigy user
    const vigy = new Vigy({
      fullname,
      email,
      password,
      phoneNumber,
      address,
      aadhaarNumber,
      gender,
      dob,
      bankDetails: {
        accountName: bankAccountName,
        accountNumber: bankAccountNumber,
        bankName,
        branch: bankBranch,
        ifscCode
      },
      referralCode,
      promotionalCode
    });

    await vigy.save();

    // Generate token
    const token = generateToken(vigy._id);

    res.status(201).json({
      success: true,
      message: 'Vigy registration successful',
      token,
      user: vigy.getPublicProfile()
    });

  } catch (error) {
    console.error('Vigy registration error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during registration',
      error: error.message
    });
  }
};

// @desc    Login Vigy user
// @route   POST /api/vigy/login
// @access  Public
const loginVigy = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide both email and password'
      });
    }

    // Find Vigy user
    const vigy = await Vigy.findOne({ email });

    if (!vigy) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Check password
    const isPasswordValid = await vigy.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Check if account is approved
    if (vigy.status !== 'approved' && vigy.status !== 'active') {
      return res.status(403).json({
        success: false,
        message: `Account status: ${vigy.status}. Please wait for approval.`
      });
    }

    // Generate token
    const token = generateToken(vigy._id);

    res.json({
      success: true,
      message: 'Login successful',
      token,
      user: vigy.getPublicProfile()
    });

  } catch (error) {
    console.error('Vigy login error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during login',
      error: error.message
    });
  }
};

// @desc    Get Vigy profile
// @route   GET /api/vigy/profile
// @access  Private
const getVigyProfile = async (req, res) => {
  try {
    const vigy = await Vigy.findById(req.vigyId);

    if (!vigy) {
      return res.status(404).json({
        success: false,
        message: 'Vigy user not found'
      });
    }

    res.json({
      success: true,
      user: vigy.getPublicProfile()
    });

  } catch (error) {
    console.error('Get Vigy profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching profile',
      error: error.message
    });
  }
};

// @desc    Update Vigy profile
// @route   PUT /api/vigy/profile
// @access  Private
const updateVigyProfile = async (req, res) => {
  try {
    const updates = req.body;
    delete updates.password; // Don't allow password update through this route
    delete updates.email; // Don't allow email update through this route
    delete updates.aadhaarNumber; // Don't allow Aadhaar update through this route

    const vigy = await Vigy.findByIdAndUpdate(
      req.vigyId,
      { ...updates, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );

    if (!vigy) {
      return res.status(404).json({
        success: false,
        message: 'Vigy user not found'
      });
    }

    res.json({
      success: true,
      message: 'Profile updated successfully',
      user: vigy.getPublicProfile()
    });

  } catch (error) {
    console.error('Update Vigy profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating profile',
      error: error.message
    });
  }
};

module.exports = {
  registerVigy,
  loginVigy,
  getVigyProfile,
  updateVigyProfile
};
