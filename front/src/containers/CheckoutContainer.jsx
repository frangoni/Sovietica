import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Checkout1 from "../components/Checkout1";
import Checkout2 from "../components/Checkout2";
import Checkout3 from "../components/Checkout3";
import { createOrder } from "../../store/action-creators/order";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
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
  return ["Seleccione metodo de pago", "Datos de envio", "Finalizar compra"];
}

export default function CheckoutContainer() {
  const [direccion, setDireccion] = React.useState("");
  const [total, setTotal] = React.useState(0);

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Checkout1 />;
      case 1:
        return <Checkout2 setDireccion={setDireccion} />;
      case 2:
        return <Checkout3 setTotal={setTotal} />;
      default:
        return "stepIndex";
    }
  }

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handlePurchase = () => {
    console.log(total);
    let data = { total, direccion };
    createOrder(data);
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
      <div id="checkout">
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              Gracias por su compra
            </Typography>
            <Link to="/home">Volver</Link>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Atras
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? (
                  <Button id="checkoutButton" onClick={handlePurchase}>
                    Comprar
                  </Button>
                ) : (
                  "Siguiente"
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
