import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';
import './index.scss';

const Enroll = () => {
    const closeForm = () => {
        window.location.reload();
    }

    return (
        <div className="form-popup-overlay">
            <div className="form-popup">
                <FontAwesomeIcon onClick={closeForm} className="enroll-icon" icon={faTimes} />
                <h1>Enroll</h1>
                <p>Enroll your child</p>
                <form>
                    <label>
                        Child Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Child Age:
                        <input type="text" name="age" />
                    </label>
                    <label>
                        Parent Name:
                        <input type="text" name="parentName" />
                    </label>
                    <label>
                        Parent Phone:
                        <input type="text" name="parentPhone" />
                    </label>
                    <button type="submit">Enroll Now</button>
                </form>
            </div>
        </div>
    );
}

export default Enroll;