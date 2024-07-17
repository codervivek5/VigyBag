// ForgotPasswordForm.jsx
import React, { useState } from "react";
import axios from "axios";
import styles from "./ForgotPasswordForm.module.css";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/forgot-password", { email });
      setMessage("Password reset email sent.");
      setError(false);
    } catch (error) {
      setMessage("Error sending password reset email.");
      setError(true);
    }
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Forgot Password</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Request Password Reset
        </button>
        {message && (
          <p
            className={`${styles.message} ${
              error ? styles.error : styles.success
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
