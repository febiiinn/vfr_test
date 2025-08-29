import React, { useState } from "react";

function AdminServicesPage() {
  const services = [
    { id: "VAS-001", name: "Premium Support", category: "Support", status: "Active", rating: 4.8, reviews: 124 },
    { id: "VAS-002", name: "Advanced Analytics", category: "Analytics", status: "Active", rating: 4.2, reviews: 98 },
    { id: "VAS-003", name: "API Integration", category: "Integration", status: "Active", rating: 4.5, reviews: 87 },
    { id: "VAS-004", name: "Custom Branding", category: "Customization", status: "Inactive", rating: 3.7, reviews: 45 },
    { id: "VAS-005", name: "Priority Response", category: "Support", status: "Active", rating: 4.3, reviews: 76 },
    { id: "VAS-006", name: "Data Export", category: "Analytics", status: "Active", rating: 4.9, reviews: 112 },
    { id: "VAS-007", name: "Feedback Templates", category: "Customization", status: "Inactive", rating: 3.2, reviews: 28 },
  ];

  const [serviceList, setServiceList] = useState(services);
  const [category, setCategory] = useState("All Categories");
  const [status, setStatus] = useState("All Status");
  const [search, setSearch] = useState("");
  const [confirmId, setConfirmId] = useState(null);

  const toggleStatus = (id) => {
    setServiceList((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, status: s.status === "Active" ? "Inactive" : "Active" } : s
      )
    );
    setConfirmId(null); // reset confirmation
  };

  const filtered = serviceList.filter((s) => {
    const matchCategory = category === "All Categories" || s.category === category;
    const matchStatus = status === "All Status" || s.status === status;
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchStatus && matchSearch;
  });

  return (
    <div style={styles.page}>
      {/* Controls */}
      <div style={styles.controls}>
        <button style={styles.addBtn}>+ Add New Service</button>
        <input
          type="text"
          placeholder="Search services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.search}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} style={styles.select}>
          <option>All Categories</option>
          <option>Support</option>
          <option>Analytics</option>
          <option>Integration</option>
          <option>Customization</option>
        </select>
        <select value={status} onChange={(e) => setStatus(e.target.value)} style={styles.select}>
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      <div style={styles.row}>
        {/* Services Table */}
        <div style={styles.tableBox}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableTh}>Service ID</th>
                <th style={styles.tableTh}>Name</th>
                <th style={styles.tableTh}>Category</th>
                <th style={styles.tableTh}>Status</th>
                <th style={styles.tableTh}>Avg. Rating</th>
                <th style={styles.tableTh}>Reviews</th>
                <th style={styles.tableTh}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s) => (
                <tr key={s.id}>
                  <td style={styles.tableTd}>{s.id}</td>
                  <td style={styles.tableTd}>{s.name}</td>
                  <td style={styles.tableTd}>{s.category}</td>

                  {/* STATUS with confirmation */}
                  <td style={styles.tableTd}>
                    <div>
                      <span
                        onClick={() => setConfirmId(s.id)}
                        style={s.status === "Active" ? styles.activeStatus : styles.inactiveStatus}
                      >
                        {s.status}
                      </span>
                      {confirmId === s.id && (
                        <div onClick={() => toggleStatus(s.id)} style={styles.confirmChange}>
                          Click to change status
                        </div>
                      )}
                    </div>
                  </td>

                  {/* AVG RATING */}
                  <td style={styles.tableTd}>⭐ {s.rating.toFixed(1)}</td>

                  {/* REVIEWS */}
                  <td style={styles.tableTd}>{s.reviews}</td>

                  {/* ACTIONS */}
                  <td style={styles.tableTd}>
                    <div style={styles.actionGroup}>
                      <button style={styles.editBtn}>Edit</button>
                      <button style={styles.analyticsBtn}>Analytics</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div style={styles.pagination}>
            <button>{"<"}</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>{">"}</button>
          </div>
        </div>

        {/* Sidebar */}
        <div style={styles.sidebar}>
          <div style={styles.card}>
            <h4>Top Rated Services</h4>
            <ul>
              <li>Data Export — ⭐ 4.9</li>
              <li>Premium Support — ⭐ 4.8</li>
              <li>API Integration — ⭐ 4.5</li>
            </ul>
          </div>
          <div style={styles.card}>
            <h4>Most Reviewed Services</h4>
            <ul>
              <li>Premium Support — 124 reviews</li>
              <li>Data Export — 112 reviews</li>
              <li>Advanced Analytics — 98 reviews</li>
            </ul>
          </div>
          <div style={styles.card}>
            <h4>Service Categories</h4>
            <ul>
              <li>Support (2)</li>
              <li>Analytics (2)</li>
              <li>Integration (1)</li>
              <li>Customization (2)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: { padding: "20px", background: "#f5f7fa", minHeight: "100vh", fontFamily: "Segoe UI, sans-serif" },
  controls: { display: "flex", gap: "10px", marginBottom: "20px", background: "#fff", padding: "15px", borderRadius: "10px", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" },
  addBtn: { background: "#007bff", color: "#fff", border: "none", padding: "8px 16px", borderRadius: "6px", cursor: "pointer" },
  search: { flex: 1, padding: "8px", border: "1px solid #ccc", borderRadius: "6px" },
  select: { padding: "8px", border: "1px solid #ccc", borderRadius: "6px" },

  row: { display: "grid", gridTemplateColumns: "2fr 1fr", gap: "20px" },

  tableBox: { background: "#fff", padding: "15px", borderRadius: "10px", boxShadow: "0 2px 6px rgba(0,0,0,0.05)", overflowX: "auto" },
  table: { width: "100%", borderCollapse: "collapse", fontSize: "14px" },
  tableTh: { padding: "12px", textAlign: "left", borderBottom: "2px solid #eee", fontWeight: "600", color: "#333" },
  tableTd: { padding: "12px", borderBottom: "1px solid #eee", verticalAlign: "middle", whiteSpace: "normal", wordBreak: "break-word" },

  actionGroup: { display: "flex", gap: "6px", flexWrap: "nowrap" },

  activeStatus: { background: "#d4edda", color: "green", padding: "4px 8px", borderRadius: "6px", fontSize: "12px", cursor: "pointer" },
  inactiveStatus: { background: "#f8d7da", color: "red", padding: "4px 8px", borderRadius: "6px", fontSize: "12px", cursor: "pointer" },
  confirmChange: { marginTop: "4px", fontSize: "11px", color: "#007bff", cursor: "pointer", textDecoration: "underline" },

  editBtn: { background: "#17a2b8", color: "#fff", border: "none", padding: "4px 8px", borderRadius: "4px", cursor: "pointer" },
  analyticsBtn: { background: "#6c757d", color: "#fff", border: "none", padding: "4px 8px", borderRadius: "4px", cursor: "pointer" },

  sidebar: { display: "flex", flexDirection: "column", gap: "20px" },
  card: { background: "#fff", padding: "15px", borderRadius: "10px", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" },

  pagination: { display: "flex", justifyContent: "center", marginTop: "15px", gap: "8px" },
};

export default AdminServicesPage;
