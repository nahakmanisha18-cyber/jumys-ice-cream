import React from "react";
import {
    Container,
    Row,
    Col,
    Form,
    Button,
} from "react-bootstrap";
import { Link } from "react-router-dom"; // Import karein
import { FaSearch } from "react-icons/fa";

import "./BlogSection.css";

export const blogs = [
    {
        id: 1,
        title: "The Best Ice Cream You’ll Never Eat",
        category: "Business Tips",
        date: "Jun 30, 2024",
        desc: "sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero...",
        img: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?q=80&w=1200",
    },

    {
        id: 2,
        title: "Fancy Figs? Make this Ice Cream",
        category: "Business Tips",
        date: "Jul 02, 2024",
        desc: "sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero...",
        img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=1200",
    },

    {
        id: 3,
        title: "The Art Of Crafting Gourmet Ice Cream",
        category: "Business Tips",
        date: "Jun 30, 2024",
        desc: "sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero...",
        img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1200",
    },
];

const BlogSection = () => {
    return (
        <section className="blog-section">

            <Container fluid>

                {/* TITLE */}

                <div className="blog-heading">

                    <h1>Blogs</h1>

                    <div className="blog-menu">

                        <span className="active">Business Tips</span>
                        <span>Dessert Recipes</span>
                        <span>Flavor Trends</span>
                        <span>Healthy Options</span>
                        <span>Ice Cream</span>
                        <span>Uncategorized</span>

                    </div>

                </div>

                <Row className="mt-5">

                    {/* LEFT SIDEBAR */}

                    <Col lg={3}>

                        <div className="blog-sidebar">

                            {/* SEARCH */}

                            <div className="sidebar-box">

                                <h3>Search</h3>

                                <div className="search-box">

                                    <Form.Control
                                        type="text"
                                        placeholder="Search blog..."
                                    />

                                    <FaSearch />

                                </div>

                            </div>

                            {/* CATEGORIES */}

                            <div className="sidebar-box">

                                <h3>Categories</h3>

                                <ul>

                                    <li className="active-cat">
                                        Business Tips
                                    </li>

                                    <li>Dessert Recipes</li>

                                    <li>Flavor Trends</li>

                                    <li>Healthy Options</li>

                                    <li>Ice Cream</li>

                                    <li>Uncategorized</li>

                                </ul>

                            </div>

                            {/* RELATED POSTS */}

                            <div className="sidebar-box">

                                <h3>Related Posts</h3>

                                {blogs.map((item) => (

                                    <div className="related-post" key={item.id}>

                                        {/* IMAGE */}

                                        <div className="related-img">

                                            <img
                                                src={item.img}
                                                alt={item.title}
                                            />

                                        </div>

                                        {/* CONTENT */}

                                        <div className="related-content">

                                            <p className="related-date">
                                                {item.date}
                                            </p>

                                            <h5>
                                                {item.title}
                                            </h5>

                                            <span>
                                                0 comments
                                            </span>

                                        </div>

                                    </div>

                                ))}

                            </div>

                            {/* TAGS */}

                            <div className="sidebar-box">

                                <h3>Tags</h3>

                                <div className="tags-wrapper">

                                    <span>Beauty</span>
                                    <span>Electric</span>
                                    <span>Fashion</span>
                                    <span>Hot</span>
                                    <span>Jewelry</span>
                                    <span>Organic</span>
                                    <span>Simple</span>
                                    <span>Sport</span>

                                </div>

                            </div>

                        </div>

                    </Col>

                    {/* BLOG CARDS */}

                    <Col lg={9}>

                        <Row>

                            {blogs.map((item) => (

                                <Col lg={4} md={6} key={item.id}>

                                    <div className="blog-card">

                                        {/* IMAGE */}

                                        <div className="blogSection-img">

                                            <Link to={`/blog/${item.id}`}>
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                            />
                                            </Link>

                                            <span className="blog-tag">
                                                {item.category}
                                            </span>

                                        </div>

                                        {/* CONTENT */}

                                        <div className="blog-content">

                                            <p className="blog-date">
                                                {item.date}
                                            </p>

                                            <h2>
                                                {item.title}
                                            </h2>

                                            <p className="blog-desc">
                                                {item.desc}
                                            </p>

                                            <Link to={`/blog/${item.id}`}>
                                                <Button className="read-btn">Read More</Button>
                                            </Link>

                                        </div>

                                    </div>

                                </Col>

                            ))}

                        </Row>

                    </Col>

                </Row>

            </Container>

        </section>
    );
};

export default BlogSection 