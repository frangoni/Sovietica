import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { useSnackbar } from 'notistack';



const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
  },
}));

export default function AdminProducts({
  products,
  handleStock,
  handleTalle,
  handleColor,
  handleCantidad,
  handleProducto,

}) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Añadir Stock
        </Typography>

        <form className={classes.form} onSubmit={handleStock}>
          <Grid container spacing={2}>
            {/* PRODUCTOS */}
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Productos
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                name="categorias"
                fullWidth
                onChange={handleProducto}
                label="Categorias"
              >
                <MenuItem value="">
                  <em> </em>
                </MenuItem>
                {products &&
                  products.map((product) => (
                    <MenuItem value={product._id}>{product.nombre}</MenuItem>
                  ))}
              </Select>
            </FormControl>

            {/* TALLE */}
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Talle
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                name="talles"
                fullWidth
                onChange={handleTalle}
                label="Talles"
              >
                <MenuItem value=""> </MenuItem>
                <MenuItem value="S"> S </MenuItem>
                <MenuItem value="M"> M </MenuItem>
                <MenuItem value="L"> L </MenuItem>
                <MenuItem value="XL"> XL </MenuItem>
              </Select>
            </FormControl>

            {/* COLOR */}
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Color
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                name="color"
                fullWidth
                onChange={handleColor}
                label="Color"
              >
                <MenuItem value=""> </MenuItem>
                <MenuItem value="Amarillo"> Amarillo </MenuItem>
                <MenuItem value="Azul"> Azul </MenuItem>
                <MenuItem value="Blanco"> Blanco </MenuItem>
                <MenuItem value="Negro"> Negro </MenuItem>
                <MenuItem value="Rojo"> Rojo </MenuItem>
                <MenuItem value="Verde"> Verde </MenuItem>
                <MenuItem value="Violeta"> Violeta </MenuItem>
              </Select>
            </FormControl>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Cantidad"
                name="Cantidad"
                onChange={handleCantidad}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="small"
            style={{ backgroundColor: "lightpink" }}
            className={classes.margin}
            onClick={() => 
                enqueueSnackbar('Stock Agregado !')}
          >
            AÑADIR STOCK
          </Button>
        </form>
      </div>
    </Container>

  );
}
