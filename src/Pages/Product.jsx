import ProductDetails from "../Components/Products/ProductsDetails/ProductsDetails";
import Card, { products } from "../Components/Common/Cards/Card";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../Components/Products/ProductCards/ProductCard";

const Product = () => {
    return (
        <>
            <ProductDetails />

            <ProductCard/>
        </>
    );
};

export default Product;