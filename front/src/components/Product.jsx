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

    <Container style={{marginBottom : "7%", marginTop:"3%"}}>
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
            <br/>
            {descripcion}
            <br />
            <br />
            <b>Precio:</b> ${precio}
            <br />
            <br />
            <b>Talle</b>

            {reviews &&
              reviews.map((review) => (
                <ul>
                  <li>{review.review}</li>
                  <li>{review.calificacion}</li>
                </ul>
              ))}
            <select name="talle" onChange={handleChangeTalle}>
              <option value="" selected></option>
              {stocks &&
                stocks.map((stock) => (
                  <option value={stock.talle}>{stock.talle}</option>
                ))}
            </select>
            <br/>
            <br />
            <b>Color</b>
            <select name="color" onChange={handleChangeColor}>
              <option value="" selected></option>
              {stocks &&
                stocks.map((stock) => (
                  <option value={stock.color}>{stock.color}</option>
                ))}
            </select>
            <br/>
            <br/>
            <Link to="/cart">
              <button onClick={handleSubmit}>Agregar a Carrito</button>
            </Link>

            </ul>
          </span>
        </Col>
      </Row>
    </Container >

    {/* <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body" style={{ width: "18rem" }}>
            <img src={foto} className="thumbnail" alt="Foto" style={{maxHeight:"50%"}}/>
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{nombre}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong> {}
              </li>
              <li className="list-group-item">
                <strong>Released:</strong> {}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> {}
              </li>
              <li className="list-group-item">
                <strong>IMDB Rating:</strong> {}
              </li>
              <li className="list-group-item">
                <strong>Director:</strong> {}
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong> {}
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong> {}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <h3> Descripcion </h3>
              {descripcion}
              <hr />

              <Link to="/home" className="btn btn-default text-light">
                Volver a Home
              </Link>
            </div>
          </div>
        </div>
      </div>
 */}
  </div>
);

export default Product;
