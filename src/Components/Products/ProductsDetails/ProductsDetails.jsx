import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaHeart, FaShareAlt, FaQuestionCircle, FaExchangeAlt, FaEye, FaFire, FaCheckCircle, FaMinus, FaPlus, FaTruck } from 'react-icons/fa';
import { products } from "../../Common/Cards/Card";
import { useNavigate } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find(
        (p) => p.id === parseInt(id)
    );

    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState(product?.img);

    if (!product) return <Navigate to="/" />;

    const handleBuyNow = () => {

        addToCart();

        navigate("/cart");
    };
    
    const addToCart = () => {

        const cart =
            JSON.parse(localStorage.getItem("cart")) || [];

        const existingProduct = cart.find(
            item => item.id === product.id
        );

        if (existingProduct) {

            existingProduct.qty =
                (existingProduct.qty || 1) + quantity;

        } else {

            cart.push({
                ...product,
                qty: quantity
            });
        }

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        window.dispatchEvent(
            new Event("cartUpdated")
        );
    };
    const addToWishlist = () => {

        const wishlist =
            JSON.parse(localStorage.getItem("wishlist")) || [];

        const exists = wishlist.find(
            item => item.id === product.id
        );

        if (!exists) {

            wishlist.push(product);

            localStorage.setItem(
                "wishlist",
                JSON.stringify(wishlist)
            );

            window.dispatchEvent(
                new Event("wishlistUpdated")
            );
        }
    };

    return (

        <section className="product-details-page">

            <div className="container-fluid">

                <div className="row product-row">

                    <div className="col-lg-7">

                        <div className="sticky-gallery">

                            <div className="product-gallery">

                                <div className="thumbnail-wrapperz">
                                    <img
                                        src={product.img}
                                        alt=""
                                        onClick={() => setMainImage(product.img)}
                                    />

                                    <img
                                        src={product.smallimg1}
                                        alt=""
                                        onClick={() => setMainImage(product.smallimg1)}
                                    />

                                    <img
                                        src={product.smallimg2}
                                        alt=""
                                        onClick={() => setMainImage(product.smallimg2)}
                                    />

                                    <img
                                        src={product.smallimg3}
                                        alt=""
                                        onClick={() => setMainImage(product.smallimg3)}
                                    />
                                </div>

                                <div className="main-image">
                                    <span className="discount-badge">
                                        -20%
                                    </span>

                                    <img
                                        src={mainImage}
                                        alt={product.name}
                                        className="img-fluid"
                                    />
                                </div>

                            </div>

                        </div>

                    </div>


                    <div className="col-lg-5">

                        <div className="product-info">

                            {/* TITLE */}

                            <h1>
                                {product.name}
                            </h1>

                            {/* PRICE */}

                            <div className="price-box">

                                <span className="old-price">
                                    $15.00
                                </span>

                                <span className="new-price">
                                    ${product.price}.00
                                </span>

                            </div>

                            {/* STOCK INFO */}

                            <div className="stock-info">

                                <p>
                                    <FaEye />
                                    30 people are viewing this right now
                                </p>

                                <p className="sold">
                                    <FaFire />
                                    36 sold in last 7 hours
                                </p>

                                <p className="stock">
                                    <FaCheckCircle />
                                    In stock
                                </p>

                            </div>

                            {/* QUANTITY */}

                            <div className="product-cart-section">

                                <div className="qty-box">

                                    <button
                                        onClick={() =>
                                            setQuantity(
                                                quantity > 1
                                                    ? quantity - 1
                                                    : 1
                                            )
                                        }
                                    >
                                        <FaMinus />
                                    </button>

                                    <span>
                                        {quantity}
                                    </span>

                                    <button
                                        onClick={() =>
                                            setQuantity(quantity + 1)
                                        }
                                    >
                                        <FaPlus />
                                    </button>

                                </div>

                                {/* ADD TO CART */}

                                <Button
                                    className="cart-btn"
                                    onClick={addToCart}
                                >
                                    Add To Cart
                                </Button>

                                {/* WISHLIST */}

                                <button
                                    className="wishlist-btn"
                                    onClick={addToWishlist}
                                >
                                    <FaHeart />
                                </button>

                            </div>

                            {/* TERMS */}

                            <div className="terms-box">

                                <input type="checkbox" />

                                I agree with the{" "}

                                <a href="/">
                                    terms and conditions
                                </a>

                            </div>

                            {/* BUY NOW */}

                            <Button
                                className="buy-btn"
                                onClick={handleBuyNow}
                            >
                                Buy It Now
                            </Button>

                            {/* META LINKS */}

                            <div className="meta-links">

                                <span>
                                    <FaExchangeAlt />
                                    Compare
                                </span>

                                <span>
                                    <FaQuestionCircle />
                                    Question
                                </span>

                                <span>
                                    <FaShareAlt />
                                    Share
                                </span>

                            </div>

                            {/* DELIVERY */}

                            <div className="delivery-box">

                                <div className="delivery-icon">
                                    <FaTruck />
                                </div>

                                <div>

                                    <p>
                                        Order in the next{" "}
                                        <strong>
                                            7 hours 51 minutes
                                        </strong>{" "}
                                        to get it between{" "}

                                        <strong>
                                            Tuesday, Jun 2
                                        </strong>{" "}
                                        and{" "}

                                        <strong>
                                            Saturday, Jun 6
                                        </strong>
                                    </p>

                                </div>

                            </div>

                            {/* PICKUP */}

                            <div className="pickup-box">

                                <h5>
                                    ✔ Pickup available at Alaska
                                </h5>

                                <p>
                                    Usually ready in 24 hours
                                </p>

                                <a href="/">
                                    Check availability at other stores
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ProductDetails;  