import Card, { products } from "../../Common/Cards/Card"; 
import { Container, Row, Col } from "react-bootstrap";
import "./ProductCard.css"
const ProductCard = () => {
    return (

        <>
            <Container fluid className="product-card-section">
                <h2 className="mb-4">Related Products</h2>

                <Row>
                    {products.slice(0, 4).map((item) => (
                        <Col lg={3} md={6} key={item.id}>
                            <Card item={item} />
                        </Col>
                    ))}
                </Row>
                
                <h2 className="mb-4">Recently Viewed Products</h2>

                <Row className="mt-4">
                    {products.slice(4, 8).map((item) => (
                        <Col lg={3} md={6} key={item.id}>
                            <Card item={item} />
                        </Col>
                    ))}
                </Row>

                <Row className="mt-4">
                    {products.slice(8, 12).map((item) => (
                        <Col lg={3} md={6} key={item.id}>
                            <Card item={item} />
                        </Col>
                    ))}
                </Row>
            </Container >
        </>
    )
}
export default ProductCard