import React from 'react';
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkout1 from "../components/Checkout1"
import Checkout2 from "../components/Checkout2"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Seleccione metodo de pago', 'Datos de envio', 'Finalizar compra'];
}

 function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Checkout1/>;
    case 1:
      return <Checkout2/>;
    case 2:
      return 'Finalizar compra';
    default:
      return 'stepIndex';
  }
}  

export default function CheckoutContainer() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div  id="checkout">
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                  Atras
              </Button>
                <Button variant="contained" color="secondary" onClick={handleNext} >
                    {activeStep === steps.length - 1 ? 
                        <Link id="checkoutButton" to="/home"> Comprar </Link>
                     : 'Siguiente'}
                </Button>
            </div>
          </div>
        )}
      </div>
       
    </div>
  );
}