import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import authService from "../services/authService";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = authService.isAuthenticatedViaLoginPage(); // this checks if the user has correctly authenticated via login page

  if (!isAuthenticated) {
    // removes all authentication data, hence not allowing access of dashboard from url
    authService.logout();

    // sends user back to login page to login before accessing dashboard
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;

// If /dashboard tried to access without going through login page: redirects to /login