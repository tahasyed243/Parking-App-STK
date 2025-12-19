import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

export default function AnimatedRoutes({ onLoginSuccess }) {
    const user = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("user")) : null;

    return (
        <Routes>
            <Route path="/login" element={<Login onLoginSuccess={onLoginSuccess} />} />
            <Route path="/signup" element={<Signup />} />
            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />
            <Route path="*" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
        </Routes>
    );
}
