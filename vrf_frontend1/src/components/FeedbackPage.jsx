import React, { useState } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";

function StarRating({ rating, setRating }) {
  return (
    <div style={styles.stars}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{
            fontSize: "20px",
            cursor: "pointer",
            color: star <= rating ? "#FFD700" : "#ccc",
          }}
          onClick={() => setRating(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function FeedbackPage() {
  const { serviceName } = useParams();
  const navigate = useNavigate();

  // Ratings state
  const [quality, setQuality] = useState(0);
  const [value, setValue] = useState(0);
  const [support, setSupport] = useState(0);
  const [ease, setEase] = useState(0);
  const [overall, setOverall] = useState(0);

  const [feedback, setFeedback] = useState("");

  // Pros & Cons state
  const [pros, setPros] = useState([""]);
  const [cons, setCons] = useState([""]);

  const handleBulletInput = (list, setList, index, value) => {
    const newList = [...list];
    newList[index] = value;
    setList(newList);
  };

  const handleKeyPress = (e, list, setList, index) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newList = [...list];
      newList.splice(index + 1, 0, "");
      setList(newList);
    }
  };

  const handleSubmit = () => {
    alert(`✅ Feedback Submitted!\n
Service: ${decodeURIComponent(serviceName)}
Quality: ${quality}, Value: ${value}, Support: ${support}, Ease: ${ease}
Overall: ${overall}
Feedback: ${feedback}
Pros: ${pros.filter(Boolean).join(", ")}
Cons: ${cons.filter(Boolean).join(", ")}`);
    navigate("/services");
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

      {/* 🔹 Service Name */}
      <h2 style={styles.serviceTitle}>{decodeURIComponent(serviceName)} - Feedback</h2>

      {/* 🔹 Feedback Form */}
      <div style={styles.form}>
        <h3 style={styles.sectionTitle}>Rate Service Aspects</h3>
        <div style={styles.grid}>
          <div style={styles.aspectBox}><p>Quality of Service</p><StarRating rating={quality} setRating={setQuality} /></div>
          <div style={styles.aspectBox}><p>Value for Money</p><StarRating rating={value} setRating={setValue} /></div>
          <div style={styles.aspectBox}><p>Customer Support</p><StarRating rating={support} setRating={setSupport} /></div>
          <div style={styles.aspectBox}><p>Ease of Use</p><StarRating rating={ease} setRating={setEase} /></div>
        </div>

        <h3 style={styles.sectionTitle}>Overall Rating</h3>
        <div style={styles.overallBox}><StarRating rating={overall} setRating={setOverall} /></div>

        <h3 style={styles.sectionTitle}>Detailed Feedback</h3>
        <textarea
          style={styles.textarea}
          rows="4"
          placeholder="Please share your detailed experience..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />

        {/* 🔹 Pros & Cons */}
        <h3 style={styles.sectionTitle}>Pros & Cons</h3>
        <div style={styles.grid}>
          <div>
            <h4>✅ What did you like?</h4>
            {pros.map((p, idx) => (
              <div key={idx} style={styles.bulletRow}>
                <span style={styles.bullet}>•</span>
                <input
                  type="text"
                  value={p}
                  placeholder="Enter pros..."
                  style={styles.bulletInput}
                  onChange={(e) => handleBulletInput(pros, setPros, idx, e.target.value)}
                  onKeyDown={(e) => handleKeyPress(e, pros, setPros, idx)}
                />
              </div>
            ))}
          </div>
          <div>
            <h4>⚠️ What could be improved?</h4>
            {cons.map((c, idx) => (
              <div key={idx} style={styles.bulletRow}>
                <span style={styles.bullet}>•</span>
                <input
                  type="text"
                  value={c}
                  placeholder="Enter cons..."
                  style={styles.bulletInput}
                  onChange={(e) => handleBulletInput(cons, setCons, idx, e.target.value)}
                  onKeyDown={(e) => handleKeyPress(e, cons, setCons, idx)}
                />
              </div>
            ))}
          </div>
        </div>

        <h3 style={styles.sectionTitle}>Add Screenshots (Optional)</h3>
        <input type="file" style={styles.fileInput} />

        <div style={styles.actions}>
          <button style={styles.cancelBtn} onClick={() => navigate("/services")}>Cancel</button>
          <button style={styles.submitBtn} onClick={handleSubmit}>Submit Feedback</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { fontFamily: "Arial, sans-serif", backgroundColor: "#f5f7fa", minHeight: "100vh", paddingBottom: "40px" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 40px", borderBottom: "1px solid #ddd", backgroundColor: "#fff" },
  logo: { fontSize: "18px", fontWeight: "bold", color: "#007bff" },
  nav: { display: "flex", gap: "25px" },
  link: { textDecoration: "none", fontSize: "14px", color: "#555", paddingBottom: "5px" },
  activeLink: { color: "#007bff", borderBottom: "2px solid #007bff", fontWeight: "bold" },
  profile: { display: "flex", alignItems: "center", gap: "10px" },
  userName: { fontSize: "14px", color: "#333" },
  avatar: { width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#007bff", color: "#fff", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold" },
  serviceTitle: { margin: "20px 40px", fontSize: "22px" },
  form: { backgroundColor: "#fff", margin: "20px 40px", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" },
  sectionTitle: { fontSize: "16px", margin: "20px 0 10px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" },
  aspectBox: { backgroundColor: "#f9f9f9", padding: "15px", borderRadius: "8px", textAlign: "center" },
  overallBox: { backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "8px", textAlign: "center", fontSize: "18px" },
  textarea: { width: "100%", padding: "10px", border: "1px solid #ddd", borderRadius: "6px", fontSize: "14px" },
  fileInput: { marginTop: "10px" },
  actions: { marginTop: "20px", display: "flex", justifyContent: "flex-end", gap: "10px" },
  cancelBtn: { padding: "10px 20px", backgroundColor: "#ccc", border: "none", borderRadius: "6px", cursor: "pointer" },
  submitBtn: { padding: "10px 20px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" },
  stars: { display: "flex", justifyContent: "center", gap: "5px" },
  bulletRow: { display: "flex", alignItems: "center", marginBottom: "8px" },
  bullet: { marginRight: "8px", fontSize: "18px", color: "#007bff" },
  bulletInput: { flex: 1, padding: "8px", border: "1px solid #ddd", borderRadius: "6px", fontSize: "14px" },
};

export default FeedbackPage;
