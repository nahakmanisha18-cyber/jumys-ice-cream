import { Modal, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./QuickViewModal.css";

const QuickViewModal = ({ show, onHide, product }) => {
  const [qty, setQty] = useState(1);
  useEffect(() => {
    if (show) {
      setQty(1);
    }
  }, [show]);

  if (!product) return null;
  const addToCart = () => {

    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(
      item => item.id === product.id
    );

    if (existingProduct) {

      existingProduct.qty =
        (existingProduct.qty || 1) + qty;

    } else {

      cart.push({
        ...product,
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

    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="xl"
      className="quick-modal"
    >
      <Modal.Body>

        <button
          className="close-btn"
          onClick={onHide}
        >
          ×
        </button>

        <div className="quick-view-container">

          {/* LEFT IMAGE */}

          <div className="quick-image">
            <img
              src={product.img}
              alt={product.name}
            />
          </div>

          {/* RIGHT CONTENT */}

          <div className="quick-content">

            <h2>{product.name}</h2>

            <h3>${product.price}.00</h3>

            <p>
              Premium handcrafted ice cream made with
              fresh ingredients. Smooth texture and rich
              flavor for every scoop.
            </p>

            <div className="stock">
              ✔ In Stock
            </div>

            <div className="cart-area">

              <div className="qty-box">

                <button
                  onClick={() =>
                    setQty(qty > 1 ? qty - 1 : 1)
                  }
                >
                  <FaMinus />
                </button>

                <span>{qty}</span>

                <button
                  onClick={() =>
                    setQty(qty + 1)
                  }
                >
                  <FaPlus />
                </button>

              </div>

              <Button
                className="add-btn"
                onClick={addToCart}
              >
                Add To Cart
              </Button>

            </div>

            <Link
              to={`/product/${product.id}`}
              onClick={onHide}
              className="details-link"
            >
              View Full Details
            </Link>

          </div>

        </div>

      </Modal.Body>
    </Modal>
  );
};

export default QuickViewModal;