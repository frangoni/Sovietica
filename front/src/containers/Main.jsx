import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import LoginContainer from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer";
import { fetchIsLogged } from "../../store/action-creators/users";
// import CartContainer from "../containers/CartContainer";
// import NavbarContainer from "../containers/NavbarContainer";
// import UserContainer from "../containers/UserContainer";

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
        {/* <NavbarContainer /> */}
        <h1>SOVIETICA </h1>
        {/* <Switch>
          <Route exact path="/home" />
          <Route exact path="/cart" component={CartContainer} /> */}
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/register" component={RegisterContainer} />
          {/* <Redirect to="/" from="/" /> */}
        {/* </Switch> */}
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Main);
