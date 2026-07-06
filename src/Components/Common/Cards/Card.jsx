import { Container, Row, Col, Form } from "react-bootstrap";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Card.css";
import { useState } from "react";
import QuickViewModal from "./QuickViewModal.jsx";

export const products = [

    {
        id: 1,
        name: "Wedding Cake",
        price: 12.00,
        category: "Canned",
        img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-13_1080x1080.webp",
        smallimg1: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-13-1_1080x1080.webp?v=1719561711",
        smallimg2: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-13-2_1080x1080.webp?v=1719561711",
        smallimg3: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-13-3_1080x1080.webp?v=1719561711"
    },

    {
        id: 2,
        name: "Banana Cream Pudding",
        price: 15.60,
        category: "Frozen",
        img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-21_1080x1080.webp",
        smallimg1: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-21-1_1080x1080.webp?v=1719558066",
        smallimg2: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-21-2_1080x1080.webp?v=1719558066",
        smallimg3: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-21-3_1080x1080.webp?v=1719558066"
    },

    {
        id: 3,
        name: "Cookies In Cream",
        price: 10.40,
        category: "Canned",
        img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-10_1080x1080.webp",
        smallimg1: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-10-1_1080x1080.webp?v=1719558914",
        smallimg2: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-10-2_1080x1080.webp?v=1719558913",
        smallimg3: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-10-3_1080x1080.webp?v=1719558914"
    },

    {
        id: 4,
        name: "Golden Nectar",
        price: 20.30,
        category: "Frozen",
        img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-12_1080x1080.webp",
        smallimg1: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-12-1_1080x1080.webp?v=1719559530",
        smallimg2: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-12-2_1080x1080.webp?v=1719559530",
        smallimg3: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-12-3_1080x1080.webp?v=1719559531"
    },

    {
        id: 5,
        name: "Salty Caramel",
        price: 18.02,
        category: "Canned",
        img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-9_1080x1080.webp?v=1719560916",
        smallimg1: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-9-1_1080x1080.webp?v=1719560982",
        smallimg2: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-9-2_1080x1080.webp?v=1719560982",
        smallimg3: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-9-3_1080x1080.webp?v=1719560982"
    },

    {
        id: 6,
        name: "Darkest Chocolate",
        price: 22.01,
        category: "Frozen",
        img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-14_1080x1080.webp",
        smallimg1: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-14-2_1080x1080.webp?v=1719559080",
        smallimg2: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-14-1_1080x1080.jpg?v=1719559080",
        smallimg3: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-14_1080x1080.webp?v=1719559069"

    },
    {
        id: 7,
        name: "Sunshine",
        price: 10.05,
        category: "Canned",
        img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-17_1080x1080.webp?v=1719561526",
        smallimg1: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-17-1_1080x1080.webp?v=1719561541",
        smallimg2: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-17-2_1080x1080.webp?v=1719561541",
        smallimg3: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-17-3_1080x1080.webp?v=1719561540"

    },
    {
        id: 8,
        name: "Sparkling Cherry Pie",
        price: 35,
        category: "Frozen",
        img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-4_1080x1080.webp?v=1719561378",
        smallimg1: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-4-1_1080x1080.webp?v=1719561387",
        smallimg2: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-4-2_1080x1080.webp?v=1719561386",
        smallimg3: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-4-3_1080x1080.webp?v=1719561386"

    },
    {
        id: 9,
        name: "Chocolate Mud",
        price: 45,
        category: "Canned",
        img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-6_1080x1080.webp?v=1719558627",
        smallimg1: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-6-1_1080x1080.webp?v=1719558638",
        smallimg2: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-6-2_1080x1080.webp?v=1719558637",
        smallimg3: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-6-3_1080x1080.webp?v=1719558638"

    },
    {
        id: 10,
        name: "Snow Cone Sorbet",
        price: 30,
        category: "Frozen",
        img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-3_1080x1080.webp?v=1719561030",
        smallimg1: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-3-1_1080x1080.jpg?v=1719561040",
        smallimg2: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-3-2_1080x1080.webp?v=1719561040",
        smallimg3: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-3-3_1080x1080.webp?v=1719561040"

    },
    {
        id: 11,
        name: "DPowdered Jelly Donut",
        price: 20,
        category: "Canned",
        img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-23_1080x1080.webp?v=1719560613",
        smallimg1: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-23-1_1080x1080.webp?v=1719560628",
        smallimg2: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-23-2_1080x1080.webp?v=1719560628",
        smallimg3: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-23-3_1080x1080.webp?v=1719560628"

    },
    {
        id: 12,
        name: "Hot Toddy Sorbet",
        price: 43,
        category: "Frozen",
        img: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-18_1080x1080.webp?v=1719559717",
        smallimg1: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-18-1_1080x1080.webp?v=1719559728",
        smallimg2: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-18-2_1080x1080.webp?v=1719559728",
        smallimg3: "https://wpbingo-jumys.myshopify.com/cdn/shop/files/product-18-3_1080x1080.webp?v=1719559728"

    },
];

