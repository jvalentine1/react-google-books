/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from "react-router-dom";
import './nav.css';

function NavTabs() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light my-nav-bar">
            <h3>React Books</h3>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav nav-link-host">
                    <li className="nav-item active">
                        <Link to="/" className={window.location.pathname === "/" ? "nav-link active bold-link" : "nav-link"} id="my-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-link active bold-link" : "nav-link"} id="my-link">
                            Saved Books
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavTabs;