import React from 'react';
import './ManufactureSection.css';

const ManufactureSection = () => {
    return (
        <section className="manufacture-section">
            <div className="manufacture-container">
                <div className="manufacture-text">
                    <span className="subtitle">Sweet Escape</span>
                    <h2>Manufacture</h2>
                    <p>
                        Once the ingredients have cooled enough, it’s time to pour them
                        into molds and freeze in a brine bath. After that, the ice cream
                        sticks are dried and packaged in the freezer in square boxes. From
                        here, this cool ice cream is ready to be delivered to visitors...
                    </p>
                    <button className="view-more-btn">View More →</button>
                </div>
                <div className="manufacture-image">
                    <img src="https://wpbingo-jumys.myshopify.com/cdn/shop/files/banner-7.jpg?v=1715587088" alt="Ice Cream Manufacturing" />
                </div>
            </div>
        </section>
    );
};

export default ManufactureSection;