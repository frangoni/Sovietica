// import React from "react";
// import { Card, Row, Container, Col } from "react-bootstrap";

// ///////////////////////////////

// const Categories = ({ categorias }) => (
//   <div>
//     <h1>HOLA</h1>
//     <Container style={{ marginBottom: "7%", marginTop: "3%" }}>
//       <Row id="row">
//         <Col xs={2} className="mb-5">
//           {categorias.map((categoria) => (
//             <Card style={{ width: "18rem" }}>
//               <Card.Img variant="top" src={categoria.foto} />
//             </Card>
//           ))}
//         </Col>
//       </Row>
//     </Container>
//   </div>
// );

// /////////////////////////////////////////

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ButtonBase from "@material-ui/core/ButtonBase";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import {Carousel} from "react-bootstrap"
const useStyles = makeStyles((theme) => ({
  ///////////////////////
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
        borderRadius: "15px",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
    borderRadius: "18px",
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
      }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },

}));

export default function Categories({ categorias, handleClick }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
 
            <Container className={classes.cardGrid} maxWidth="lg">
              <Grid container spacing={4}>
                {categorias.map((categoria) => (
                
                  <Link onClick={() => handleClick(categoria._id)}>
                    
                    <ButtonBase
                      focusRipple
                      key={categoria.nombre}
                      className={classes.image}
                      focusVisibleClassName={classes.focusVisible}
                      style={{
                        display: "flex",
                        flexWrap: "nowrap",
                        flexDirection: "row",
                        backgroundColor: "",
                        justifyContent: "space-between",
                        margin: "10px",
                        width: "200px",
                        height: "260px",
                      }}
                    >
                 
                        <span
                           
                          className={classes.imageSrc}
                          style={{
                            backgroundImage: `url(${categoria.foto})`,
                            borderRadius: "15px",
                          }}
                        />
                        
                        <span className={classes.imageBackdrop} />
                        <span className={classes.imageButton}>
                        
                          <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            className={classes.imageTitle}
                          >
                            {categoria.nombre}
                            <span className={classes.imageMarked} />
                          </Typography>
                        </span>
                        
                    </ButtonBase>
                  </Link>
                  
                ))}
               
              </Grid>
            </Container>
      </main>
    </React.Fragment>
  );
 
}
