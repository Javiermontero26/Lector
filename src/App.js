import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import Login from './pages/login'; // Importa tu componente Logincs
import Libros from './pages/libros'; // Asegúrate de importar otros componentes según sea necesario
import Dashboard from './pages/dashboard';
import RecuperarContraseña from './pages/recuperar';
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/Lector" element={<Login />} /> {/* Ruta de inicio que carga Login */}
                <Route path="/Lector/pages/dashboard" element={<Dashboard />} />
                <Route path="/Lector/pages/libros" element={<Libros />} />
                <Route path="/Lector/pages/recuperar" element={<RecuperarContraseña />} />
                {/* Ruta para redirigir a la página que queremos iniciar el sistema, en este caso el Login*/}
                <Route path="/Lector" element={<Navigate to="/Lector" replace />} />
            </Routes>
        </Router>
    );
};

export default App;
