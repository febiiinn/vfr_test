import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminLoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Reset body styles to remove white border
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.backgroundColor = "#0d1b2a";
    document.body.style.overflow = "hidden"; // disable scroll
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/admin-dashboard");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.icon}>🛡️</div>
        <h2 style={styles.title}>Admin Portal</h2>
        <p style={styles.subtitle}>VAS Feedback and Rating System</p>

        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Enter your username or email" style={styles.input} />
          <input type="password" placeholder="Enter your password" style={styles.input} />

          <div style={styles.row}>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" style={styles.label}>Remember me</label>
          </div>

          <button type="submit" style={styles.loginBtn}>
            Login to Admin Dashboard
          </button>
        </form>

        <p style={styles.link} onClick={() => navigate("/")}>← Return to User Login</p>
        <p style={styles.secure}>🔒 Secure Administrator Access</p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0d1b2a", // solid navy background
  },
  card: {
    backgroundColor: "#1b263b",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
    width: "350px",
    color: "#fff",
    textAlign: "center",
  },
  icon: { fontSize: "32px", marginBottom: "10px" },
  title: { margin: "5px 0", fontSize: "22px" },
  subtitle: { marginBottom: "20px", fontSize: "14px", color: "#ccc" },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #333",
    backgroundColor: "#0d1b2a",
    color: "#fff",
  },
  row: { display: "flex", alignItems: "center", gap: "6px", marginBottom: "15px" },
  label: { fontSize: "13px", color: "#ccc" },
  loginBtn: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "15px",
    cursor: "pointer",
    marginBottom: "15px",
  },
  link: { fontSize: "13px", color: "#61dafb", cursor: "pointer", margin: "8px 0" },
  secure: { fontSize: "12px", color: "#4caf50", marginTop: "5px" },
};

export default AdminLoginPage;
