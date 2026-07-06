import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Editorial.css';

const EditorialSection = () => {
    return (
        <section className="editorial-section">
            <Container>
                <Row className="align-items-center">
                    {/* Left Column */}
                    <Col lg={6} className="editorial-col">
                        <h2 className="editorial-title">Best Ice Cream Shops</h2>
                        <p className="editorial-desc">
                            It’s Quite Possible That We Are Living In The Golden Age Of Ice Cream Innovation.
                            Old-School Creameries Are Churning Out Vanilla Bean Masterpieces Honed Over
                            Generations While New Shops Are Tossing The Term “Chef”
                        </p>
                        <a href="#" className="read-more">Read More</a>
                    </Col>

                    {/* Right Column */}
                    <Col lg={6} className="editorial-col">
                        <h2 className="editorial-title">Wave Artisan Shops</h2>
                        <p className="editorial-desc">
                            These Ice Cream Shops Represent Everything That Is Well And Good: New-Wave
                            Artisan Shops Challenging The Very Notion Of What Should Be Placed On A Cone
                            (Or Stick, Or Between Cookies), Old-School Parlors Learning...
                        </p>
                        <a href="#" className="read-more">Read More</a>
                        {/* Aap yahan chota sa cartoon icon img tag se add kar sakti hain */}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default EditorialSection;