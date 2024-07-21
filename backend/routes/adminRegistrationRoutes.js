const express = require('express');
const router = express.Router();
const AdminRegistration = require('../models/AdminRegistration');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure upload directory exists
const uploadDir = path.join(__dirname, '..', 'public', 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 50 * 1024 }, // 50KB limit
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|pdf/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb('Error: Images (jpeg, jpg, png) and PDFs only!');
    }
  }
});

router.get('/vigy_form', async (req, res) => {
  res.status(200).json({ message: 'Welcome to the registration form!' });
});

router.post('/vigy_form', upload.fields([
  { name: 'panCard', maxCount: 1 },
  { name: 'addressProof', maxCount: 1 },
  { name: 'profilePicture', maxCount: 1 }
]), async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ message: 'No files were uploaded.' });
    }

    const {
      fullname,
      dob,
      gender,
      aadhaarNumber,
      email,
      phoneNumber,
      address,
      bankAccountName,
      bankAccountNumber,
      bankName,
      bankBranch,
      ifscCode,
      referralCode,
      promotionalCode
    } = req.body;

    // console.log('Uploaded files:', req.files);
    // console.log('Form data:', req.body);

    const newRegistration = new AdminRegistration({
      fullname,
      dob,
      gender,
      aadhaarNumber,
      email,
      phoneNumber,
      address,
      bankAccountName,
      bankAccountNumber,
      bankName,
      bankBranch,
      ifscCode,
      panCard: req.files['panCard'] ? req.files['panCard'][0].path : '',
      addressProof: req.files['addressProof'] ? req.files['addressProof'][0].path : '',
      profilePicture: req.files['profilePicture'] ? req.files['profilePicture'][0].path : '',
      referralCode,
      promotionalCode
    });

    await newRegistration.save();
    res.status(200).json({ message: 'Registration successful!' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Registration failed', error: error.message });
  }
});

module.exports = router;