import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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

export default function AdminUsers({
  users,
  handleEdit,
  handleSubmit,
  deleteUsers,
}) {
  const classes = useStyles();
  return (
    <div id="home">
      <h4 className="titles"> USUARIOS REGISTRADOS</h4>
      <hr />
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
                      type="submit"
                      variant="contained"
                      size="small"
                      style={{ backgroundColor: "lightpink" }}
                      className={classes.margin}
                      onClick={() => handleSubmit(user._id)}
                    >
                      ACTUALIZAR
                    </Button>
                  </TableCell>

                  <TableCell>
                    <IconButton
                      aria-label="delete"
                      className={classes.margin}
                      onClick={() => deleteUsers(user._id)}
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
  );
}
