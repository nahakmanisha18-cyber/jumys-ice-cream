import React from 'react';
import './StatsSection.css';

const StatsSection = () => {
    return (
        <section className="stats-section">
            <div className="stats-container">
                <div className="stat-item">
                    <h2>115+</h2>
                    <p>Branch Shop</p>
                </div>
                <div className="separator">--</div>
                <div className="stat-item">
                    <h2>85+</h2>
                    <p>Staffs</p>
                </div>
                <div className="separator">--</div>
                <div className="stat-item">
                    <h2>120+</h2>
                    <p>Flavor variants</p>
                </div>
                <div className="separator">--</div>
                <div className="stat-item">
                    <h2>90%</h2>
                    <p>positive Review</p>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;