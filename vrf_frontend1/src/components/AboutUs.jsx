import React from "react";
import { NavLink } from "react-router-dom";

export default function AboutUs() {
  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#f8f9fa",
      minHeight: "100vh",
    },

    /* 🔹 New Nav Styles */
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 40px",
      borderBottom: "1px solid #ddd",
      backgroundColor: "#fff",
    },
    logo: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#007bff",
    },
    nav: {
      display: "flex",
      gap: "25px",
    },
    link: {
      textDecoration: "none",
      fontSize: "14px",
      color: "#555",
      paddingBottom: "5px",
      transition: "0.3s",
    },
    activeLink: {
      color: "#007bff",
      borderBottom: "2px solid #007bff",
      fontWeight: "bold",
    },
    profile: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    userName: {
      fontSize: "14px",
      color: "#333",
    },
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
    card: {
      backgroundColor: "#fff",
      padding: "25px",
      borderRadius: "12px",
      marginBottom: "20px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      transition: "0.3s",
    },
    title: {
      textAlign: "center",
      fontSize: "36px",
      fontWeight: "bold",
      color: "#2c3e50",
      marginBottom: "30px",
    },
  };

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

      {/* Page Content */}
      <div style={{ padding: "40px" }}>
        <h1 style={styles.title}>About Us</h1>

        {/* Company Info Section */}
        <div style={styles.card}>
          <h2 style={{ color: "#2980b9", marginBottom: "10px" }}>Who We Are</h2>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            We are a passionate team of developers and innovators dedicated to
            creating user-friendly digital solutions. Our mission is to deliver
            high-quality, efficient, and reliable software to meet the evolving
            needs of our clients.
          </p>
        </div>

        {/* Mission Section */}
        <div style={styles.card}>
          <h2 style={{ color: "#27ae60", marginBottom: "10px" }}>Our Mission</h2>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Our mission is to provide innovative solutions that empower
            businesses and individuals. We aim to bridge the gap between
            technology and people with simple yet powerful tools.
          </p>
        </div>

        {/* Vision Section */}
        <div style={styles.card}>
          <h2 style={{ color: "#8e44ad", marginBottom: "10px" }}>Our Vision</h2>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            To become a leading software development team recognized for our
            creativity, innovation, and excellence in delivering modern
            technology solutions globally.
          </p>
        </div>
      </div>
    </div>
  );
}
