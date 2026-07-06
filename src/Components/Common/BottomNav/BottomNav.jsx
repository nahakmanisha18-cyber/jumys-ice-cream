import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BottomNav.css';

const BottomNav = () => {

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
        <div className="bottom-nav">

            <Link to="/" className="nav-item">
                <i class="bi bi-house-door"></i>
                <span>HOME</span>
            </Link>

            <Link to="/shop" className="nav-item">
                <i class="bi bi-grid"></i>
                <span>SHOP</span>
            </Link>

            <Link to="/account" className="nav-item">
                <i class="bi bi-person"></i>
                <span>ACCOUNT</span>
            </Link>

            <Link to="/wishlist" className="nav-item wishlist-nav">
                <i class="bi bi-heart"></i>

                <span className="wishlist-count">
                    {wishlistCount}
                </span>

                <span>WISHLIST</span>
            </Link>

            <Link to="/cart" className="nav-item wishlist-nav">

                <i class="bi bi-cart3"></i>

                <span className="wishlist-count">
                    {cartCount}
                </span>

                <span>CART</span>

            </Link>

        </div>
    );
};

export default BottomNav;