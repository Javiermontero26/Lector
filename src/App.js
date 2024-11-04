import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Libros from './pages/libros';
import Dashboard from './pages/dashboard';
import RecuperarContraseña from './pages/recuperar';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
    return (
        <Router basename="/Lector"> {/* Configura el basename para el hosting */}
            <Routes>
                <Route path="/" element={<Navigate to="/Lector" replace />} /> {/* Redirección a la ruta base */}
                <Route path="/Lector" element={<Login />} />
                <Route path="/Lector/pages/recuperar" element={<RecuperarContraseña />} />
                
                <Route path="/Lector/pages/dashboard" element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                } />
                
                <Route path="/Lector/pages/libros" element={
                    <ProtectedRoute>
                        <Libros />
                    </ProtectedRoute>
                } />
                
                {/* Opción para manejar rutas no encontradas */}
                <Route path="*" element={<Navigate to="/Lector" replace />} />
            </Routes>
        </Router>
    );
};

export default App;
