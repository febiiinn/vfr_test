import React, { useState } from "react";

function AdminUsersPage() {
  const users = [
    { id: "USR-001", name: "John Smith", email: "john.smith@example.com", regDate: "2023-05-15", lastActivity: "2023-06-20", status: "Active", feedback: 12 },
    { id: "USR-002", name: "Sarah Johnson", email: "sarah.j@example.com", regDate: "2023-04-22", lastActivity: "2023-06-18", status: "Active", feedback: 8 },
    { id: "USR-003", name: "Michael Brown", email: "m.brown@example.com", regDate: "2023-03-10", lastActivity: "2023-05-30", status: "Inactive", feedback: 3 },
    { id: "USR-004", name: "Emily Davis", email: "emily.d@example.com", regDate: "2023-06-01", lastActivity: "2023-06-19", status: "Active", feedback: 5 },
    { id: "USR-005", name: "Robert Wilson", email: "r.wilson@example.com", regDate: "2023-02-18", lastActivity: "2023-04-25", status: "Inactive", feedback: 2 },
    { id: "USR-006", name: "Jennifer Lee", email: "j.lee@example.com", regDate: "2023-05-05", lastActivity: "2023-06-15", status: "Active", feedback: 9 },
    { id: "USR-007", name: "David Miller", email: "d.miller@example.com", regDate: "2023-04-12", lastActivity: "2023-06-10", status: "Active", feedback: 7 },
  ];

  const [userList, setUserList] = useState(users);
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [activityFilter, setActivityFilter] = useState("All Activity");
  const [regFilter, setRegFilter] = useState("All Time");
  const [search, setSearch] = useState("");
  const [confirmId, setConfirmId] = useState(null);

  // Toggle Status
  const toggleStatus = (id) => {
    setUserList((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, status: u.status === "Active" ? "Inactive" : "Active" } : u
      )
    );
    setConfirmId(null);
  };

  // Filter logic
  const filtered = userList.filter((u) => {
    const matchStatus = statusFilter === "All Status" || u.status === statusFilter;
    const matchActivity = activityFilter === "All Activity" || true; // placeholder
    const matchReg = regFilter === "All Time" || true; // placeholder
    const matchSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.id.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchActivity && matchReg && matchSearch;
  });

  return (
    <div style={styles.page}>
      {/* Controls */}
      <div style={styles.controls}>
        <button style={styles.addBtn}>+ Add New User</button>
        <input
          type="text"
          placeholder="Search by name, email, or user ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.search}
        />
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} style={styles.select}>
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
        <select value={activityFilter} onChange={(e) => setActivityFilter(e.target.value)} style={styles.select}>
          <option>All Activity</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <select value={regFilter} onChange={(e) => setRegFilter(e.target.value)} style={styles.select}>
          <option>All Time</option>
          <option>This Month</option>
          <option>Last 3 Months</option>
          <option>This Year</option>
        </select>
        <button style={styles.filterBtn}>Apply Filters</button>
        <button style={styles.resetBtn}>Reset</button>
      </div>

      {/* User Table */}
      <div style={styles.tableBox}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableTh}>User ID</th>
              <th style={styles.tableTh}>Name</th>
              <th style={styles.tableTh}>Email</th>
              <th style={styles.tableTh}>Registration Date</th>
              <th style={styles.tableTh}>Last Activity</th>
              <th style={styles.tableTh}>Status</th>
              <th style={styles.tableTh}>Feedback Count</th>
              <th style={styles.tableTh}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((u) => (
              <tr key={u.id}>
                <td style={styles.tableTd}>{u.id}</td>
                <td style={styles.tableTd}>{u.name}</td>
                <td style={styles.tableTd}>{u.email}</td>
                <td style={styles.tableTd}>{u.regDate}</td>
                <td style={styles.tableTd}>{u.lastActivity}</td>
                <td style={styles.tableTd}>
                  <div>
                    <span
                      onClick={() => setConfirmId(u.id)}
                      style={u.status === "Active" ? styles.activeStatus : styles.inactiveStatus}
                    >
                      {u.status}
                    </span>
                    {confirmId === u.id && (
                      <div onClick={() => toggleStatus(u.id)} style={styles.confirmChange}>
                        Click to change status
                      </div>
                    )}
                  </div>
                </td>
                <td style={styles.tableTd}>{u.feedback}</td>
                <td style={styles.tableTd}>
                  <div style={styles.actionGroup}>
                    <button style={styles.iconBtn}>👁</button>
                    <button style={styles.iconBtn}>✏️</button>
                    <button style={styles.iconBtn}>🗑</button>
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
    </div>
  );
}

const styles = {
  page: { padding: "20px", background: "#f5f7fa", minHeight: "100vh", fontFamily: "Segoe UI, sans-serif" },
  controls: { display: "flex", gap: "10px", marginBottom: "20px", background: "#fff", padding: "15px", borderRadius: "10px", boxShadow: "0 2px 6px rgba(0,0,0,0.05)" },
  addBtn: { background: "#007bff", color: "#fff", border: "none", padding: "8px 16px", borderRadius: "6px", cursor: "pointer" },
  search: { flex: 1, padding: "8px", border: "1px solid #ccc", borderRadius: "6px" },
  select: { padding: "8px", border: "1px solid #ccc", borderRadius: "6px" },
  filterBtn: { background: "#007bff", color: "#fff", border: "none", padding: "8px 12px", borderRadius: "6px", cursor: "pointer" },
  resetBtn: { background: "#6c757d", color: "#fff", border: "none", padding: "8px 12px", borderRadius: "6px", cursor: "pointer" },

  tableBox: { background: "#fff", padding: "15px", borderRadius: "10px", boxShadow: "0 2px 6px rgba(0,0,0,0.05)", overflowX: "auto" },
  table: { width: "100%", borderCollapse: "collapse", fontSize: "14px" },
  tableTh: { padding: "12px", textAlign: "left", borderBottom: "2px solid #eee", fontWeight: "600", color: "#333" },
  tableTd: { padding: "12px", borderBottom: "1px solid #eee", verticalAlign: "middle", whiteSpace: "normal", wordBreak: "break-word" },

  actionGroup: { display: "flex", gap: "6px" },
  iconBtn: { border: "none", background: "transparent", fontSize: "16px", cursor: "pointer" },

  activeStatus: { background: "#d4edda", color: "green", padding: "4px 8px", borderRadius: "6px", fontSize: "12px", cursor: "pointer" },
  inactiveStatus: { background: "#f8d7da", color: "red", padding: "4px 8px", borderRadius: "6px", fontSize: "12px", cursor: "pointer" },
  confirmChange: { marginTop: "4px", fontSize: "11px", color: "#007bff", cursor: "pointer", textDecoration: "underline" },

  pagination: { display: "flex", justifyContent: "center", marginTop: "15px", gap: "8px" },
};

export default AdminUsersPage;
