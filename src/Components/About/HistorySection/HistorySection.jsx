import React from 'react';
import './HistorySection.css';

const HistorySection = () => {
    return (
        <section className="history-section">
            <div className="history-container">
                {/* Image Left Side */}
                <div className="history-image">
                    <img src="https://wpbingo-jumys.myshopify.com/cdn/shop/files/banner-8.jpg?v=1715660504" alt="Frozen Joy" />
                </div>

                {/* Text Right Side */}
                <div className="history-text">
                    <span className="subtitle">Frozen Joy</span>
                    <h2>History Begin</h2>
                    <p>
                        On hot summer days like today, in addition to a glass of cool beverage,
                        a glass of ice cream can also help relieve some of the heat. Ice cream
                        is popular not only among children but also loved by many people of
                        many different ages...
                    </p>
                    <button className="view-more-btn">View More →</button>
                </div>
            </div>
        </section>
    );
};

export default HistorySection;