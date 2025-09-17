const express = require('express');
const router = express.Router();

// In-memory storage for development
let vigyUsers = [
  {
    id: 1,
    fullname: 'Test Vigy User',
    email: 'test@vigy.com',
    password: 'test123', // In production, this should be hashed
    phoneNumber: '1234567890',
    address: '123 Test Street, Test City, Test State 123456',
    aadhaarNumber: '123456789012',
    gender: 'other',
    dob: '1990-01-01',
    bankDetails: {
      accountName: 'TEST USER',
      accountNumber: '1234567890',
      bankName: 'SBI',
      branch: 'TEST BRANCH',
      ifscCode: 'SBIN0001234'
    },
    referralCode: 'TEST123',
    promotionalCode: 'PROMO123',
    status: 'approved',
    isVerified: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// Public routes
router.post('/register', (req, res) => {
  try {
    const userData = req.body;
    
    // Check if user already exists
    const existingUser = vigyUsers.find(user => user.email === userData.email);
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User with this email already exists"
      });
    }

    // Create new user
    const newUser = {
      id: Date.now(),
      ...userData,
      status: 'pending',
      isVerified: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    vigyUsers.push(newUser);
    
    res.json({
      success: true,
      message: "Registration successful! Please wait for approval.",
      user: {
        id: newUser.id,
        email: newUser.email,
        status: newUser.status
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error during registration",
      error: error.message
    });
  }
});

router.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user by email
    const user = vigyUsers.find(u => u.email === email);
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }
    
    // Check password (in production, use bcrypt)
    if (user.password !== password) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }
    
    // Check if user is approved
    if (user.status !== 'approved') {
      return res.status(403).json({
        success: false,
        message: "Account not yet approved. Please wait for approval."
      });
    }
    
    res.json({
      success: true,
      message: "Login successful!",
      user: {
        id: user.id,
        fullname: user.fullname,
        email: user.email,
        status: user.status
      },
      token: 'test_token_' + user.id + '_' + Date.now()
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error during login",
      error: error.message
    });
  }
});

// Protected routes (will need middleware for authentication)
router.get('/profile', (req, res) => {
  // For now, just return a message
  res.json({
    success: true,
    message: "Profile endpoint - authentication required"
  });
});

router.put('/profile', (req, res) => {
  // For now, just return a message
  res.json({
    success: true,
    message: "Profile update endpoint - authentication required"
  });
});

module.exports = router;
