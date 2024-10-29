import '../styles/recuperar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logoblanco.png'; // Asegúrate de que la ruta sea correcta
import { Notyf } from 'notyf'; // Importa Notyf si lo estás usando
import 'notyf/notyf.min.css';

const RecuperarContraseña = () => {
    const [email, setEmail] = useState('');
    const notyf = new Notyf({
        duration: 2000,
        types: [
            {
                type: 'success',
                background: '#4CAF50',
            },
            {
                type: 'error',
                background: '#F44336',
            },
        ],
        position: {
            x: 'center',
            y: 'top',
        },
        dismissible: true,
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validar el formato del correo
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(email)) {
            try {
                const isValid = await verificarCorreo(email);
                if (isValid) {
                    notyf.success('¡Enviado correctamente!');
                    setTimeout(() => {
                        window.location.href = `codigo.html?success=true`;
                    }, 1000);
                } else {
                    notyf.error('El correo ingresado no está registrado.');
                }
            } catch (error) {
                notyf.error('Error al verificar el correo.');
            }
        } else {
            notyf.error('El correo ingresado no es válido.');
        }
    };

    const verificarCorreo = (email) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(email.endsWith('ejemplo@gmail.com')); // Cambia esto según tu lógica de verificación
            }, 1000);
        });
    };

    return (
        <div className="container-fluid vh-100 d-flex align-items-center justify-content-center background-image">
            <div className="row w-100 h-100">
                <div className="col-lg-6 d-none d-lg-flex p-0">
                    
                </div>
                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                    <form 
                        className="text-center p-5 rounded w-100" 
                        id="recuperaciónlogin" 
                        onSubmit={handleSubmit} // Vincula el evento de envío
                        style={{ maxWidth: '550px', background: 'linear-gradient(135deg, #5de0e6, #004aad)' }}
                    >
                        <div className="text-center mb-3">
                            <img className="img-fluid mb-3" src={logo} alt="Graduación" style={{ maxWidth: '70%' }} />
                            <hr className="text-white" />
                            <h2 className="text-white">Recuperemos el acceso a tu cuenta</h2>
                            <p className="text-white">Ingresa tu correo para enviarte el enlace de recuperación.</p>
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Por favor, ingresa tu correo"
                                value={email} // Vincula el estado al campo de entrada
                                onChange={(e) => setEmail(e.target.value)} // Actualiza el estado en cada cambio
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-dark w-100">Enviar código</button>
                        <div className="text-center mt-3">
                            <Link to="/Lector" className="text-white fw-bold">Volver al inicio de sesión</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RecuperarContraseña;
