import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Avatar from "@material-ui/core/Avatar";

export default function AdminStock({
  stocks,
  deleteStock,
  handleSubmit,
  handleColor,
  handleCantidad,
  handleTalle,
}) {
  return (
    <>
      <Paper id="cart">
        <h1>Listado de Stock de Productos</h1>
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
                        size="small"
                        variant="contained"
                        color="secondary"
                        onClick={() => handleSubmit(stock._id)}
                      >
                        Actualizar
                      </Button>
                    </TableCell>

                    <TableCell>
                      <Button
                        size="small"
                        variant="contained"
                        color="secondary"
                        className="botonCarrito"
                        onClick={() => {
                          deleteStock(stock._id);
                        }}
                      >
                        <DeleteIcon />
                      </Button>
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
