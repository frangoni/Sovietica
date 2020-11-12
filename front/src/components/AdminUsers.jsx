import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

export default function AdminUsers({
  users,
  handleEdit,
  handleSubmit,
  deleteUsers,
}) {
  return (
    <>
      
      <Paper id="cart">
      
        <Table id="cartTable">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Rol</TableCell>
              <TableCell>Seleccionar</TableCell>
              <TableCell>Actualizar</TableCell>
              <TableCell>Eliminar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <>
                <TableRow key={user._id}>
                  <TableCell>{user.nombre}</TableCell>
                  <TableCell> {user.apellido} </TableCell>
                  <TableCell> {user.email} </TableCell>
                  <TableCell> {user.rol} </TableCell>
                  <TableCell>
                    <select name="rol" onChange={handleEdit}>
                      <option value="" selected></option>
                      <option value="user">user</option>
                      <option value="admin">admin</option>
                    </select>
                  </TableCell>

                  <TableCell>
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      onClick={() => handleSubmit(user._id)}
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
                      onClick={() => deleteUsers(user._id)}
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
