import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoblanco from '../assets/images/logoblanco.png';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/Lector');
    };

    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
                <Link className="nav-link text-white" to="/Lector/pages/dashboard">
                    <img src={logoblanco} alt="logo" style={{ width: 150 }} />
                </Link>
                <button className="navbar-toggler text-white bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/Lector/pages/libros">LIBROS</Link>
                        </li>
                    </ul>
                    <form className="d-flex mx-5" role="search">
                        <button className="btn btn-danger" type="button" onClick={handleLogout}>Salir</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
