import React from 'react';
import logo from '../../assets/images/logo.png';
import './index.scss';

function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="logo" />
            <a href="/">News</a>
            <a href="/">Bible Study</a>
            <a href="/">Volunteer</a>
        </div>
    );
}

export default Navbar;