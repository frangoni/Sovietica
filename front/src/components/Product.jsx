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
}) => (
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
          <b>Talle y Color:</b>
          {reviews &&
            reviews.map((review) => (
              <ul>
                <li>{review.review}</li>
                <li>{review.calificacion}</li>
              </ul>
            ))}
          {/* 
          <form onSubmit={this.handleSubmit}>
            <label>
              Elegí talle y color:
              <select value={this.state.value} onChange={handleChange}>
              {stocks &&
                stocks.map((stock) => (
                    <option value={stock.talle}>{stock.talle}</option>
                ))}
              </select>

              <select value={this.state.value} onChange={handleChange}>
              {stocks &&
                stocks.map((stock) => (
                  <option value={stock.color}>{stock.color}</option>
                ))}
            </select>

            </label>
            <input type="submit" value="Submit" />
          </form> */}
          <select name="talle" onChange={handleChangeTalle}>
            <option value="" selected></option>
            {stocks &&
              stocks.map((stock) => (
                <option value={stock.talle}>{stock.talle}</option>
              ))}
          </select>
          <select name="color" onChange={handleChangeColor}>
            <option value="" selected></option>
            {stocks &&
              stocks.map((stock) => (
                <option value={stock.color}>{stock.color}</option>
              ))}
          </select>
          <Link to="/cart">
            <button onClick={handleSubmit}>Agregar a Carrito</button>
          </Link>
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);

export default Product;
