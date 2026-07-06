import React from 'react';
import { Link } from 'react-router-dom';
import './404.css'; 

const NotFound = () => {
    return (
        <section className="not-found-container">
            <div className="content">
                <h1>404</h1>
                <h2>Oops! Page Not Found</h2>
                <p>Humhe maaf kijiye, par aap jo page dhund rahe hain wo exist nahi karta.</p>

                {/* Home page par wapas jaane ke liye button */}
                <Link to="/" className="home-btn">
                    Back to Home
                </Link>
            </div>
        </section>
    );
};

export default NotFound;