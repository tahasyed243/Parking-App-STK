import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import GridView from "./pages/GridView";
import TableView from "./pages/TableView";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import PricingPage from "./pages/PricingPage";
import FeaturesPage from "./pages/FeaturesPage";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication on app load
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
    };

    checkAuth();
    
    // Listen for storage changes
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  // Protected Route Component
  const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    
    if (!token) {
      return <Navigate to="/login" replace />;
    }
    
    return children;
  };

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/grid" element={
          <ProtectedRoute>
            <GridView />
          </ProtectedRoute>
        } />
        <Route path="/table" element={
          <ProtectedRoute>
            <TableView />
          </ProtectedRoute>
        } />

        {/* Redirect for unknown routes */}
        <Route path="*" element={
          isAuthenticated ? 
            <Navigate to="/dashboard" /> : 
            <Navigate to="/" />
        } />
      </Routes>
    </Router>
  );
}