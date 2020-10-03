import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg fixed-top">
                <Link className="navbar-brand" to="/">
                    <img height='60' src="https://i.ibb.co/GQYn4Tp/logo.png" alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto font-weight-bolder">
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-2 text-dark" to="#">Donation</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-2 text-dark" to="/tasks">Events Task</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-2 text-dark" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-4 btn btn-primary px-3" to="/resister">Resister</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-2 btn btn-dark px-3" to="/adminDashboard">Admin</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;