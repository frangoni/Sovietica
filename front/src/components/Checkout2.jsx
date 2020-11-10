import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function Checkout2() {
  return (
    <React.Fragment >
      <Typography variant="h6" gutterBottom> Datos de envio </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Nombre"
            fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Apellido"
            fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Direccion"
            fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Provincia"
            fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Ciudad/Localidad" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Codigo postal"
            fullWidth />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Recordar esta direccion"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}