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
import { makeStyles } from "@material-ui/core/styles";

import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

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

export default function AdminStock({
  stocks,
  deleteStock,
  handleSubmit,
  handleColor,
  handleCantidad,
  handleTalle,
}) {
  const classes = useStyles();
  return (
    <>
    <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
        Lista de Inventario
        </Typography>
      <Paper id="cart">
        <Table id="cartTable">
          <TableHead>
            <TableRow>
              <TableCell>Foto</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Talle</TableCell>
              <TableCell>Color</TableCell>
              <TableCell>Cantidad</TableCell>
              <TableCell>Editar</TableCell>
              <TableCell>Eliminar</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {stocks &&
              stocks.map((stock) => (
                <>
                  <TableRow key={stock._id}>
                    {/* FOTO */}
                    <TableCell>
                      <Avatar src={stock.productos[0].foto} />
                    </TableCell>

                    {/* NOMBRE */}
                    <TableCell>{stock.productos[0].nombre}</TableCell>

                    {/* TALLE */}
                    <TableCell>
                      <form action="">
                        <input
                          type="text"
                          onChange={handleTalle}
                          placeholder={stock.talle}
                          style={{ border: "none", width: "50%" }}
                        />
                      </form>
                    </TableCell>

                    {/* COLOR */}
                    <TableCell>
                      <form action="">
                        <input
                          type="text"
                          onChange={handleColor}
                          placeholder={stock.color}
                          style={{ border: "none", width: "50%" }}
                        />
                      </form>
                    </TableCell>

                    {/* CANTIDAD */}
                    <TableCell>
                      <form action="">
                        <input
                          type="text"
                          onChange={handleCantidad}
                          placeholder={stock.cantidad}
                          style={{ border: "none", width: "50%" }}
                        />
                      </form>
                    </TableCell>

                    <TableCell>
                      <Button
                        type="submit"
                        variant="contained"
                        size="small"
                        style={{ backgroundColor: "lightpink" }}
                        className={classes.margin}
                        onClick={() => handleSubmit(stock._id)}
                      >
                        ACTUALIZAR
                      </Button>
                    </TableCell>

                    <TableCell>
                      <IconButton
                        aria-label="delete"
                        className={classes.margin}
                        onClick={() => {
                          deleteStock(stock._id);
                        }}
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
      </div>
    </>
  );
}
