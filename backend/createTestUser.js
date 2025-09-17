const mongoose = require('mongoose');
const Vigy = require('./models/Vigy');
const config = require('./config/config');

// Connect to MongoDB
mongoose.connect(config.mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Test user data
const testUser = {
  fullname: 'Test Vigy User',
  email: 'test@vigy.com',
  password: 'test123',
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
  status: 'approved', // Set to approved so user can login
  isVerified: true
};

async function createTestUser() {
  try {
    // Check if user already exists
    const existingUser = await Vigy.findOne({ email: testUser.email });
    
    if (existingUser) {
      console.log('Test user already exists');
      console.log('Email:', existingUser.email);
      console.log('Status:', existingUser.status);
      return;
    }

    // Create new test user
    const vigy = new Vigy(testUser);
    await vigy.save();
    
    console.log('Test user created successfully!');
    console.log('Email:', vigy.email);
    console.log('Password: test123');
    console.log('Status:', vigy.status);
    
  } catch (error) {
    console.error('Error creating test user:', error);
  } finally {
    mongoose.connection.close();
  }
}

createTestUser();
