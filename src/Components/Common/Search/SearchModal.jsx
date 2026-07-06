import React, { useState } from "react";
import { products } from "../Cards/Card";
import { Link } from "react-router-dom";
import "./SearchModal.css";

const SearchModal = ({ show, onClose }) => {
    const [query, setQuery] = useState("");

    const filteredProducts =
        query.trim() === ""
            ? []
            : products.filter((item) =>
                item.name.toLowerCase().includes(query.toLowerCase())
            );

    if (!show) return null;

    return (
        <div className="search-overlay">
            <div className="search-modal">

                <button
                    className="close-btn"
                    onClick={onClose}
                >
                    ✕
                </button>

                <input
                    type="text"
                    placeholder="Search Product..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />

                {query && (
                    <>
                        <h4>
                            {filteredProducts.length} Result
                        </h4>

                        <div className="search-results">
                            {filteredProducts.map((item) => (
                                <Link
                                    key={item.id}
                                    to={`/product/${item.id}`}
                                    className="search-card"
                                    onClick={onClose}
                                >
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                    />

                                    <div>
                                        <h5>{item.name}</h5>
                                        <p>${item.price}.00</p>
                                    </div>
                                </Link>
                            ))}

                            {filteredProducts.length === 0 && (
                                <p>No Product Found</p>
                            )}
                        </div>
                    </>
                )}

            </div>
        </div>
    );
};

export default SearchModal;