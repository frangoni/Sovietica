import React from "react";
/* import { Modal, Button } from 'react-bootstrap'; */
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
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
  let talles = [];
  for (let i = 0; i < stocks.length; i++) {
    talles.push(stocks[i].talle);
  }
  let singleTalles = [...new Set(talles)];
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
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={foto} />
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            <b>Descripcion:</b> {descripcion}
            <br />
            <b>Precio:</b> {precio}
            <br />
            <b>Talle:</b>
            <select
              name="talle"
              onChange={(e) => {
                console.log(e.target.value);
                handleChangeTalle(e);
              }}
            >
              <option value="" selected></option>
              {singleTalles &&
                singleTalles.map((talle) => (
                  <option value={talle}>{talle}</option>
                ))}
            </select>
            <br />
            <b>Color:</b>
            <select name="color" onChange={handleChangeColor}>
              <option value="" selected></option>
              {stocks &&
                stocks.map((stock) => {
                  if (stock.talle == talle && stock.cantidad > 0) {
                    return <option value={stock.color}>{stock.color}</option>;
                  }
                })}
            </select>
            {reviews &&
              reviews.map((review) => (
                <ul>
                  <li>{review.review}</li>
                  <li>{review.calificacion}</li>
                </ul>
              ))}
            <br />
            <Link to="/cart">
              <button disabled={!(talle && color)} onClick={handleSubmit}>
                Agregar a Carrito
              </button>
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
