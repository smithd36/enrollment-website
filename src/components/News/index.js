import React from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/fontawesome-free-solid';

function News() {
    return (
        <div id="news" className="news partial-bg">
            <div className="news-text">
                <h1>News & Upcoming Events <FontAwesomeIcon icon={faNewspaper} /></h1>
                <p>Stay updated with the latest news and upcoming events!</p>
            </div>

            <div className="news-items">
                <div className="news-item">
                    <h2>News Item 1</h2>
                    <p>News Item 1 Description</p>
                </div>
                <div className="news-item">
                    <h2>News Item 2</h2>
                    <p>News Item 2 Description</p>
                </div>
                <div className="news-item">
                    <h2>News Item 3</h2>
                    <p>News Item 3 Description</p>
                </div>
            </div>
        </div>
    )
}

export default News;
