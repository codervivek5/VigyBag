const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// mobile with otp, login with google , login with fb

const User = mongoose.model('User',userSchema);

module.exports = User;