import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faTimes } from '@fortawesome/fontawesome-free-solid';

const Volunteer = () => {
// On Click to populate a form enroll a child
    const closeForm = () => {
        window.location.reload();
    }

    return (
        <div className="form-popup-overlay">
            <div className="form-popup">
                <FontAwesomeIcon onClick={closeForm} className="volunteer-icon" icon={faTimes} />
                <h1>Volunteer</h1>
                <p>Volunteer your time</p>
                {/* Form here */}
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Phone:
                        <input type="text" name="phone" />
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" />
                    </label>
                    <label>
                        Availability:
                        <input type="text" name="availability" />
                    </label>
                    <label>
                        Comments:
                        <input type="text" name="comments" />
                    </label>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Volunteer;