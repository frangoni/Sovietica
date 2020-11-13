import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Grupo 6 "Los sovieticos"
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    bottom: "0",
    width: "100%",
    position: "relative",
    marginTop: "100px",
    padding: theme.spacing(3, 2),
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <>
      <footer id="footer" className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Sovietica</Typography>
          <Copyright />
        </Container>
        <Container>
          <Typography variant="body1"></Typography>Redes Sociales <br></br>
          <a
            href="https://www.instagram.com/sovieticaindumentaria/"
            target="_blank"
          >
            <InstagramIcon />
            @sovieticaindumentaria<br></br>
          </a>
          <a href="https://www.facebook.com/sovietica" target="_blank">
            <FacebookIcon />
            Sovietica Indumentaria<br></br>
          </a>
          <a href="mailto:sovieticaindumentaria@gmail.com" target="_blank">
            <EmailIcon />
            sovieticaindumentaria@gmail.com<br></br>
          </a>
        </Container>
      </footer>
    </>
  );
}
