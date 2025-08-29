import React, { useState } from "react";

function AdminSettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [systemAlerts, setSystemAlerts] = useState(true);

  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>Settings</h2>

      {/* Account Info */}
      <div style={styles.card}>
        <h3 style={styles.subheading}>Account Information</h3>
        <label style={styles.label}>Full Name</label>
        <input type="text" defaultValue="Admin User" style={styles.input} />

        <label style={styles.label}>Email</label>
        <input type="email" defaultValue="admin@example.com" style={styles.input} />

        <label style={styles.label}>Change Password</label>
        <input type="password" placeholder="Enter new password" style={styles.input} />

        <button style={styles.saveBtn}>Save Changes</button>
      </div>

      {/* Notifications */}
      <div style={styles.card}>
        <h3 style={styles.subheading}>Notification Preferences</h3>
        <div style={styles.toggleRow}>
          <label>Email Alerts</label>
          <input
            type="checkbox"
            checked={emailAlerts}
            onChange={() => setEmailAlerts(!emailAlerts)}
          />
        </div>
        <div style={styles.toggleRow}>
          <label>System Notifications</label>
          <input
            type="checkbox"
            checked={systemAlerts}
            onChange={() => setSystemAlerts(!systemAlerts)}
          />
        </div>
      </div>

      {/* Preferences */}
      <div style={styles.card}>
        <h3 style={styles.subheading}>Preferences</h3>
        <div style={styles.toggleRow}>
          <label>Dark Mode</label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>
      </div>

      {/* Danger Zone */}
      <div style={styles.cardDanger}>
        <h3 style={styles.subheading}>Danger Zone</h3>
        <p style={{ fontSize: "14px", color: "#555" }}>
          Deactivating your account will disable login access until reactivated.
        </p>
        <button style={styles.deactivateBtn}>Deactivate Account</button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: "20px",
    background: "#f5f7fa",
    minHeight: "100vh",
    fontFamily: "Segoe UI, sans-serif",
  },
  heading: {
    fontSize: "22px",
    marginBottom: "20px",
    color: "#222",
  },
  card: {
    background: "#fff",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },
  cardDanger: {
    background: "#fff5f5",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "10px",
    border: "1px solid #f5c6cb",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },
  subheading: {
    fontSize: "18px",
    marginBottom: "12px",
    color: "#333",
  },
  label: {
    display: "block",
    marginBottom: "6px",
    marginTop: "10px",
    fontSize: "14px",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginBottom: "12px",
    fontSize: "14px",
  },
  saveBtn: {
    background: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  toggleRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
    fontSize: "14px",
    color: "#333",
  },
  deactivateBtn: {
    background: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default AdminSettingsPage;
