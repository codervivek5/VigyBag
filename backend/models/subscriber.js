const mongoose = require("mongoose");
const validator = require("validator");

const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
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

const Subscriber = mongoose.model("Subscriber", subscriberSchema);

<<<<<<< HEAD
module.exports = Subscriber;
=======
module.exports = Subscriber;
>>>>>>> main
