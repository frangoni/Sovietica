import React from "react";
/* import { Modal, Button } from 'react-bootstrap'; */
import { Link } from "react-router-dom";
import { Card, Row, Container, Col } from "react-bootstrap";
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

  const classes = useStyles();
  return (
    <div>
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
                <h2> {nombre} </h2>
                <br />
                <h4>${precio}</h4>
                <br />
                {descripcion}
                <br />
                <hr />
                {/* SELECT DE TALLE*/}

                <FormControl variant="outlined" className={classes.formControl}>
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
                <FormControl variant="outlined" className={classes.formControl}>
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
                {reviews &&
                  reviews.map((review) => (
                    <ul>
                      <li>{review.review}</li>
                      <li>{review.calificacion}</li>
                    </ul>
                  ))}


                  <Button 
                  disabled={!(talles && color)}
                   onClick={handleSubmit}
                   type="submit"
              variant="contained"
              color="secondary"
              className={classes.submit}
                   >
                    Agregar a Carrito
                  </Button>
              </ul>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Product;
