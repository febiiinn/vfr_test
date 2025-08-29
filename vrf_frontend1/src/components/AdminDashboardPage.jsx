import React from "react";
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip,
  BarChart, Bar, ResponsiveContainer
} from "recharts";

function AdminDashboardPage() {
  const feedbackTrends = [
    { day: "Mon", feedback: 120 },
    { day: "Tue", feedback: 200 },
    { day: "Wed", feedback: 300 },
    { day: "Thu", feedback: 250 },
    { day: "Fri", feedback: 400 },
    { day: "Sat", feedback: 500 },
    { day: "Sun", feedback: 450 },
  ];

  const categoryRatings = [
    { name: "Support", rating: 4.8 },
    { name: "Cloud", rating: 4.9 },
    { name: "Security", rating: 4.5 },
    { name: "Analytics", rating: 4.8 },
    { name: "API", rating: 4.6 },
    { name: "Billing", rating: 4.3 },
  ];

  return (
    <div style={styles.page}>
      {/* Summary Cards */}
      <div style={styles.cardsRow}>
        {[
          { title: "Total Feedback", value: "8,742", change: "↑ 12.5% from last month", color: "green" },
          { title: "Average Rating", value: "4.7", change: "↑ 0.3 from last month", color: "green" },
          { title: "Active Users", value: "3,891", change: "↑ 8.2% from last month", color: "green" },
          { title: "Total Services", value: "42", change: "↓ 2 from last month", color: "red" },
        ].map((card, i) => (
          <div key={i} style={styles.card}>
            <h4 style={styles.cardTitle}>{card.title}</h4>
            <h2 style={styles.cardValue}>{card.value}</h2>
            <p style={{ color: card.color }}>{card.change}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div style={styles.chartsRow}>
        <div style={styles.chartBox}>
          <h4>Feedback Trends (Last 7 days)</h4>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={feedbackTrends}>
              <Line type="monotone" dataKey="feedback" stroke="#007bff" strokeWidth={2} />
              <CartesianGrid stroke="#eee" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div style={styles.chartBox}>
          <h4>Ratings by Service Category</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={categoryRatings}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 5]} />
              <Tooltip />
              <Bar dataKey="rating" fill="#007bff" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Feedback & Performance */}
      <div style={styles.bottomRow}>
        <div style={styles.feedbackBox}>
          <h4>Recent Feedback</h4>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Service</th>
                <th>Rating</th>
                <th>Comment</th>
                <th>User</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Cloud Storage</td><td>⭐⭐⭐⭐⭐</td><td>Excellent service</td><td>Robert J.</td></tr>
              <tr><td>API Gateway</td><td>⭐⭐⭐⭐</td><td>Good documentation</td><td>Amy L.</td></tr>
              <tr><td>Security Suite</td><td>⭐⭐⭐⭐⭐</td><td>Comprehensive features</td><td>Mike S.</td></tr>
              <tr><td>Billing Portal</td><td>⭐⭐⭐</td><td>Confusing interface</td><td>Jane W.</td></tr>
            </tbody>
          </table>
        </div>

        <div style={styles.performanceBox}>
          <h4>Service Performance</h4>
          <p><strong>Top Performing</strong></p>
          <ul>
            <li>✅ Cloud Storage — 4.9</li>
            <li>✅ Data Analytics — 4.8</li>
          </ul>
          <p><strong>Needs Improvement</strong></p>
          <ul>
            <li>⚠️ Billing Portal — 3.2</li>
            <li>⚠️ Support Chat — 3.5</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: { padding: "20px" },
  cardsRow: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginBottom: "20px" },
  card: { background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 6px rgba(0,0,0,0.05)", textAlign: "center" },
  cardTitle: { fontSize: "13px", color: "#666" },
  cardValue: { fontSize: "24px", margin: "5px 0", color: "#0d1b2a" },
  chartsRow: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" },
  chartBox: { background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" },
  bottomRow: { display: "grid", gridTemplateColumns: "2fr 1fr", gap: "20px" },
  feedbackBox: { background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 6px rgba(0,0,0,0.05)", overflowX: "auto" },
  performanceBox: { background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" },
  table: { width: "100%", borderCollapse: "collapse", fontSize: "13px" },
};

export default AdminDashboardPage;
