import React from "react";
import Typography from "@material-ui/core/Typography";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCart } from "../../store/action-creators/cart";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";

const Checkout3 = ({ fetchCart, products, setTotal }) => {
  const total = () => {
    let resultado = 0;
    products.map((product) => {
      resultado += product.productos[0].productos[0].precio * product.cantidad;
    });
    setTotal(resultado);
    return resultado;
  };
  useEffect(() => {
    fetchCart();
  }, []);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        PRODUCTOS
      </Typography>
      <Paper id="cart">
        <Table id="cartTable">
          <TableHead>
            <TableRow>
              <TableCell>Foto</TableCell>
              <TableCell>Descripcion</TableCell>
              <TableCell>Color</TableCell>
              <TableCell>Talle</TableCell>
              <TableCell>Cantidad</TableCell>
              <TableCell>Precio</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map((product) => (
                <>
                  <TableRow key={product._id}>
                    <TableCell>
                      <Avatar src={product.productos[0].productos[0].foto} />
                    </TableCell>
                    <TableCell>
                      {product.productos[0].productos[0].nombre}
                    </TableCell>
                    <TableCell> {product.productos[0].color} </TableCell>
                    <TableCell> {product.productos[0].talle} </TableCell>
                    <TableCell>{product.cantidad}</TableCell>
                    <TableCell>
                      ${product.productos[0].productos[0].precio}{" "}
                    </TableCell>
                  </TableRow>
                </>
              ))}
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell align="right">${total()}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.cart.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: () => dispatch(fetchCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout3);
