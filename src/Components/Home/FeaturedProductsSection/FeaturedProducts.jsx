import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaShoppingCart, FaHeart, FaSearch } from 'react-icons/fa'; // Icons import karein
import { Link } from 'react-router-dom'; // Navigation ke liye
import { products } from '../../Common/Cards/Card';
import './FeaturedProducts.css';
import Card from '../../Common/Cards/Card';

const FeaturedProducts = () => {
    const [index, setIndex] = useState(0);
    const productsPerPage = 4;
   
    const displayedProducts = products.slice(index, index + productsPerPage);

    return (
        <section className="featured-section">
            <Container-fulid>
                <h2 className="text-center mb-5 ">Featured Products</h2>
                   
                    <Row>
                        {displayedProducts.map((item) => (
                            <Col lg={3} md={4} sm={6} key={item.id} className="">
                                <Card item={item} />
                            </Col>
                        ))}
                    </Row>

            </Container-fulid>
        </section>
        
    );
};

export default FeaturedProducts;