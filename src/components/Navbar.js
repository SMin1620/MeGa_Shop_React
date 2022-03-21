import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink 
                                className="nav-link" 
                                to="/products"
                                activeClassName='active'
                                >
                                    Product
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                className="nav-link" 
                                to="/mypage"
                                activeClassName='active'
                                >
                                    Mypage
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                className="nav-link" 
                                to="/login"
                                activeClassName='active'
                                >
                                    Login
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
};

export default Navbar;