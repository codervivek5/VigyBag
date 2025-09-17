const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const vigySchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  aadhaarNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    length: 12
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: false
  },
  dob: {
    type: Date,
    required: true
  },
  bankDetails: {
    accountName: {
      type: String,
      required: true,
      trim: true
    },
    accountNumber: {
      type: String,
      required: true,
      trim: true
    },
    bankName: {
      type: String,
      required: true,
      trim: true
    },
    branch: {
      type: String,
      required: true,
      trim: true
    },
    ifscCode: {
      type: String,
      required: true,
      trim: true
    }
  },
  documents: {
    panCard: {
      type: String, // File path or URL
      required: true
    },
    addressProof: {
      type: String, // File path or URL
      required: true
    },
    profilePicture: {
      type: String, // File path or URL
      required: false
    }
  },
  referralCode: {
    type: String,
    trim: true
  },
  promotionalCode: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected', 'active'],
    default: 'pending'
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  verificationDate: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Hash password before saving
vigySchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password
vigySchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Method to get public profile (without sensitive data)
vigySchema.methods.getPublicProfile = function() {
  const vigyObject = this.toObject();
  delete vigyObject.password;
  delete vigyObject.aadhaarNumber;
  delete vigyObject.bankDetails;
  delete vigyObject.documents;
  return vigyObject;
};

module.exports = mongoose.model('Vigy', vigySchema);
