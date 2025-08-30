const mongoose = require("mongoose");
const validator = require("validator");

const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,      // ensures DB-level uniqueness
    index: true,       // optional, improves query performance
    trim: true,
    lowercase: true,
    validate: {
      validator: (v) => validator.isEmail(v),
      message: "Invalid email address",
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Make sure indexes are created (important for uniqueness)
subscriberSchema.index({ email: 1 }, { unique: true });

const Subscriber = mongoose.model("Subscriber", subscriberSchema);

module.exports = Subscriber;
