import React, { useEffect, useState } from "react";
import Card from "../../Common/Cards/Card";
import "./CartSection.css";

const CartSection = () => {

    const [cart, setCart] = useState([]);
    const [orderSuccess, setOrderSuccess] = useState(false);

    useEffect(() => {

        const updateCart = () => {
            const data =
                JSON.parse(localStorage.getItem("cart")) || [];

            setCart(data);
        };

        // First Load
        updateCart();

        // Event Listener
        window.addEventListener(
            "cartUpdated",
            updateCart
        );

        return () =>
            window.removeEventListener(
                "cartUpdated",
                updateCart
            );

    }, []);

    const removeFromCart = (id) => {

        const updatedCart =
            cart.filter(item => item.id !== id);

        setCart(updatedCart);

        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        );

        window.dispatchEvent(
            new Event("cartUpdated")
        );
    };

    const totalPrice = cart.reduce(
        (total, item) =>
            total + (item.price * (item.qty || 1)),
        0
    );

    const shipping =
        totalPrice > 50 ? 0 : 5;

    const tax =
        Number((totalPrice * 0.18).toFixed(2));

    const grandTotal =
        totalPrice + shipping + tax;

    const handleCheckout = () => {

        if (cart.length === 0) return;

        setOrderSuccess(true);

        localStorage.removeItem("cart");

        setCart([]);

        window.dispatchEvent(
            new Event("cartUpdated")
        );
    };

    return (
        <section className="cart-section">

            <div className="container-fulid">

                <h1 className="cart-title">
                    Shopping Cart
                </h1>

                <p className="cart-breadcrumb">
                    Home / <span>Cart</span>
                </p>

                {
                    cart.length > 0 ? (

                        <div className="cart-layout">

                            {/* Products */}

                            <div className="cart-products">

                                <div className="row">

                                    {cart.map((item) => (

                                        <div
                                            className="col-lg-4 col-md-6 mb-4"
                                            key={item.id}
                                        >
                                            <Card
                                                item={item}
                                                isCart={true}
                                                onRemove={removeFromCart}
                                            />
                                        </div>

                                    ))}

                                </div>

                            </div>

                            {/* Order Summary */}

                            <div className="order-summary">

                                <h3>
                                    Order Summary
                                </h3>

                                <div className="summary-row">
                                    <span>Items</span>
                                    <span>{cart.length}</span>
                                </div>

                                <div className="summary-row">
                                    <span>Subtotal</span>
                                    <span>${totalPrice}</span>
                                </div>

                                <div className="summary-row">
                                    <span>Shipping</span>

                                    <span>
                                        {
                                            shipping === 0
                                                ? "Free"
                                                : `$${shipping}`
                                        }
                                    </span>
                                </div>

                                <div className="summary-row">
                                    <span>Tax (18%)</span>
                                    <span>${tax}</span>
                                </div>

                                <hr />

                                <div className="summary-total">
                                    <span>Total</span>
                                    <span>
                                        ${grandTotal.toFixed(2)}
                                    </span>
                                </div>

                                <button
                                    className="checkout-btn"
                                    onClick={handleCheckout}
                                >
                                    Proceed To Checkout
                                </button>

                            </div>

                        </div>

                    ) : (

                        <>
                            {
                                orderSuccess && (
                                    <div className="success-message">
                                        🎉 Order Placed Successfully!
                                    </div>
                                )
                            }

                            <div className="empty-cart">

                                <i className="fa-solid fa-cart-shopping"></i>

                                <h3>
                                    Your Cart Is Empty
                                </h3>

                                <p>
                                    Looks like you haven't added
                                    anything to your cart yet.
                                </p>

                            </div>
                        </>

                    )
                }

            </div>

        </section>
    );
};

export default CartSection;