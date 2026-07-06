import React from "react";
import "./AccountSection.css";

const AccountSection = () => {
    return (
        <div className="account-page">

            <h1>Sign in</h1>

            <input
                type="email"
                placeholder="Email*"
                className="account-input"
            />

            <div className="password-box">
                <input
                    type="password"
                    placeholder="Password*"
                    className="account-input"
                />
                <i className="fa-regular fa-eye"></i>
            </div>

            <a href="/">Lost your password ?</a>

            <button className="signin-btn">
                Sign In
            </button>

            <h2>New customer?</h2>

            <p>
                Sign up for early Sale access plus tailored
                new arrivals, trends and promotions.
            </p>

            <button className="register-btn">
                Register
            </button>

        </div>
    );
};

export default AccountSection;