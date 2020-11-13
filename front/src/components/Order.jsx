import React from "react";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function Order({ orders, user }) {
  const fecha = (fecha) => {
    let newFecha = "";
    newFecha = fecha.slice(0, 10);
    return newFecha;
  };
  return (
    <>
      <Typography variant="h6" align="center" gutterBottom>
        ORDENES DE COMPRA
      </Typography>
      {orders &&
        orders.map((order) => {
          return (
            <Paper id="cart">
              <p>Enviado a: {order.direccion}</p>
              <Table id="cartTable">
                <TableHead>
                  <TableRow>
                    <TableCell>Foto</TableCell>
                    <TableCell>Descripcion</TableCell>
                    <TableCell>Color</TableCell>
                    <TableCell>Talle</TableCell>
                    <TableCell>Precio</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {order.productos &&
                    order.productos.map((product) => {
                      console.log(product);
                      return (
                        <>
                          <TableRow key={product._id}>
                            <TableCell>
                              <Avatar src={product.productos[0].foto} />
                            </TableCell>
                            <TableCell>{product.productos[0].nombre}</TableCell>
                            <TableCell>{product.color}</TableCell>
                            <TableCell>{product.talle}</TableCell>
                            <TableCell>
                              ${product.productos[0].precio}
                            </TableCell>
                            <TableCell>
                              <Button
                                type="submit"
                                variant="contained"
                                size="small"
                                style={{ backgroundColor: "lightpink" }}
                                className={classes.margin}
                              >
                                <Link
                                  id="reviewBtn"
                                  to={`/review/${product.productos[0]._id}`}
                                >
                                  ADD REVIEW!
                                </Link>
                              </Button>
                            </TableCell>
                          </TableRow>
                        </>
                      );
                    })}
                </TableBody>

                <TableRow>
                  <TableCell>Total</TableCell>
                  <TableCell>${order.total}</TableCell>
                </TableRow>
                {/* {user && user.rol == "admin" ? (
                  <TableRow>
                    <TableCell>Estado</TableCell>
                    <select name="estado" onChange={handleChangeTalle}>
                      <option value="" selected></option>
                      <option value="En preparacion">En preparacion</option>
                      <option value="Despachado">Despachado</option>
                      <option value="Entregado">Entregado</option>
                    </select>
                  </TableRow>
                ) : (
                  <TableRow>
                    <TableCell>Estado</TableCell>
                    <TableCell>{order.estado}</TableCell>
                  </TableRow>
                )} */}
                <TableRow>
                  <TableCell>Estado</TableCell>
                  <TableCell>{order.estado}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Fecha</TableCell>
                  <TableCell>{fecha(order.fecha)}</TableCell>
                </TableRow>
              </Table>
            </Paper>
          );
        })}
    </>
  );
}
