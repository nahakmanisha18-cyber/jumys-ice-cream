import React, { useEffect, useState } from "react";
import Card from "../../Common/Cards/Card";
import "./WishlistSection.css";

const WishlistSection = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const data =
            JSON.parse(localStorage.getItem("wishlist")) || [];

        setWishlist(data);
    }, []);

    const removeItem = (id) => {

        const updated = wishlist.filter(
            item => item.id !== id
        );

        setWishlist(updated);

        localStorage.setItem(
            "wishlist",
            JSON.stringify(updated)
        );

        // Header ko update karne ke liye
        window.dispatchEvent(
            new Event("wishlistUpdated")
        );
    };
    return (
        <section className="wishlist-section">

            <div className="container-fulid">

                <h1 className="wishlist-title">
                    Wishlist
                </h1>

                <div className="wishlist-breadcrumb">
                    Home / <span>Wishlist</span>
                </div>

                {wishlist.length > 0 ? (

                    <div className="row wishlist-products">

                        {wishlist.map((item) => (
                            <div
                                className="col-lg-3 col-md-4 col-sm-6"
                                key={item.id}
                            >
                                <Card
                                    item={item}
                                    isWishlist={true}
                                    onRemove={removeItem}
                                />
                            </div>
                        ))}

                    </div>

                ) : (

                    <div className="empty-wishlist">
                        <h3>Your Wishlist Is Empty</h3>
                        <p>
                            Add your favorite ice creams to wishlist.
                        </p>
                    </div>

                )}

            </div>

        </section>
    );
};

export default WishlistSection;