import '../styles/login.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logoblanco.png';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { messages } from '../pages/mensajesdays';

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
    const [messageOfTheDay, setMessageOfTheDay] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if (isAuthenticated) {
            navigate('/Lector/pages/dashboard');
        }

        const dayOfWeek = new Date().getDay();
        const randomMessageIndex = Math.floor(Math.random() * messages[dayOfWeek].length);
        const message = messages[dayOfWeek][randomMessageIndex];
        setMessageOfTheDay(message);
    }, [navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (username === validCredentials.username && password === validCredentials.password) {
            localStorage.setItem('isAuthenticated', 'true');
            notyf.success('¡Has iniciado sesión exitosamente!');

            setTimeout(() => {
                navigate('/Lector/pages/dashboard');
            }, 1000);
        } else {
            notyf.error('Usuario y/o contraseña incorrectos.');
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
                            <h2 className="mb-3 mt-5 text-white h3 fw-bold">{messageOfTheDay}</h2>
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
