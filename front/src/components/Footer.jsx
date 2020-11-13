import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Grupo 6 "Los sovieticos"
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    bottom:"0",
    width:"100%",
    position: "relative",
    marginTop:"100px",
    padding: theme.spacing(3, 2),
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div >
      <footer className={classes.footer} >
        <Container maxWidth="sm" >
          <Typography variant="body1">Sovietica</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

// import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

// const FooterPage = () => {
//   return (
//     <MDBFooter className="font-small pt-4 mt-6">
//       <MDBContainer className="text-center text-md-left">
//         <MDBRow>
//         <MDBCol >
            
//           </MDBCol>
          
//           <MDBCol mb="3">
//             <h5 className="title">Sovietica</h5>
//             <p>
              
//             </p>
//           </MDBCol>


//           <MDBCol mb="3">
//             <h5 className="title">Contactanos</h5>
//             <p> 11 3451-6914 </p>
//             <p> sovieticaindumentaria@gmail.com </p>
//             <p> Villa Crespo </p>
                
//           </MDBCol>
          
          
//         </MDBRow>
//       </MDBContainer>
//       <div className="footer-copyright text-center py-3">
//         <MDBContainer fluid>
//           &copy; {new Date().getFullYear()} Copyright: Grupo 6 "Los sovieticos"
//         </MDBContainer>
//       </div>
//     </MDBFooter>
//   );
// }

// export default FooterPage;