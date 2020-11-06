import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import ProductContainer from "../containers/ProductContainer"
import LoginContainer from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer";
import CartContainer from "../containers/CartContainer";
import { fetchIsLogged } from "../../store/action-creators/users";

const mapDispatchToProps = (dispatch) => {
  return {
    fetchIsLogged: () => {
      dispatch(fetchIsLogged());
    },
  };
};

class Main extends React.Component {
  componentDidMount() {
    this.props.fetchIsLogged();
  }

  render() {
    return (
      <div>
        <h1>SOVIETICA </h1>
        <Switch>
          <Route exact path="/home" />
          <Route exact path="/products/:id" component={ProductContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/register" component={RegisterContainer} />
          <Route exact path="/cart" component={CartContainer} />
          <Redirect to="/" from="/" />
        </Switch>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Main);
