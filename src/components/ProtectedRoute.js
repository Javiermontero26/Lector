import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    return isAuthenticated ? children : <Navigate to="/Lector" replace />;
};

export default ProtectedRoute;
