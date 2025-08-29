import React, { useState } from "react";

function AdminFeedbackPage() {
  const feedbacks = [
    { service: "Cloud Storage Pro", user: "John D.", email: "john.doe@example.com", rating: 5, comment: "Excellent service", date: "Jun 12, 2023", plan: "Enterprise $29.99/mo" },
    { service: "Email Marketing Suite", user: "Sarah M.", email: "sarah.m@example.com", rating: 4, comment: "Great for outreach", date: "Jun 10, 2023", plan: "Standard $15.99/mo" },
    { service: "Payment Gateway", user: "Michael R.", email: "michael.r@example.com", rating: 3, comment: "Sometimes slow", date: "Jun 8, 2023", plan: "Pro $19.99/mo" },
  ];

  const [selectedFeedback, setSelectedFeedback] = useState(feedbacks[0]);

  return (
    <div style={styles.page}>
      {/* Analytics Cards */}
      <div style={styles.cardsRow}>
        {[
          { title: "Total Feedback", value: "1,248" },
          { title: "Average Rating", value: "4.2" },
          { title: "This Month", value: "187" },
          { title: "Flagged", value: "24" },
        ].map((card, i) => (
          <div key={i} style={styles.card}>
            <h4>{card.title}</h4>
            <h2>{card.value}</h2>
          </div>
        ))}
      </div>

      {/* Rating Distribution */}
      <div style={styles.distribution}>
        <h4>Rating Distribution</h4>
        {[
          { stars: "5 ★", color: "green", value: 562 },
          { stars: "4 ★", color: "limegreen", value: 374 },
          { stars: "3 ★", color: "orange", value: 187 },
          { stars: "2 ★", color: "orangered", value: 87 },
          { stars: "1 ★", color: "red", value: 38 },
        ].map((row, i) => (
          <div key={i} style={styles.barRow}>
            <span style={{ width: "40px" }}>{row.stars}</span>
            <div style={styles.barBg}>
              <div style={{ width: `${(row.value / 562) * 100}%`, background: row.color, height: "10px", borderRadius: "5px" }} />
            </div>
            <span>{row.value}</span>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div style={styles.filters}>
        <select><option>All Categories</option></select>
        <select><option>All Ratings</option></select>
        <select><option>Last 7 Days</option></select>
        <input type="text" placeholder="Search feedback..." style={styles.search} />
        <button style={styles.resetBtn}>Reset</button>
        <button style={styles.applyBtn}>Apply</button>
      </div>

      {/* Feedback Content */}
      <div style={styles.contentRow}>
        <div style={styles.tableBox}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Service</th>
                <th>User</th>
                <th>Rating</th>
                <th>Comment</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((fb, i) => (
                <tr key={i} onClick={() => setSelectedFeedback(fb)} style={{ cursor: "pointer" }}>
                  <td>{fb.service}</td>
                  <td>{fb.user}</td>
                  <td>{"⭐".repeat(fb.rating)}</td>
                  <td>{fb.comment}</td>
                  <td>{fb.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Feedback Details */}
        <div style={styles.detailsBox}>
          <h4>Feedback Details</h4>
          {selectedFeedback && (
            <>
              <p><strong>User:</strong> {selectedFeedback.user} ({selectedFeedback.email})</p>
              <p><strong>Service:</strong> {selectedFeedback.service}</p>
              <p><strong>Plan:</strong> {selectedFeedback.plan}</p>
              <p><strong>Rating:</strong> {"⭐".repeat(selectedFeedback.rating)}</p>
              <p><strong>Comment:</strong> {selectedFeedback.comment}</p>
              <div style={styles.actions}>
                <button style={styles.respond}>Respond</button>
                <button style={styles.flag}>Flag</button>
                <button style={styles.delete}>Delete</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: { padding: "20px" },
  cardsRow: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginBottom: "20px" },
  card: { background: "#fff", padding: "20px", borderRadius: "10px", textAlign: "center", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" },
  distribution: { background: "#fff", padding: "20px", borderRadius: "10px", marginBottom: "20px", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" },
  barRow: { display: "flex", alignItems: "center", margin: "8px 0" },
  barBg: { flex: 1, background: "#eee", margin: "0 10px", borderRadius: "5px" },
  filters: { display: "flex", gap: "10px", marginBottom: "20px", background: "#fff", padding: "15px", borderRadius: "10px", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" },
  search: { padding: "6px", border: "1px solid #ccc", borderRadius: "6px", flex: 1 },
  resetBtn: { background: "#ddd", border: "none", padding: "6px 12px", borderRadius: "6px", cursor: "pointer" },
  applyBtn: { background: "#007bff", color: "#fff", border: "none", padding: "6px 12px", borderRadius: "6px", cursor: "pointer" },
  contentRow: { display: "grid", gridTemplateColumns: "2fr 1fr", gap: "20px" },
  tableBox: { background: "#fff", padding: "15px", borderRadius: "10px", boxShadow: "0 2px 6px rgba(0,0,0,0.05)", overflowX: "auto" },
  detailsBox: { background: "#fff", padding: "15px", borderRadius: "10px", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" },
  table: { width: "100%", borderCollapse: "collapse", fontSize: "14px" },
  actions: { display: "flex", gap: "10px", marginTop: "15px" },
  respond: { background: "#007bff", color: "#fff", border: "none", padding: "6px 12px", borderRadius: "6px" },
  flag: { background: "#ffc107", border: "none", padding: "6px 12px", borderRadius: "6px" },
  delete: { background: "#dc3545", color: "#fff", border: "none", padding: "6px 12px", borderRadius: "6px" },
};

export default AdminFeedbackPage;
