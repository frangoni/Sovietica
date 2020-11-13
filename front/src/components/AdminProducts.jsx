import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import Avatar from "@material-ui/core/Avatar";
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

export default function AdminProducts({
  products,
  deleteProducts,
  handleSubmit,
  handleNombre,
  handlePrecio,
  handleFoto,
  handleDescripcion,
}) {
  const classes = useStyles();
  return (
    <>
      <Paper id="cart">
        <h1>Listado de Productos</h1>
        <Table id="cartTable">
          <TableHead>
            <TableRow>
              <TableCell>Foto</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Descripcion</TableCell>
              <TableCell>Editar</TableCell>
              <TableCell>Eliminar</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {products &&
              products.map((product) => (
                <>
                  <TableRow key={product._id}>
                    {/* FOTO */}
                    <TableCell>
                      <Avatar src={product.foto} />
                    </TableCell>

                    {/* NOMBRE */}
                    <TableCell>
                      <form action="">
                        <input
                          type="text"
                          onChange={handleNombre}
                          placeholder={product.nombre}
                          style={{ border: "none", width: "100%" }}
                        />
                      </form>
                    </TableCell>

                    {/* PRECIO */}
                    <TableCell>
                      <form action="">
                        <input
                          type="text"
                          onChange={handlePrecio}
                          placeholder={product.precio}
                          style={{ border: "none", width: "30%" }}
                        />
                      </form>
                    </TableCell>

                    {/* DESCRIPCION */}
                    <TableCell>
                      <form>
                        <textarea
                          type="text"
                          onChange={handleDescripcion}
                          placeholder={product.descripcion}
                          style={{ border: "none", width: "100%" }}
                        />
                      </form>
                    </TableCell>

                    <TableCell>
                      <IconButton
                        aria-label="delete"
                        className={classes.margin}
                        onClick={() => handleSubmit(product._id)}
                      >
                        <EditIcon style={{ color: "lightpink" }} />
                      </IconButton>
                    </TableCell>

                    <TableCell>
                      <IconButton
                        aria-label="delete"
                        className={classes.margin}
                        onClick={() => deleteProducts(product._id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                </>
              ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}
