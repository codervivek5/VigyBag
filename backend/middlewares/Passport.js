const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");
const dotenv = require("dotenv");
dotenv.config();

// Check if Google OAuth credentials are configured
if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
  console.warn("⚠️  Google OAuth credentials not found. Google login will not work.");
  console.warn("   Please set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in your environment variables.");
}

// Resolve callback URL safely (never default to localhost in production)
const resolvedCallbackUrl = (() => {
  const fromEnv = process.env.GOOGLE_CALLBACK_URL;
  if (fromEnv && fromEnv.trim().length > 0) return fromEnv.trim();
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:5000/auth/google/callback';
  }
  console.error("❌ GOOGLE_CALLBACK_URL is missing in production. Set it to your backend callback, e.g. https://vigybag-backend.onrender.com/auth/google/callback");
  return undefined;
})();

passport.use(
  new GoogleStrategy(
    {
<<<<<<< HEAD
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL || "http://vigybag.com/auth/google/callback",
=======
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: resolvedCallbackUrl,
>>>>>>> b4f65404 (Fix: Corrected routing for 'Login as Vigy' button (Issue #2638))
    },
    async (accessToken, refreshToken, profile, done) => {



      try {
        let user = await User.findOne({ googleId: profile.id });
        if (user) {
          return done(null, user);
        }

        user = await User.findOne({ email: profile.emails[0].value });
        if (user) {
          user.googleId = profile.id;
          await user.save();
          return done(null, user);
        }

        const newUser = await new User({
          googleId: profile.id,
          email: profile.emails[0].value,
          username: profile.emails[0].value.split("@")[0], // Set username from email
        }).save();

        done(null, newUser);
      } catch (err) {
        console.error("Google OAuth error:", err);
        if (err.code === 11000) {
          done(new Error("User with this email already exists."), null);
        } else {
          done(err, null);
        }
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

module.exports = passport;
