import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 via-transparent to-transparent"></div>
      <div className="relative z-10">
        <Router>
          <Routes>
            {/* Default route to Profile Page */}
            <Route path="/" element={<ProfilePage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
