import React from "react";
import TextField from "@material-ui/core/TextField";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";

export default function Review({ review, product }) {
  console.log(product);
  const StyledRating = withStyles({
    iconFilled: {
      color: "#ff6d75",
    },
    iconHover: {
      color: "#ff3d47",
    },
  })(Rating);
  console.log(review);
  return (
    <div id="reviewContainer">
      <Link to={`/products/${product._id}`}>
        <Card id="reviewCard">
          <CardActionArea>
            <CardMedia component="img" height="350" image={product.foto} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {product.nombre}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {product.descripcion}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
      <form id="review">
        <TextField
          id="outlined-multiline-static"
          label="Review"
          multiline
          rows={4}
          placeholder="Deje su reseña"
          variant="outlined"
        />
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Dele amor!</Typography>
          <StyledRating
            name="customized-color"
            defaultValue={2}
            getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
            precision={0.5}
            icon={<FavoriteIcon fontSize="inherit" />}
          />
        </Box>
        <input type="submit" value="Enviar reseña" />
      </form>
    </div>
  );
}
