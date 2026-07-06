import React from "react";
import "./WhyChooseUs.css";

import {
    FaSnowflake,
    FaTruck,
    FaBoxOpen,
    FaArrowRight,
} from "react-icons/fa";

const WhyChooseUs = () => {
    return (
        <section className="whychoose-section">

            {/* LEFT CONTENT */}
            <div className="whychoose-content">

                <h1>
                    Make Every Day A <br />
                    Sweet Day
                </h1>

                <p>
                    But Incorporating Liquor Into Ice Cream Seems Like
                    <br />
                    Nothing When You Consider How Inventive...
                </p>

                <div className="whychoose-list">

                    <div className="item">
                        <FaSnowflake className="icon" />
                        <span>Guaranteed Frozen Delivery</span>
                    </div>

                    <div className="item">
                        <FaTruck className="icon" />
                        <span>Flat-Rate Shipping Nationwide</span>
                    </div>

                    <div className="item">
                        <FaBoxOpen className="icon" />
                        <span>Instagram-Worthy Unboxing</span>
                    </div>

                </div>

                <button className="whychoose-btn">
                    View More <FaArrowRight />
                </button>

            </div>

        </section>
    );
};

export default WhyChooseUs;