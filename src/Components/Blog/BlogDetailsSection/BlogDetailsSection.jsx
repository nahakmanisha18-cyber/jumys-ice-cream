import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaCalendarAlt, FaUser, FaClock, FaShareAlt } from "react-icons/fa";
import { blogs } from "../BlogCardSection/BlogSection";
import "./BlogdetailsSection.css"

const BlogDetailsSection = () => {

    const { id } = useParams();

    const blog = blogs.find(
        b => b.id === parseInt(id)
    );

    if (!blog) return <Navigate to="/blogs" />;

    return (
        <section className="blog-details">

            <Container>

                {/* Hero Image */}

                <div className="blog-hero">

                    <img
                        src={blog.img}
                        alt={blog.title}
                    />

                    <span className="blog-category">
                        {blog.category}
                    </span>

                </div>

                <Row className="justify-content-center">

                    <Col lg={9}>

                        <div className="blog-content-wrapper">

                            <div className="blog-meta">

                                <span>
                                    <FaCalendarAlt />
                                    {blog.date}
                                </span>

                                <span>
                                    <FaUser />
                                    {blog.author}
                                </span>

                                <span>
                                    <FaClock />
                                    {blog.readTime}
                                </span>

                            </div>

                            <h1>
                                {blog.title}
                            </h1>

                            <p className="blog-intro">
                                {blog.desc}
                            </p>

                            <div className="blog-full-content">

                                <p>
                                    {blog.content}
                                </p>

                                <blockquote>
                                    "Great ice cream isn't just
                                    about ingredients. It's about
                                    creating memorable moments."
                                </blockquote>

                                <p>
                                    Understanding customer
                                    preferences and seasonal
                                    trends can significantly
                                    improve sales and customer
                                    satisfaction.
                                </p>

                            </div>

                            {/* Tags */}

                            <div className="blog-tags">

                                {
                                    blog.tags?.map(tag => (
                                        <span key={tag}>
                                            #{tag}
                                        </span>
                                    ))
                                }

                            </div>

                            {/* Share */}

                            <div className="share-section">

                                <h5>
                                    <FaShareAlt />
                                    Share This Article
                                </h5>

                            </div>

                        </div>

                    </Col>

                </Row>

            </Container>

        </section>
    );
};

export default BlogDetailsSection;