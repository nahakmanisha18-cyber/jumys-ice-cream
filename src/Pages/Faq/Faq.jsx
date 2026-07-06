import { Accordion, Container } from 'react-bootstrap';
import './Faq.css';

const Faq = () => {
    return (
        <>
            <section className="faq-section">
                <Container>
                    <h2 className="faq-title">Frequently Asked Questions.</h2>
                    <Accordion className="accordion-custom">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>When do I receive my order?</Accordion.Header>
                            <Accordion.Body>
                                When placing the order, a day of shipment is indicated. After the order has been
                                placed, the same delivery time will also be stated on the order confirmation.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>I now see the longer delivery time of (a part of) my order. How can I cancel it?</Accordion.Header>
                            <Accordion.Body>
                                It is never possible that during the order, the shipping day on the website
                                is different than on the order confirmation.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>When will I receive the invoice for my order? </Accordion.Header>
                            <Accordion.Body>
                                When placing the order, a day of shipment is indicated. After the order has been placed, the same delivery time will also be stated on the order confirmation. It is therefore never possible that during the order, the shipping day on the website, is different than on the order confirmation.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>How long will my order take to be delivered?</Accordion.Header>
                            <Accordion.Body>
                                When placing the order, a day of shipment is indicated. After the order has been placed, the same delivery time will also be stated on the order confirmation. It is therefore never possible that during the order, the shipping day on the website, is different than on the order confirmation.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Do I need to create an account to place an order?</Accordion.Header>
                            <Accordion.Body>
                                When placing the order, a day of shipment is indicated. After the order has been placed, the same delivery time will also be stated on the order confirmation. It is therefore never possible that during the order, the shipping day on the website, is different than on the order confirmation.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </section>
            
        </>
    );
};

export default Faq;