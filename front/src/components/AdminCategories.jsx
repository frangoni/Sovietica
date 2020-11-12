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
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function AdminCategories({
  handleSubmit,
  categories,
  handleFoto,
  handleNombre,
  deleteCategory,
  handleClose,
  handleOpen,
  open,
}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <form onSubmit={handleSubmit}>
        <h3>Crear nueva categoria</h3>
        <TextField
          style={{ margin: "15px" }}
          id="outlined-read-only-input"
          label="Nombre de la categoria"
          variant="outlined"
          onChange={(e) => handleNombre(e)}
          name="nombre"
        />

        <TextField
          style={{ margin: "15px" }}
          id="outlined-read-only-input"
          label="URL de la imagen"
          variant="outlined"
          onChange={(e) => handleFoto(e)}
          name="foto"
        />

        <Button
          style={{ margin: "15px" }}
          size="small"
          variant="contained"
          color="secondary"
          className="botonCarrito"
          type="submit"
        >
          Crear Categoria
        </Button>
        <Button
          style={{ margin: "15px" }}
          size="small"
          variant="contained"
          color="secondary"
          className="botonCarrito"
          type="submit"
          onClick={handleClose}
        >
          Cancelar
        </Button>
      </form>
    </div>
  );

  return (
    <div>
      <Paper className="category">
        <Table id="categoryTable">
          <TableHead>
            <TableRow>
              <TableCell>Foto</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Eliminar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories &&
              categories.map((categories) => (
                <TableRow key={categories._id}>
                  <TableCell>
                    <Avatar src={categories.foto} />{" "}
                  </TableCell>
                  <TableCell>{categories.nombre} </TableCell>
                  <TableCell>
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      className="botonCarrito"
                      onClick={() => {
                        deleteCategory(categories._id);
                      }}
                    >
                      Eliminar
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <div
          style={{
            margin: "5px",
          }}
        >
          <Button
            style={{ width: "100%", height: "70px" }}
            onClick={handleOpen}
            variant="outlined"
          >
            <AddIcon />
          </Button>
        </div>
      </Paper>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          style={{ padding: "30px" }}
        >
          {body}
        </Modal>
      </div>
    </div>
  );
}
