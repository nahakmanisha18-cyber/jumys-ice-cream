import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Promo.css';

const PromoSection = () => {
    const categories = [
        { title: "hello SUMMER!", img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/banner-1_165a7093-b857-41ec-8617-629d4cbbd871.jpg?v=1719929469" },
        { title: "Creamy enjoy", img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/banner-2_e4c406a0-0e93-42ec-8c56-3f013c3ce875.jpg?v=1719929685"},
        { title: "Creamy enjoy", img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/banner-3_0b74f0a0-fd76-43cd-8eff-00f01a954dbc.jpg?v=1719929703"}
    ];

    return (
        <section className="category-section">
            <Container fluid className="p-0">
                <Row className="g-0">
                    {categories.map((cat, index) => (
                        <Col md={4} key={index} className="cat-card">
                            <div className="cat-image" style={{ backgroundImage: `url(${cat.img})` }}>
                                {cat.badge && <div className="badge">{cat.badge}</div>}
                                <div className="overlay">
                                    <h3>{cat.title}</h3>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default PromoSection;