import { Link } from "react-router-dom";

export default function HelpPage() {
  return (
    <div>
      {/* Internal CSS */}
      <style>
        {`
          /* General Styles */
          body {
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f9fafb;
          }

          /* Navbar Styles */
          .navbar {
            background-color: #1e3a8a;
            padding: 15px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .navbar h1 {
            color: #fff;
            margin: 0;
            font-size: 22px;
          }
          .nav-links {
            display: flex;
            gap: 20px;
          }
          .nav-links a {
            color: #fff;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
          }
          .nav-links a:hover {
            color: #facc15;
          }

          /* Help Page Container */
          .help-container {
            max-width: 900px;
            margin: 40px auto;
            padding: 20px;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          .help-container h2 {
            text-align: center;
            color: #1e3a8a;
            margin-bottom: 20px;
          }

          .faq {
            margin-bottom: 20px;
          }

          .faq h3 {
            margin-bottom: 10px;
            color: #374151;
          }

          .faq p {
            margin: 0;
            color: #6b7280;
          }

          /* Contact Section */
          .contact-section {
            text-align: center;
            margin-top: 30px;
            padding: 15px;
            background: #f3f4f6;
            border-radius: 8px;
          }

          .contact-section p {
            margin: 5px 0;
          }
        `}
      </style>

      {/* Navbar */}
      <div className="navbar">
        <h1>Help Center</h1>
        <div className="nav-links">
          <Link to="/dashboard">Home</Link>
          <Link to="/aboutus">About Us</Link>
         
        </div>
      </div>

      {/* Help Content */}
      <div className="help-container">
        <h2>How Can We Help You?</h2>

        <div className="faq">
          <h3>1. How do I reset my password?</h3>
          <p>Go to your account settings, click on "Reset Password," and follow the instructions sent to your email.</p>
        </div>

        <div className="faq">
          <h3>2. Where can I find my order details?</h3>
          <p>You can find all your order details under the "My Orders" section in your profile.</p>
        </div>

        <div className="faq">
          <h3>3. How can I contact support?</h3>
          <p>You can email us at support@example.com or call us at +1-234-567-890.</p>
        </div>

        <div className="contact-section">
          <h3>Need More Help?</h3>
          <p>Email: support@example.com</p>
          <p>Phone: +1-234-567-890</p>
        </div>
      </div>
    </div>
  );
}
