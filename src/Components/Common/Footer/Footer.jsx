import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            {/* Newsletter Section */}
            <div className="newsletter-section text-center">
                <Container>
                    <h2 className="news-title">Sign Up To Our Newsletter!</h2>
                    <p className="news-subtitle">Be The First To Know About New Flavors And More</p>

                    <div className="newsletter-form-container">
                        <input
                            type="email"
                            placeholder="Your Email..."
                            className="email-input"
                        />
                        <Button className="signup-btn">SignUp</Button>
                    </div>
                </Container>
            </div>

            {/* Main Footer Bottom */}
            <div className="main-footer">
                <Container>
                    <Row className="align-items-center">
                        <Col md={4} className="text-center text-md-start">
                            <img
                                src="https://wpbingo-jumys.myshopify.com/cdn/shop/files/logo-white.png?v=1714968080"
                                alt="Logo"
                                height="55"
                            />
                            
                        </Col>
                        <Col md={4} className="text-center">
                            <p className="copyright">© 2024 – JUMYS. ALL RIGHTS RESERVED.</p>
                        </Col>
                        <Col md={4} className="text-center text-md-end mt-3 mt-md-0">
                            <div className="social-links">
                                <FaFacebookF /> <FaTwitter /> <FaWhatsapp /> <FaTiktok />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            
        </footer>
    );
};

export default Footer;