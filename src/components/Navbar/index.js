import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import './index.scss';
import { faBars, faNewspaper, faHandshake } from '@fortawesome/fontawesome-free-solid';
import { faBookBible } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Enroll from '../Enroll';
import Volunteer from '../Volunteer';

function Navbar() {
    const [isNavbarOpen, setNavbarOpen] = useState(true);
    const [showChildSignUpForm, setShowChildSignUpForm] = useState(false);
    const [showVolunteerForm, setShowVolunteerForm] = useState(false);

    const toggleChildSignUpForm = () => {
        setShowChildSignUpForm(!showChildSignUpForm);
        setShowVolunteerForm(false);
    };

    const toggleVolunteerForm = () => {
        setShowVolunteerForm(!showVolunteerForm);
        setShowChildSignUpForm(false);
    };

    const toggleNavbar = () => {
        setNavbarOpen(!isNavbarOpen);
    };

    return (
        <div className={`navbar ${isNavbarOpen ? 'navbar-open' : ''}`}>
            <div className="navbar-header">
                <img src={logo} alt="logo" className="logo" />
                <FontAwesomeIcon
                    icon={faBars}
                    className={`navbar-toggle-button ${isNavbarOpen ? 'active' : ''}`}
                    onClick={toggleNavbar}
                />
            </div>
            <nav className="navbar-links">
                <a href="#news" className="navbar-link">News <FontAwesomeIcon icon={faNewspaper} /> </a>
                <button onClick={toggleChildSignUpForm} className="navbar-button">Sign Up <FontAwesomeIcon icon={faBookBible} /> </button>
                <button onClick={toggleVolunteerForm} className="navbar-button">Volunteer <FontAwesomeIcon icon={faHandshake} /></button>
            </nav>
            {showChildSignUpForm && (
                <div className="form-popup-overlay">
                    <div className="form-popup">
                        {/* Child Sign Up Form */}
                        <Enroll />
                    </div>
                </div>
            )}

            {showVolunteerForm && (
                <div className="form-popup-overlay">
                    <div className="form-popup">
                        {/* Volunteer Form */}
                        <Volunteer />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
