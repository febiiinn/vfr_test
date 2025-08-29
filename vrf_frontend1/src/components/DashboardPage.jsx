import React from "react";
import { NavLink } from "react-router-dom";

function DashboardPage() {
  const feedbacks = [
    {
      title: "Premium Movie Subscription",
      desc: "Great selection of movies, but the streaming quality could be improved during peak hours.",
      time: "Today, 10:30 AM",
      stars: 4,
    },
    {
      title: "Weekend Data Pack",
      desc: "The data speed was excellent and the activation process was seamless. Great value for money!",
      time: "Yesterday, 3:45 PM",
      stars: 5,
    },
    {
      title: "Caller Tune Subscription",
      desc: "The song selection is good but the monthly fee is a bit high compared to other providers.",
      time: "3 days ago",
      stars: 3,
    },
  ];

  return (
    <div style={styles.container}>
      {/* 🔹 Top Navigation */}
      <header style={styles.header}>
        <div style={styles.logo}>⭐ VAS Feedback & Ratings</div>

        <nav style={styles.nav}>
          <NavLink
            to="/dashboard"
            style={({ isActive }) =>
              isActive ? { ...styles.link, ...styles.activeLink } : styles.link
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/services"
            style={({ isActive }) =>
              isActive ? { ...styles.link, ...styles.activeLink } : styles.link
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/reviews"
            style={({ isActive }) =>
              isActive ? { ...styles.link, ...styles.activeLink } : styles.link
            }
          >
            My Reviews
          </NavLink>
          <NavLink
                      to="/aboutus"
                      style={({ isActive }) =>
                        isActive ? { ...styles.link, ...styles.activeLink } : styles.link
                      }
                    >
                      About Us
                    </NavLink>
          <NavLink
            to="/help"
            style={({ isActive }) =>
              isActive ? { ...styles.link, ...styles.activeLink } : styles.link
            }
          >
            Help
          </NavLink>
        </nav>

        <div style={styles.profile}>
          <span style={styles.userName}>John Doe</span>
          <div style={styles.avatar}>JD</div>
        </div>
      </header>

      {/* 🔹 Dashboard Content */}
      <div style={styles.banner}>
        <div>
          <h2 style={styles.welcome}>Welcome back, John!</h2>
          <p style={styles.subText}>
            Here's an overview of your feedback activity
          </p>
        </div>
      </div>

      <div style={styles.stats}>
        <div style={styles.statBox}>
          <h3 style={styles.statNumber}>12</h3>
          <p style={styles.statLabel}>Total Feedback</p>
        </div>
        <div style={styles.statBox}>
          <h3 style={styles.statNumber}>4.8</h3>
          <p style={styles.statLabel}>Avg. Rating</p>
        </div>
        <div style={styles.statBox}>
          <h3 style={styles.statNumber}>3</h3>
          <p style={styles.statLabel}>This Month</p>
        </div>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>
          Your Recent Feedback <span style={styles.viewAll}>View History</span>
        </h3>
        {feedbacks.map((fb, idx) => (
          <div key={idx} style={styles.feedbackCard}>
            <h4 style={styles.feedbackTitle}>{fb.title}</h4>
            <p style={styles.feedbackDesc}>{fb.desc}</p>
            <p style={styles.feedbackTime}>{fb.time}</p>
            <p>{"⭐".repeat(fb.stars)}{"☆".repeat(5 - fb.stars)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { fontFamily: "Arial, sans-serif", backgroundColor: "#f5f7fa", minHeight: "100vh" },

  /* 🔹 Nav Styles */
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#fff",
  },
  logo: { fontSize: "18px", fontWeight: "bold", color: "#007bff" },
  nav: { display: "flex", gap: "25px" },
  link: { textDecoration: "none", fontSize: "14px", color: "#555", paddingBottom: "5px" },
  activeLink: { color: "#007bff", borderBottom: "2px solid #007bff", fontWeight: "bold" },
  profile: { display: "flex", alignItems: "center", gap: "10px" },
  userName: { fontSize: "14px", color: "#333" },
  avatar: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    backgroundColor: "#007bff",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },

  /* 🔹 Dashboard Content Styles */
  banner: {
    background: "linear-gradient(135deg, #007bff, #0056d6)",
    color: "#fff",
    padding: "20px",
    margin: "20px 40px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  welcome: { fontSize: "22px", margin: "0 0 5px" },
  subText: { fontSize: "14px", margin: 0 },
  newFeedback: {
    backgroundColor: "#fff",
    color: "#007bff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  stats: { display: "flex", gap: "20px", margin: "20px 40px" },
  statBox: {
    backgroundColor: "#fff",
    flex: 1,
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  statNumber: { fontSize: "20px", margin: "0 0 5px", color: "#007bff" },
  statLabel: { fontSize: "13px", color: "#666", margin: 0 },
  section: { margin: "20px 40px" },
  sectionTitle: { fontSize: "18px", marginBottom: "15px", display: "flex", justifyContent: "space-between" },
  viewAll: { fontSize: "14px", color: "#007bff", cursor: "pointer" },
  feedbackCard: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  feedbackTitle: { fontSize: "15px", fontWeight: "bold", marginBottom: "5px" },
  feedbackDesc: { fontSize: "13px", color: "#555", marginBottom: "5px" },
  feedbackTime: { fontSize: "12px", color: "#777", marginBottom: "8px" },
};

export default DashboardPage;
