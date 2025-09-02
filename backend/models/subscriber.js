const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,   // ensures DB-level uniqueness
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
