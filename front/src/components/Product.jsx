import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Container, Col } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { withStyles } from "@material-ui/core/styles";

const StyledRating = withStyles({
  iconFilled: {
    color: "#ff6d75",
  },
})(Rating);
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
              <Card.Img id="productView" variant="top" src={foto} />
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
                      <option value="-----" defaultValue></option>
                      {singleTalles &&
                        singleTalles.map((talle) => (
                          <option key={talle} value={talle}>
                            {talle}
                          </option>
                        ))}
                    </select>
                    <br />
                    <br />
                    <b>Color</b>
                    <select name="color" onChange={handleChangeColor}>
                      <option value="-----" defaultValue></option>
                      {stocks &&
                        stocks.map((stock) => {
                          if (stock.talle == talle && stock.cantidad > 0) {
                            return (
                              <option key={stock._id} value={stock.color}>
                                {stock.color}
                              </option>
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
                <button disabled={!(talles && color)} onClick={handleSubmit}>
                  Agregar a Carrito
                </button>
              </ul>
            </span>
          </Col>
        </Row>
        <br />
        <h3>REVIEWS</h3>
        <br />
        {reviews &&
          reviews.map((review) => (
            <div id="reviewsInProduct">
              <TextField
                key={review._id}
                id="outlined-read-only-input"
                label={review.usuario[0].nombre}
                defaultValue={review.review}
                InputProps={{
                  readOnly: true,
                }}
                variant="outlined"
              />
              <StyledRating
                key={review._id + "."}
                readOnly
                name="read-only"
                value={review.calificacion}
                icon={<FavoriteIcon fontSize="inherit" />}
              />
            </div>
          ))}
      </Container>
    </div>
  );
};

export default Product;