const Card = ({
    item,
    isWishlist = false,
    isCart = false,
    onRemove
}) => {

    const [showModal, setShowModal] = useState(false);
    const [qty, setQty] = useState(item.qty || 1);

    const addToWishlist = () => {

        const wishlist =
            JSON.parse(localStorage.getItem("wishlist")) || [];

        const exists = wishlist.find(
            product => product.id === item.id
        );

        if (!exists) {

            wishlist.push(item);

            localStorage.setItem(
                "wishlist",
                JSON.stringify(wishlist)
            );

            window.dispatchEvent(
                new Event("wishlistUpdated")
            );
        }
    };

    const addToCart = () => {
        const cart =
            JSON.parse(localStorage.getItem("cart")) || [];

        const exists = cart.find(
            product => product.id === item.id
        );

        if (exists) {

            exists.qty = (exists.qty || 1) + qty;

        } else {

            cart.push({
                ...item,
                qty: qty
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

    const updateQty = (newQty) => {
        setQty(newQty);

        if (isCart) {
            const cart =
                JSON.parse(localStorage.getItem("cart")) || [];

            const updatedCart = cart.map(product =>
                product.id === item.id
                    ? { ...product, qty: newQty }
                    : product
            );

            localStorage.setItem(
                "cart",
                JSON.stringify(updatedCart)
            );

            window.dispatchEvent(
                new Event("cartUpdated")
            );
        }
    };

    return (
        <>

            <div className="product-card">
                <div className="img-wrapper">
                    <Link to={`/product/${item.id}`}>
                        <img src={item.img} alt={item.name} className="img-fluid" />
                    </Link>

                    <div className="hover-icons">

                        {
                            isCart ? (
                                <span onClick={() => onRemove(item.id)}>
                                    <i class="bi bi-trash3"></i>
                                </span>
                            ) : (
                                <span onClick={addToCart} className="shopingcart">
                                        <i class="bi bi-cart3"></i>
                                </span>
                            )
                        }

                        {
                            isWishlist ? (
                                <span onClick={() => onRemove(item.id)}>
                                    <i class="bi bi-trash3"></i>
                                </span>
                            ) : (
                                <span onClick={addToWishlist}>
                                        <i class="bi bi-heart"></i>
                                </span>
                            )
                        }

                        <span onClick={() => setShowModal(true)}>
                            <i
                                class="bi bi-search"
                                
                            ></i>
                        </span>

                    </div>

                </div>
                <div className="product-content">
                    <p className="category-text">{item.category}</p>
                    <h4>{item.name}</h4>
                    <h5>
                        ${item.price}
                    </h5>

                    <div className="card-footer-action">
                        <div className="qty-selector">
                            <button
                                onClick={() =>
                                    updateQty(Math.max(1, qty - 1))
                                }
                            >
                                -
                            </button>

                            <span>{qty}</span>

                            <button
                                onClick={() =>
                                    updateQty(qty + 1)
                                }
                            >
                                +
                            </button>
                        </div>
                        <button className="add-to-cart-btn" onClick={addToCart}>
                            <i class="bi bi-cart3"></i>
                        </button>
                    </div>
                </div>
            </div>
            <QuickViewModal
                show={showModal}
                onHide={() => setShowModal(false)}
                product={item}
            />
        </>
    );
};

export default Card;