import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import CartContainer from "../containers/CartContainer";

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>SOVIETICA </h1>

        <Switch>
          <Route exact path="/home" />
          <Route exact path="/cart" component={CartContainer} />
          <Redirect to="/" from="/" />
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);