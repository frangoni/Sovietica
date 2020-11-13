import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Container, Col } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Rating from "@material-ui/lab/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "20%",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

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

  const classes = useStyles();
  return (
    <div>
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
                <h2> {nombre} </h2>
                <br />
                <h4>${precio}</h4>
                <br />
                {descripcion}
                <br />
                <hr />
                {/* SELECT DE TALLE*/}
                {q ? (
                  <>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Talle
                      </InputLabel>
                      <Select
                        onChange={handleChangeTalle}
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        name="talle"
                        fullWidth
                        label="Talle"
                      >
                        <MenuItem value=""> </MenuItem>
                        {singleTalles &&
                          singleTalles.map((talle) => (
                            <MenuItem value={talle}>{talle}</MenuItem>
                          ))}
                      </Select>
                    </FormControl>

                    <br />
                    {/* SELECT DE COLOR */}
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Color
                      </InputLabel>
                      <Select
                        onChange={handleChangeColor}
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        name="color"
                        fullWidth
                        label="Color"
                      >
                        <MenuItem value=""> </MenuItem>
                        {stocks &&
                          stocks.map((stock) => {
                            if (stock.talle == talle && stock.cantidad > 0) {
                              return (
                                <MenuItem value={stock.color}>
                                  {stock.color}
                                </MenuItem>
                              );
                            }
                          })}
                      </Select>
                    </FormControl>
                    <br />
                    {q <= 35 ? <p>QUEDAN {q} UNIDADES</p> : null}
                    <br />
                    <br />
                  </>
                ) : (
                  <h4>NO HAY STOCK DISPONIBLE!</h4>
                )}

                <Button
                  disabled={!(talles && color)}
                  onClick={handleSubmit}
                  type="submit"
                  variant="contained"
                  size="small"
                  style={{ backgroundColor: "lightpink" }}
                  className={classes.margin}
                >
                  AGREGAR AL CARRITO
                </Button>
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
              <br />
              <br />
            </div>
          ))}
      </Container>
    </div>
  );
};

export default Product;
