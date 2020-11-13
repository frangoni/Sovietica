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

export default function Review({
  review,
  product,
  handleReview,
  handleRating,
  rating,
}) {
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
      <form id="review" onSubmit={handleReview}>
        <TextField
          id="outlined-multiline-static"
          label={review.length ? "" : "Review"}
          multiline
          rows={4}
          placeholder={review.length ? "" : "Deje su reseña"}
          variant="outlined"
          value={review.length ? review[0].review : null}
        />
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Dele amor!</Typography>
          <StyledRating
            name="customized-color"
            defaultValue={review.length ? review[0].calificacion : rating}
            onChange={(e, value) => handleRating(value)}
            getLabelText={(value) => value}
            precision={0.25}
            icon={<FavoriteIcon fontSize="inherit" />}
            disabled={review.length}
          />
        </Box>
        <input disabled={review.length} type="submit" value="Enviar reseña" />
      </form>
    </div>
  );
}
