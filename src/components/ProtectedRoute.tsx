import React from 'react';
import { Navigate } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const ProtectedRoute: React.FC<{ children: React.JSX.Element }> = ({ children }) => {
    const token = localStorage.getItem('token');

    // Check if the token exists and is valid
    const isAuthenticated = () => {
        if (!token) return false;
        const decodedToken = jwt.decode(token) as { exp?: number };
        return decodedToken && decodedToken.exp && decodedToken.exp * 1000 > Date.now();
    };

    if (!isAuthenticated()) {
        return <Navigate to="/signin" replace />;
    }

    return children; // Render the protected component if authenticated
};

export default ProtectedRoute;
