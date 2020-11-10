import React from "react";
/* import { Modal, Button } from 'react-bootstrap'; */
import { Link } from "react-router-dom";
import { Card, Row, Container, Col } from "react-bootstrap";
import { Box } from "@material-ui/core";

const Product = ({
  nombre,
  descripcion,
  foto,
  precio,
  reviews,
  handleSubmit,
  stocks,
  handleChangeColor,
  handleChangeTalle,
  talle,
  color,
}) => {
  //TALLES SIN DUPLICAR
  let talles = [];
  for (let i = 0; i < stocks.length; i++) {
    talles.push(stocks[i].talle);
  }
  let singleTalles = [...new Set(talles)];

  //CANTIDAD EXACTA DE ITEMS
  let q = 0;
  for (let i = 0; i < stocks.length; i++) {
    q += stocks[i].cantidad;
  }
  return (
    <div>
      {/* 
            <Box component="div" textOverflow="clip">
                {nombre}
            </Box>
            <Box component="div" textOverflow="ellipsis">
                <b>Descripcion:</b> {descripcion}<br />
                <b>Precio:</b> {precio}<br />
                <b>Reviews:</b> {reviews}<br />
                <button onClick={handleSubmit}>Agregar a Carrito</button>
            </Box> */}

      <Container style={{ marginBottom: "7%", marginTop: "3%" }}>
        <Row>
          <Col xs={3} className="mb-5">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={foto} />
            </Card>
          </Col>

          <Col>
            <span>
              <ul>
                <h4> {nombre} </h4>
                <br />
                {descripcion}
                <br />
                <br />
                <b>Precio:</b> ${precio}
                <br />
                <br />
                {q ? (
                  <>
                    <b>Talle</b>
                    <select name="talle" onChange={handleChangeTalle}>
                      <option value="" selected></option>
                      {singleTalles &&
                        singleTalles.map((talle) => (
                          <option value={talle}>{talle}</option>
                        ))}
                    </select>
                    <br />
                    <br />
                    <b>Color</b>
                    <select name="color" onChange={handleChangeColor}>
                      <option value="" selected></option>
                      {stocks &&
                        stocks.map((stock) => {
                          if (stock.talle == talle && stock.cantidad > 0) {
                            return (
                              <option value={stock.color}>{stock.color}</option>
                            );
                          }
                        })}
                    </select>
                    <br />
                    {q <= 35 ? <p>QUEDAN {q} UNIDADES</p> : null}
                    <br />
                    <br />
                  </>
                ) : (
                  <h4>NO HAY STOCK DISPONIBLE!</h4>
                )}
                {reviews &&
                  reviews.map((review) => (
                    <ul>
                      <li>{review.review}</li>
                      <li>{review.calificacion}</li>
                    </ul>
                  ))}
                <Link to="/cart">
                  <button disabled={!(talles && color)} onClick={handleSubmit}>
                    Agregar a Carrito
                  </button>
                </Link>
              </ul>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Product;
