import '../styles/login.css';

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate para la redirección
import logo from '../assets/images/logoblanco.png'; // Asegúrate de que la ruta sea correcta
import { Notyf } from 'notyf'; // Importa Notyf si lo estás usando
import 'notyf/notyf.min.css';


const Login = () => {
    const notyf = new Notyf({
        duration: 4000,
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

    const validCredentials = {
        username: 'admin',
        password: '123',
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook para redirección

    const handleSubmit = (event) => {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        if (username === validCredentials.username && password === validCredentials.password) {
            notyf.success('¡Has iniciado sesión exitosamente!');

            // Redirigir a la página de destino después de un corto retraso
            setTimeout(() => {
                navigate('/Lector/pages/dashboard'); // Cambia a la ruta correspondiente en tu aplicación
            }, 1000);
        } else {
            notyf.error('Usuario y/o contraseña incorrectos.'); // Notificación de error
        }
    };

    return (


        <div className="container-fluid vh-100">
            <div className="row vh-100">
                <div className="col-8 p-0 hide-on-small">
                    <img
                        className="w-100 h-100"
                        src="https://media.admagazine.com/photos/6585f181bbe8ec0403994e1f/16:9/w_2560%2Cc_limit/the-library-b2-hotel-zurich.jpg"
                        alt=""
                    />
                </div>

                <div
                    className="col-12 col-md-4 d-flex align-items-center justify-content-center vh-100 full-width-on-small"
                    style={{ background: 'linear-gradient(135deg, #5de0e6, #004aad)' }}
                >
                    <form className="text-center p-4 rounded w-100" style={{ maxWidth: '400px' }} onSubmit={handleSubmit}>
                        <div className="text-center mb-4">
                            <img className="img-fluid" src={logo} alt="logo" />
                            <hr className="text-white w-75 mx-5" />
                            <h2 className="mb-3 mt-5 text-white h3 fw-bold">¡Espero que tu viernes sea increíble!</h2>
                        </div>
                        <div className="mb-3 mt-5">
                            <input
                                type="text"
                                className="form-control rounded"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Ingresa tu usuario"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control rounded"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Ingresa tu contraseña"
                            />
                        </div>
                        <button type="submit" className="btn btn-dark w-100 mt-3">Comencemos</button>
                        <div className="text-center mt-3">
                            <Link to="/Lector/pages/recuperar" className="text-white fw-bold">Olvidé mi contraseña</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;
