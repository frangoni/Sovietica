import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "react-bootstrap";

/* import CartContainer from "../containers/CartContainer"; */

import NavbarContainer from "../containers/NavbarContainer";
/* import UserContainer from "../containers/UserContainer"; */
import ProductContainer from "../containers/ProductContainer"



const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

class Main extends React.Component {
/*   componentDidMount() {
    this.props.fetchIsLogged();
  } */

  render() {
    return (
      <div>
        <h1>SOVIETICA </h1>
        <Switch>
          <Route exact path="/home" />
          <Route exact path="/products/:id" component={ProductContainer} />
          <Redirect to="/" from="/" />
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);