import React, { useState, useEffect } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
    const slides = [
        {
            bg: "url('https://wpbingo-jumys.myshopify.com/cdn/shop/files/bg-slider-2_3fa8b71c-4ff1-4e13-a827-3e2230c6e0d9.jpg?v=1719905136')",
            title: "Frosty Delights:",
            title2: "Treat Yourself to",
            title3: "Creamy"
        },
        {
            bg: "url('https://wpbingo-jumys.myshopify.com/cdn/shop/files/bg-slider-1.jpg?v=1719904397')",
            title: "Delicious Bites:",
            title2: "Best Ice Cream",
            title3: "Ever Created"
        },
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="heroSection" style={{ backgroundImage: slides[index].bg }}>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} className="text-center text-lg-start">
                        <div key={index} className="animateSlide">
                            <h5 className="subHeading">ICE CREAM HEAVEN</h5>
                            <h1 className="mainTitle">
                                {slides[index].title}<br />
                                {slides[index].title2}
                            </h1>
                            <div className="buttonGroup justify-content-center justify-content-lg-start">
                                <Button className="btnRed">Shop Now</Button>
                                <Button className="btnBlack">See More</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;