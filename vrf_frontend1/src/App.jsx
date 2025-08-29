import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import AdminLoginPage from "./components/AdminLoginPage";
import DashboardPage from "./components/DashboardPage";
import ServicesPage from "./components/ServicesPage";
import FeedbackPage from "./components/FeedbackPage";
import ReviewsPage from "./components/ReviewsPage";
import AdminLayout from "./components/AdminLayout";
import AdminDashboardPage from "./components/AdminDashboardPage"; 
import AdminFeedbackPage from "./components/AdminFeedbackPage";
import AdminServicesPage from "./components/AdminServicesPage";
import AdminUsersPage from "./components/AdminUsersPage";
import AdminSettingsPage from "./components/AdminSettingsPage";
import AboutUs from "./components/AboutUs";
import HelpPage from "./components/HelpPage";
function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin" element={<AdminLoginPage />} />

      {/* User routes */}
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/feedback/:serviceName" element={<FeedbackPage />} />
      <Route path="/reviews" element={<ReviewsPage />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/help" element={<HelpPage />} />

      {/* Admin routes */}
      <Route path="/admin-dashboard" element={<AdminLayout><AdminDashboardPage /></AdminLayout>} />
      <Route path="/admin-feedback" element={<AdminLayout><AdminFeedbackPage /></AdminLayout>} />
      <Route path="/admin-services" element={<AdminLayout><AdminServicesPage /></AdminLayout>} />
      <Route path="/admin-users" element={<AdminLayout><AdminUsersPage/></AdminLayout>} />
      <Route path="/admin-settings" element={<AdminLayout><AdminSettingsPage/></AdminLayout>} />
    </Routes>
  );
}

export default App;
