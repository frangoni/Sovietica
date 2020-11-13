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
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Order({ orders, user, handleChange, handleSubmit }) {
  const fecha = (fecha) => {
    let newFecha = "";
    newFecha = fecha.slice(0, 10);
    return newFecha;
  };

  const classes = useStyles();
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
                    <TableCell>Estado</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {order.productos &&
                    order.productos.map((product) => {
                      console.log(order);
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
                              <select name="estado" onChange={handleChange}>
                                <option value="" selected></option>
                                <option value="En preparacion">
                                  En preparacion
                                </option>
                                <option value="Despachado">Despachado</option>
                                <option value="Entregado">Entregado</option>
                              </select>
                            </TableCell>
                            <TableCell>
                              <Button
                                className="botonCarrito"
                                type="submit"
                                variant="contained"
                                size="small"
                                style={{ backgroundColor: "lightpink" }}
                                className={classes.margin}
                                onClick={() => handleSubmit(order._id)}
                              >
                                ACTUALIZAR
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
                <TableRow>
                  <TableCell>Fecha</TableCell>
                  <TableCell>{fecha(order.fecha)}</TableCell>
                </TableRow>
              </Table>
              <TableRow>
                <TableCell>Estado</TableCell>
                <TableCell>{order.estado}</TableCell>
              </TableRow>
            </Paper>
          );
        })}
    </>
  );
}
