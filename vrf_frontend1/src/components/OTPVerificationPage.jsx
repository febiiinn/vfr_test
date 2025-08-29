import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OTPVerificationPage() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  // ✅ Dummy OTP
  const dummyOtp = 123456;

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#f0f2f5"
    },
    form: {
      background: "#fff",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      width: "350px",
      textAlign: "center"
    },
    heading: {
      marginBottom: "20px",
      color: "#333"
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "5px",
      border: "1px solid #ccc"
    },
    button: {
      width: "100%",
      padding: "10px",
      marginTop: "15px",
      background: "#28a745",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer"
    },
    error: {
      color: "red",
      marginTop: "10px"
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (parseInt(otp) === dummyOtp) {
      alert("OTP Verified Successfully!");
      navigate("/"); // Redirect to login page
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleVerify}>
        <h2 style={styles.heading}>OTP Verification</h2>
        <input
          type="text"
          placeholder="Enter OTP"
          style={styles.input}
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button type="submit" style={styles.button}>Verify OTP</button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
}
