import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function ServicesPage() {
  const navigate = useNavigate();

  // 🔹 All Services Data (merged)
  const services = [
    {
      category: "Featured Services",
      items: [
        { icon: "🎵", title: "Premium Caller Tunes", desc: "Set your favorite songs as caller tunes. Choose from thousands of latest hits and classics.", reviews: 432 },
        { icon: "📶", title: "Unlimited Data Pack", desc: "Enjoy unlimited high-speed data with no throttling. Stream, download, and browse without limits.", reviews: 1245 },
        { icon: "🎬", title: "Premium Video Streaming", desc: "Access premium movies, TV shows and exclusive content. Watch in HD quality on any device.", reviews: 876 },
      ],
    },
    {
      category: "Entertainment",
      items: [
        { icon: "🎮", title: "Mobile Gaming Pass", desc: "Access to 100+ premium mobile games without ads or in-app purchases.", reviews: 328 },
        { icon: "🎧", title: "Music Streaming Plus", desc: "Stream millions of songs ad-free, create playlists and download for offline listening.", reviews: 952 },
        { icon: "📖", title: "E-Book Library", desc: "Access thousands of e-books and audiobooks. New titles added weekly.", reviews: 512 },
      ],
    },
    {
      category: "Utility Services",
      items: [
        { icon: "☁️", title: "Cloud Storage Pro", desc: "50GB secure cloud storage with automatic backup.", reviews: 687 },
        { icon: "🛡️", title: "Mobile Security Suite", desc: "Protection against malware and identity theft. Includes VPN and safe browsing.", reviews: 423 },
        { icon: "✉️", title: "International SMS Pack", desc: "Send SMS to any country at reduced rates. Includes 100 international SMS per month.", reviews: 215 },
      ],
    },
  ];

  // 🔹 State for Search & Filter
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Services");

  // 🔹 Category List
  const categories = ["All Services", "Featured Services", "Entertainment", "Utility Services"];

  // 🔹 Filtered Data
  const filteredServices = services
    .filter(section => selectedCategory === "All Services" || section.category === selectedCategory)
    .map(section => ({
      ...section,
      items: section.items.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter(section => section.items.length > 0);

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

      {/* 🔹 Search Bar */}
      <div style={styles.searchBar}>
        <input
          type="text"
          placeholder="Search for services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
        <button style={styles.searchBtn}>🔍</button>
      </div>

      {/* 🔹 Categories */}
      <div style={styles.categories}>
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setSelectedCategory(cat)}
            style={cat === selectedCategory ? styles.categoryBtnActive : styles.categoryBtn}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🔹 Services Sections */}
      {filteredServices.length > 0 ? (
        filteredServices.map((section, idx) => (
          <div key={idx} style={styles.section}>
            <h3 style={styles.sectionTitle}>{section.category}</h3>
            <div style={styles.cards}>
              {section.items.map((s, i) => (
                <div key={i} style={styles.card}>
                  <div style={styles.icon}>{s.icon}</div>
                  <h4 style={styles.cardTitle}>{s.title}</h4>
                  <p style={styles.cardDesc}>{s.desc}</p>
                  <p style={styles.reviews}>⭐ {s.reviews} reviews</p>
                  <button
                    style={styles.rateBtn}
                    onClick={() => navigate(`/feedback/${encodeURIComponent(s.title)}`)}
                  >
                    Rate & Review
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p style={{ margin: "20px 40px" }}>No services found.</p>
      )}
    </div>
  );
}

const styles = {
  container: { fontFamily: "Arial, sans-serif", backgroundColor: "#f5f7fa", minHeight: "100vh" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 40px", borderBottom: "1px solid #ddd", backgroundColor: "#fff" },
  logo: { fontSize: "18px", fontWeight: "bold", color: "#007bff" },
  nav: { display: "flex", gap: "25px" },
  link: { textDecoration: "none", fontSize: "14px", color: "#555", paddingBottom: "5px" },
  activeLink: { color: "#007bff", borderBottom: "2px solid #007bff", fontWeight: "bold" },
  profile: { display: "flex", alignItems: "center", gap: "10px" },
  userName: { fontSize: "14px", color: "#333" },
  avatar: { width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#007bff", color: "#fff", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" },
  searchBar: { display: "flex", margin: "20px 40px" },
  searchInput: { flex: 1, padding: "10px", border: "1px solid #ddd", borderRadius: "6px 0 0 6px", fontSize: "14px" },
  searchBtn: { padding: "10px 20px", border: "none", backgroundColor: "#007bff", color: "#fff", borderRadius: "0 6px 6px 0", cursor: "pointer" },
  categories: { display: "flex", flexWrap: "wrap", gap: "10px", margin: "0 40px 30px" },
  categoryBtn: { border: "1px solid #ddd", backgroundColor: "#fff", padding: "8px 16px", borderRadius: "20px", cursor: "pointer" },
  categoryBtnActive: { border: "1px solid #007bff", backgroundColor: "#007bff", color: "#fff", padding: "8px 16px", borderRadius: "20px", cursor: "pointer" },
  section: { margin: "20px 40px" },
  sectionTitle: { fontSize: "18px", marginBottom: "15px" },
  cards: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" },
  card: { backgroundColor: "#fff", borderRadius: "10px", padding: "20px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" },
  icon: { fontSize: "28px", marginBottom: "10px" },
  cardTitle: { fontSize: "16px", fontWeight: "bold", marginBottom: "8px" },
  cardDesc: { fontSize: "14px", color: "#555", marginBottom: "10px" },
  reviews: { fontSize: "13px", color: "#777", marginBottom: "12px" },
  rateBtn: { backgroundColor: "#007bff", color: "#fff", border: "none", padding: "10px", borderRadius: "6px", width: "100%", cursor: "pointer" },
};

export default ServicesPage;
