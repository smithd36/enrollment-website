import './index.scss';
import React from 'react';

const Home = () => {
    return (
        <div className="homepage-container">
            <div id="home" className={`welcome partial-bg`}>
                <h1>Welcome to Our Site</h1>
                <h3>Corona Bible Study</h3>
                <p>Welcome to the Corona Bible Study website! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet scelerisque nulla. Phasellus in quam eu metus fermentum feugiat sodales eget elit. Donec id dignissim dui. Maecenas aliquam gravida enim, quis vestibulum leo eleifend sed. Nulla dapibus nunc at nibh euismod faucibus eget vel turpis. Maecenas faucibus varius elit, vel porta tellus. Cras ligula augue, feugiat ut finibus eget, ullamcorper eget ex. Nulla in tellus lobortis, facilisis orci id, pulvinar nibh. In bibendum purus ex, in molestie orci rutrum ac. Proin imperdiet iaculis mattis. Aenean vel lacinia ex.</p>
                <button className="btn get-started">News</button>
                <button className="btn get-started">Study Sign-Up</button>
                <button className="btn get-started">Volunteer</button>

            </div>
        </div>
    );
}

export default Home;