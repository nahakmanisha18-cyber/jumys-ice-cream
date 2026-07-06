import React from "react";
import "./Category.css";

import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

const Category = () => {
    return (
        <section className="category-section">

            <Container fluid>

                <Row>

                    {/* CARD 1 */}
                    <Col lg={3} md={6} sm={12}>
                        <div className="category-card matcha top-card">

                            <div className="category-image">
                                <img
                                    src="https://wpbingo-jumys.myshopify.com/cdn/shop/files/banner-1.jpg?v=1714103883"
                                    alt=""
                                />
                            </div>

                            <h2>Matcha</h2>

                            <p>
                                Matcha Ice Cream Needs The Absolute
                                Balance Between Sweetness...
                            </p>

                            <button className="arrow-btn">
                                <FaArrowRight />
                            </button>

                        </div>
                    </Col>

                    {/* CARD 2 */}
                    <Col lg={3} md={6} sm={12}>
                        <div className="category-card strawberry bottom-card">

                            <div className="category-image">
                                <img
                                    src="https://wpbingo-jumys.myshopify.com/cdn/shop/files/banner-2.jpg?v=1714615709"
                                    alt=""
                                />
                            </div>

                            <h2>Strawberry</h2>

                            <p>
                                The Main Ingredient Is Pureed Fresh
                                Strawberries...
                            </p>

                            <button className="arrow-btn">
                                <FaArrowRight />
                            </button>

                        </div>
                    </Col>

                    {/* CARD 3 */}
                    <Col lg={3} md={6} sm={12}>
                        <div className="category-card orange top-card">

                            <div className="category-image">
                                <img
                                    src="https://wpbingo-jumys.myshopify.com/cdn/shop/files/banner-3.jpg?v=1714615850"
                                    alt=""
                                />
                            </div>

                            <h2>Orange</h2>

                            <p>
                                The Ice Cream Has The Sweet Taste Of
                                Honey And Orange...
                            </p>

                            <button className="arrow-btn">
                                <FaArrowRight />
                            </button>

                        </div>
                    </Col>

                    {/* CARD 4 */}
                    <Col lg={3} md={6} sm={12}>
                        <div className="category-card chocolate bottom-card">

                            <div className="category-image">
                                <img
                                    src="https://wpbingo-jumys.myshopify.com/cdn/shop/files/banner-4.jpg?v=1714616029"
                                    alt=""
                                />
                            </div>

                            <h2>Chocolate</h2>

                            <p>
                                Each Piece Of Melted Chocolate Blends
                                With Fresh Milk...
                            </p>

                            <button className="arrow-btn">
                                <FaArrowRight />
                            </button>

                        </div>
                    </Col>

                </Row>

            </Container>

        </section>
    );
};

export default Category;