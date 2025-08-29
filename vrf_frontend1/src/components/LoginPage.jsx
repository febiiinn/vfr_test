import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hardcoded credentials
  const userCreds = {
    email: "user@example.com",
    password: "user123"
  };

  // Sign In handler
  const handleSignIn = () => {
    if (email === userCreds.email && password === userCreds.password) {
      setError("");
      // Redirect to UserDashboard with user email
      navigate("/dashboard", { state: { userEmail: email } });
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div style={styles.container}>
      {/* Left Side */}
      <div style={styles.left}>
        <h2 style={styles.logo}>📊 VAS Rating</h2>
        <h1 style={styles.welcome}>Welcome Back!</h1>
        <p style={styles.text}>
          Access your VAS Feedback & Rating dashboard to manage your service
          ratings, collect customer feedback, and improve your business
          performance.
        </p>

        <ul style={styles.list}>
          <li>📑 Collect valuable customer feedback</li>
          <li>📊 Analyze service performance metrics</li>
          <li>💡 Improve customer satisfaction</li>
        </ul>
      </div>

      {/* Right Side */}
      <div style={styles.right}>
        <div style={styles.topBar}>
          <button style={styles.adminBtn} onClick={() => navigate("/admin")}>
            Admin
          </button>
        </div>

        <h2 style={styles.signinTitle}>Sign In to Your Account</h2>

        <div style={styles.formGroup}>
          <label style={styles.label}>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

        <div style={styles.options}>
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="/" style={styles.forgot}>
            Forgot Password?
          </a>
        </div>

        <button style={styles.button} onClick={handleSignIn}>
          Sign In
        </button>

        <p style={styles.register}>
          Don’t have an account?{" "}
          <span 
            style={{ color: "blue", cursor: "pointer" }} 
            onClick={() => navigate("/register")}
          >
            Register Now
          </span>
        </p>

      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    width: "100%",
    backgroundColor: "#f5f7fa",
    fontFamily: "Arial, sans-serif",
    flexWrap: "wrap",
  },
  left: {
    flex: 1,
    background: "linear-gradient(135deg, #007bff, #0056d6)",
    color: "#fff",
    padding: "60px 40px",
    minWidth: "300px",
  },
  logo: { fontSize: "20px", marginBottom: "30px" },
  welcome: { fontSize: "28px", marginBottom: "15px" },
  text: { fontSize: "15px", lineHeight: "1.5", marginBottom: "30px" },
  list: { listStyle: "none", padding: 0, fontSize: "15px", lineHeight: "2" },
  right: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "60px 40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minWidth: "300px",
    position: "relative",
  },
  topBar: { position: "absolute", top: "20px", right: "20px" },
  adminBtn: {
    background: "transparent",
    border: "1px solid #007bff",
    color: "#007bff",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
  },
  signinTitle: { fontSize: "22px", marginBottom: "25px", color: "#333", marginTop: "50px" },
  formGroup: { marginBottom: "20px" },
  label: { display: "block", marginBottom: "8px", fontSize: "14px", fontWeight: "600", color: "#444" },
  input: { width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "6px", fontSize: "14px" },
  options: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", fontSize: "14px" },
  forgot: { color: "#007bff", textDecoration: "none" },
  button: { width: "100%", padding: "14px", backgroundColor: "#007bff", border: "none", borderRadius: "6px", color: "#fff", fontSize: "16px", cursor: "pointer", marginBottom: "15px" },
  register: { fontSize: "14px", textAlign: "center", color: "#555" },
};

export default LoginPage;
