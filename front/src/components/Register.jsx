import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
}));

export default function SignUp({
  handleName,
  handleLastName,
  handleEmail,
  handleAdress,
  handlePhone,
  handlePassword,
  handleSubmit,
  nombre,
  apellido,
  email,
  direccion,
  telefono,
  clave,
}) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar style={{ backgroundColor: "lightpink" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Creá tu cuenta
        </Typography>

        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="Nombre"
                variant="outlined"
                required
                fullWidth
                label="Nombre"
                autoFocus
                onChange={handleName}
                value={nombre}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Apellido"
                name="Apellido"
                autoComplete="lname"
                onChange={handleLastName}
                value={apellido}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Email"
                name="Email"
                autoComplete="email"
                onChange={handleEmail}
                value={email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="clave"
                label="Contraseña"
                type="password"
                autoComplete="current-password"
                onChange={handlePassword}
                value={clave}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Dirección"
                label="Dirección"
                type="text"
                autoComplete="current-password"
                onChange={handleAdress}
                vale={direccion}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="Telefono"
                label="Telefono"
                autoComplete="current-telefono"
                onChange={handlePhone}
                value={telefono}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox value="allowExtraEmails" color="secondary" />
                }
                label="Acepto recibir promociones e información de nuevas prendas por email."
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
          >
            REGISTER
          </Button>

          <Grid container justify="center">
            <Grid item item style={{ margin: "20px" }}>
              <Link to="/login" variant="body3" style={{ color: "lightpink" }}>
                Ya tenés cuenta? Ingresa Acá
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

      <Box style={{ marginBottom: "40%" }}></Box>
    </Container>
  );
}
