import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const pageTitles = {
    "/admin-dashboard": "Dashboard",
    "/admin-feedback": "Feedback Management",
    "/admin-services": "Service Management",
    "/admin-users": "User Management",
    "/admin-settings": "Settings",
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={{ ...styles.sidebar, width: sidebarOpen ? "220px" : "40px" }}>
        <div style={styles.sidebarHeader}>
          {sidebarOpen && <h2 style={styles.logo}>VAS Admin</h2>}
          <button style={styles.toggleBtn} onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? "«" : "»"}
          </button>
        </div>

        <nav style={styles.nav}>
          <NavLink to="/admin-dashboard" style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}>
            {sidebarOpen ? "📊 Dashboard" : "📊"}
          </NavLink>
          <NavLink to="/admin-feedback" style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}>
            {sidebarOpen ? "💬 Feedback" : "💬"}
          </NavLink>
          <NavLink to="/admin-services" style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}>
            {sidebarOpen ? "🛠 Services" : "🛠"}
          </NavLink>
          <NavLink to="/admin-users" style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}>
            {sidebarOpen ? "👤 Users" : "👤"}
          </NavLink>
          <NavLink to="/admin-settings" style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}>
            {sidebarOpen ? "⚙️ Settings" : "⚙️"}
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ ...styles.main, marginLeft: sidebarOpen ? "220px" : "40px" }}>
        <header style={styles.topbar}>
          <h2 style={styles.pageTitle}>{pageTitles[location.pathname] || "Admin"}</h2>
          <div style={styles.topbarRight}>
            <input type="text" placeholder="Search..." style={styles.search} />
            <span style={styles.icon}>🔔</span>
            <div style={styles.avatar}>JD</div>
            <span style={styles.username}>John Doe <span style={styles.role}>(Admin)</span></span>
          </div>
        </header>
        <div style={styles.scrollContent}>{children}</div>
      </main>
    </div>
  );
}

const styles = {
  container: { display: "flex", fontFamily: "Segoe UI, sans-serif" },
  sidebar: {
    background: "#0d1b2a",
    color: "#fff",
    minHeight: "100vh",
    padding: "20px 10px",
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    transition: "width 0.3s ease",
  },
  sidebarHeader: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  logo: { fontSize: "18px", marginBottom: "20px" },
  toggleBtn: { background: "transparent", border: "none", color: "#fff", cursor: "pointer", fontSize: "24px" },
  nav: { display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" },
  navLink: { color: "#ccc", textDecoration: "none", fontSize: "14px", padding: "8px", borderRadius: "6px" },
  activeLink: { color: "#fff", fontWeight: "bold", backgroundColor: "#007bff" },

  main: { flex: 1, backgroundColor: "#f5f7fa", height: "100vh", display: "flex", flexDirection: "column", transition: "margin-left 0.3s ease" },
  topbar: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px", backgroundColor: "#fff", borderBottom: "1px solid #ddd" },
  pageTitle: { fontSize: "20px", fontWeight: "600", margin: "14px" },
  topbarRight: { display: "flex", alignItems: "center", gap: "15px" },
  search: { padding: "6px", borderRadius: "6px", border: "1px solid #ccc" },
  icon: { fontSize: "18px", cursor: "pointer" },
  avatar: { backgroundColor: "#007bff", color: "#fff", borderRadius: "50%", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" },
  username: { fontSize: "14px", color: "#333" },
  role: { color: "#777", fontSize: "12px" },
  scrollContent: { padding: "20px", overflowY: "auto", flex: 1 },
};

export default AdminLayout;
