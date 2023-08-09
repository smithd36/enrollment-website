import React, { useState } from 'react';
import News from '../News';
import './index.scss';
import Enroll from '../Enroll';
import Volunteer from '../Volunteer';

const Home = () => {
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

    return (
        <div className="homepage-container">
            <div className="welcome">
                <h1>Corona Bible Study</h1>
                <p>Welcome to the Corona Bible Study website!</p>
                <button className="welcome-button" onClick={toggleChildSignUpForm}>
                    Student Sign Up
                </button>
                <button className="welcome-button" onClick={toggleVolunteerForm}>
                    Volunteer Sign Up
                </button>
            </div>
            <News />

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

export default Home;
