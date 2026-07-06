import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ShopSection.css";
import Card from "../../Common/Cards/Card";
import { products } from "../../Common/Cards/Card";


const ShopSection = () => {

    const [category, setCategory] = useState("All");
    const [price, setPrice] = useState(50);
    const [search, setSearch] = useState("");

    const filteredProducts = products.filter((item) => {

        const matchCategory =
            category === "All" || item.category === category;

        const matchPrice = item.price <= price;

        const matchSearch = item.name
            .toLowerCase()
            .includes(search.toLowerCase());

        return matchCategory && matchPrice && matchSearch;
    });

    return (
        <section className="shop-section">
            <Container fluid>
                <Row>
                    <Col lg={3}>
                        <div className="sidebar">
                            <h3 className="filter-title">Filters</h3>
                            <div className="filter-box">
                                <h5>Search</h5>
                                <Form.Control type="text" placeholder="Search Product" onChange={(e) => setSearch(e.target.value)} />
                            </div>
                            <div className="filter-box">
                                <h5>Category</h5>
                                <Form.Check type="radio" label="All" name="category" onChange={() => setCategory("All")}/>
                                <Form.Check type="radio" label="Canned" name="category" onChange={() => setCategory("Canned")}/>
                                <Form.Check type="radio" label="Frozen" name="category" onChange={() => setCategory("Frozen")}/>
                            </div>
                            <div className="filter-box">
                                <h5>Price: ${price}</h5>
                                <Form.Range min={0} max={50} value={price} onChange={(e) => setPrice(e.target.value)}/>
                            </div>
                        </div>
                    </Col>

                    
                    <Col lg={9}>
                        <Row>
                            {filteredProducts.map((item) => (
                                <Col lg={4} md={6} sm={12} className="mb-4" key={item.id}>
                                    <Card item={item} />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ShopSection;