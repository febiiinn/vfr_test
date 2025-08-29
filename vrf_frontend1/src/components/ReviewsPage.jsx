import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function ReviewsPage() {
  const navigate = useNavigate();

  // State for reviews (demo data initially)
  const [reviews, setReviews] = useState([
    {
      service: "Premium Caller Tunes",
      rating: 4,
      feedback: "Loved the song collection, but activation was a bit slow.",
      date: "Feb 26, 2025",
    },
    {
      service: "Unlimited Data Pack",
      rating: 5,
      feedback: "Super fast internet with no dropouts. Worth every penny!",
      date: "Feb 20, 2025",
    },
    {
      service: "Premium Video Streaming",
      rating: 3,
      feedback: "Great library, but sometimes buffering issues during peak hours.",
      date: "Feb 15, 2025",
    },
  ]);

  const renderStars = (count) =>
    [...Array(5)].map((_, i) => (
      <span key={i} style={{ color: i < count ? "#FFD700" : "#ccc" }}>★</span>
    ));

  // ✅ Delete handler
  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      const updatedReviews = reviews.filter((_, i) => i !== index);
      setReviews(updatedReviews);
    }
  };

  return (
    <div style={styles.container}>
      {/* 🔹 Top Navigation */}
      <header style={styles.header}>
        <div style={styles.logo}>⭐ VAS Feedback & Ratings</div>

        <nav style={styles.nav}>
          <NavLink to="/dashboard" style={({ isActive }) => isActive ? { ...styles.link, ...styles.activeLink } : styles.link}>Dashboard</NavLink>
          <NavLink to="/services" style={({ isActive }) => isActive ? { ...styles.link, ...styles.activeLink } : styles.link}>Services</NavLink>
          <NavLink to="/reviews" style={({ isActive }) => isActive ? { ...styles.link, ...styles.activeLink } : styles.link}>My Reviews</NavLink>
          <NavLink
                      to="/aboutus"
                      style={({ isActive }) =>
                        isActive ? { ...styles.link, ...styles.activeLink } : styles.link
                      }
                    >
                      About Us
                    </NavLink>
          <NavLink to="/help" style={({ isActive }) => isActive ? { ...styles.link, ...styles.activeLink } : styles.link}>Help</NavLink>
        </nav>

        <div style={styles.profile}>
          <span style={styles.userName}>John Doe</span>
          <div style={styles.avatar}>JD</div>
        </div>
      </header>

      {/* 🔹 Page Title */}
      <h2 style={styles.pageTitle}>My Reviews</h2>

      {/* 🔹 Reviews List */}
      <div style={styles.reviewsList}>
        {reviews.length === 0 ? (
          <p style={styles.noReviews}>You haven't submitted any reviews yet.</p>
        ) : (
          reviews.map((rev, idx) => (
            <div key={idx} style={styles.reviewCard}>
              <div style={styles.cardHeader}>
                <h3 style={styles.serviceName}>{rev.service}</h3>
                <span style={styles.date}>{rev.date}</span>
              </div>
              <div style={styles.rating}>{renderStars(rev.rating)}</div>
              <p style={styles.feedback}>{rev.feedback}</p>
              <div style={styles.actions}>
                <button
                  style={styles.editBtn}
                  onClick={() => navigate(`/feedback/${encodeURIComponent(rev.service)}`)}
                >
                  ✏️ Edit
                </button>
                <button
                  style={styles.deleteBtn}
                  onClick={() => handleDelete(idx)}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f7fa",
    minHeight: "100vh",
    paddingBottom: "40px",
  },

  /* 🔹 Navbar */
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
  link: {
    textDecoration: "none",
    fontSize: "14px",
    color: "#555",
    paddingBottom: "5px",
  },
  activeLink: {
    color: "#007bff",
    borderBottom: "2px solid #007bff",
    fontWeight: "bold",
  },
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

  /* 🔹 Page Content */
  pageTitle: { margin: "20px 40px", fontSize: "22px" },
  reviewsList: {
    margin: "20px 40px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "20px",
  },
  reviewCard: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  serviceName: { fontSize: "16px", fontWeight: "bold", margin: 0 },
  date: { fontSize: "12px", color: "#777" },
  rating: { margin: "5px 0" },
  feedback: { fontSize: "14px", color: "#555", marginBottom: "15px" },

  actions: { display: "flex", gap: "10px" },
  editBtn: {
    flex: 1,
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "8px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  deleteBtn: {
    flex: 1,
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "8px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  noReviews: {
    fontSize: "16px",
    color: "#777",
    gridColumn: "1/-1",
    textAlign: "center",
  },
};

export default ReviewsPage;
