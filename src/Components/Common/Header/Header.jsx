import {
    Navbar,
    Nav,
    Container,
    NavDropdown,
    Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchModal from "../Search/SearchModal";
import "./Header.css";
import { useEffect, useState } from "react";

const Header = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [wishlistCount, setWishlistCount] = useState(0);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {

        const updateWishlistCount = () => {
            const wishlist =
                JSON.parse(localStorage.getItem("wishlist")) || [];

            setWishlistCount(wishlist.length);
        };

        updateWishlistCount();

        window.addEventListener(
            "wishlistUpdated",
            updateWishlistCount
        );

        return () => {
            window.removeEventListener(
                "wishlistUpdated",
                updateWishlistCount
            );
        };

    }, []);

    useEffect(() => {

        const updateCartCount = () => {

            const cart =
                JSON.parse(localStorage.getItem("cart")) || [];

            setCartCount(cart.length);
        };

        updateCartCount();

        window.addEventListener(
            "cartUpdated",
            updateCartCount
        );

        return () => {

            window.removeEventListener(
                "cartUpdated",
                updateCartCount
            );
        };

    }, []);

    return (
        <>
            <Navbar expand="lg" className="navbar" sticky="top">
                <Container>

                    {/* LOGO */}
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src="https://wpbingo-jumys.myshopify.com/cdn/shop/files/logo.png?crop=center&height=199&v=1714968571&width=434"
                            alt="Logo"
                            height="55"
                        />
                    </Navbar.Brand>

                    {/* MOBILE RIGHT SIDE */}
                    <div className="mobile-icons d-lg-none">

                        <i
                            className="fa-solid fa-magnifying-glass"
                            onClick={() => setShowSearch(true)}
                        ></i>

                        <Navbar.Toggle aria-controls="offcanvasNavbar" />

                    </div>

                    {/* OFFCANVAS */}
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        placement="end"
                        className="custom-offcanvas"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>
                                ICE CREAM
                            </Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body>

                            {/* MENU */}
                            <Nav className="mx-auto align-items-lg-center">

                                <Nav.Link as={Link} to="/">
                                    HOME
                                </Nav.Link>

                                <Nav.Link as={Link} to="/shop">
                                    SHOP
                                </Nav.Link>

                                <Nav.Link as={Link} to="/product/1">
                                    PRODUCT
                                </Nav.Link>

                                <Nav.Link as={Link} to="/blog">
                                    BLOG
                                </Nav.Link>

                                <NavDropdown
                                    title="FEATURED"
                                    id="basic-nav-dropdown"
                                >
                                    <NavDropdown.Item
                                        as={Link}
                                        to="/about"
                                    >
                                        About Us
                                    </NavDropdown.Item>

                                    <NavDropdown.Item
                                        as={Link}
                                        to="/faq"
                                    >
                                        FAQ
                                    </NavDropdown.Item>

                                    <NavDropdown.Item
                                        as={Link}
                                        to="/404"
                                    >
                                        404 Page
                                    </NavDropdown.Item>
                                </NavDropdown>

                            </Nav>

                            {/* DESKTOP ICONS */}
                            <div className="iconNav d-none d-lg-flex">
                                <i
                                    class="bi bi-search"
                                    onClick={() => setShowSearch(true)}
                                ></i>

                                <i
                                    class="bi bi-person"
                                    onClick={() => setShowLogin(true)}
                                ></i>

                                <Link to="/wishlist" className="cartLink">
                                    <i class="bi bi-heart"></i>

                                    <span>{wishlistCount}</span>
                                </Link>

                                <Link to="/cart" className="cartLink">

                                    <i class="bi bi-cart3"></i>

                                    <span>{cartCount}</span>

                                </Link>

                            </div>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                </Container>
            </Navbar>
            <Offcanvas
                show={showLogin}
                onHide={() => setShowLogin(false)}
                placement="end"
                className="login-sidebar"
            >
                <Offcanvas.Header closeButton />

                <Offcanvas.Body>

                    <h4 className="mb-4">SIGN IN</h4>

                    <form>

                        <div className="mb-3">
                            <input
                                type="email"
                                placeholder="Email*"
                                className="form-control login-input"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Password*"
                                className="form-control login-input"
                            />
                        </div>

                        <a href="/" className="forgot-link">
                            Lost your password?
                        </a>

                        <div className="btn-group-login">

                            <button
                                type="submit"
                                className="signin-btn"
                            >
                                Sign In
                            </button>

                            <button
                                type="button"
                                className="create-btn"
                            >
                                Create Your Account
                            </button>

                        </div>

                    </form>

                </Offcanvas.Body>
            </Offcanvas>
            <SearchModal
                show={showSearch}
                onClose={() => setShowSearch(false)}
            />
        </>
    );
};

export default Header;