import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './BlogSection.css';

const BlogSection = () => {
    const blogs = [
        { date: "BUSINESS TIPS • Jun 30, 2024", title: "The Best Ice Cream You'll Never Eat", img: "https://wpbingo-jumys.myshopify.com/cdn/shop/articles/blog-7_720x.jpg?v=1719804468" },
        { date: "BUSINESS TIPS • Jun 30, 2024", title: "Fancy Figs? Make This Ice Cream", img: "https://wpbingo-jumys.myshopify.com/cdn/shop/articles/blog-5_720x.jpg?v=1719804408" },
        { date: "BUSINESS TIPS • Jun 30, 2024", title: "The Art Of Crafting Gourmet Ice Cream", img: "https://wpbingo-jumys.myshopify.com/cdn/shop/articles/blog-2_720x.jpg?v=1719804262" }
    ];

    return (
        <section className="blog-section">
            <Containe-fulid>
                <div className="blog-header text-center">
                    <p className="subtitle">Our News</p>
                    <h2 className="title">Tastiest Updates</h2>
                </div>

                {/* Bootstrap Responsive Row */}
                <Row className='mx-3'>
                    {blogs.map((blog, index) => (
                        <Col key={index} lg={4} md={6} xs={12} className="mb-4">
                            <div className="blog-card">
                                <img src={blog.img} alt={blog.title} className="blog-img img-fluid" />
                                <p className="blog-date">{blog.date}</p>
                                <h3 className="blog-title">{blog.title}</h3>
                            </div>
                        </Col>
                    ))}
                </Row>

                <div className="text-center mt-4">
                    <Button className="read-more-btn">Read More</Button>
                </div>
            </Containe-fulid>
        </section>
    );
};

export default BlogSection;