import React from "react";
import { Card, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Search({ products }) {
  return (
    <div >
      
      <Container>
        <Row style={{ margin: "20px" }}>
          {products ? (
            products.map((product) => (
              <Col xs={3} className="mb-5" key={product._id}>
                <Card className="h-100 shadow-sm bg-white rounded">
                  <Card.Img variant="top" src={product.foto} />

                  <Card.Body className="d-flex w-150 flex-column">
                    <div className="d-flex mb-2 justify-content-between">
                      <Card.Title className="mb-0 font-weight-bold ">
                        {product.nombre}
                      </Card.Title>
                    </div>

                    <Link to={`/products/${product._id}`}>
                      <Button
                        className="mt-auto font-weight-bold "
                        variant="dark"
                        block
                      >
                        Detalle
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
                  <Alert variant="dark" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Producto no encontrado</Alert.Heading>
                    <p>
                      The movie or serie that you are searching for is not in our data base.
                    </p>
                  </Alert>
          )}
        </Row>
      </Container>
    </div>
  );
}
