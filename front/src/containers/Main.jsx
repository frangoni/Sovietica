import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchIsLogged } from "../../store/action-creators/users";
import LoginContainer from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer";
import NavbarContainer from "../containers/NavbarContainer";
import SearchContainer from "../containers/SearchContainer";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import CartContainer from "../containers/CartContainer";
import ProductContainer from "../containers/ProductContainer";
import Footer from "../components/Footer";
import CheckoutContainer from "../containers/CheckoutContainer";
import OrdersContainer from "../containers/OrdersContainer";
import ReviewContainer from "../containers/ReviewContainer";
import notAuthorized from "../components/notAuthorized";
import HomeContainer from "./HomeContainer";
import notFound from "../components/notFound";

const mapDispatchToProps = (dispatch) => {
  return {
    fetchIsLogged: () => {
      dispatch(fetchIsLogged());
    },
  };
};
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

class Main extends React.Component {
  componentDidMount() {
    this.props.fetchIsLogged();
  }

  render() {
    return (
      <>
        <NavbarContainer history={this.props.history} />

        <div id="content">
          <Switch>
            <Route exact path="/home" component={HomeContainer} />
            <Route exact path="/search" component={SearchContainer} />
            <Route exact path="/products/:id" component={ProductContainer} />
            <Route exact path="/categories/:id" component={SearchContainer} />
            <Route exact path="/cart" component={CartContainer} />
            {/* LOGIN REQUIRED */}
            <Route
              exact
              path="/checkout"
              component={
                this.props.user._id ? CheckoutContainer : LoginContainer
              }
            />
            <Route
              exact
              path="/orders"
              component={this.props.user._id ? OrdersContainer : LoginContainer}
            />
            <Route
              exact
              path="/review/:id"
              component={this.props.user._id ? ReviewContainer : LoginContainer}
            />
            <Route
              path="/login"
              component={this.props.user._id ? HomeContainer : LoginContainer}
            />
            <Route
              path="/register"
              component={
                this.props.user._id ? HomeContainer : RegisterContainer
              }
            />
            {/* ADMIN */}
            {/*  <Route
              path="/admin"
              component={this.props.user.rol == "admin" ? Panel : notAuthorized}
            /> */}
            <Route path="/notFound" component={notFound} />
            <Redirect to="/home" exact from="/" />
            <Redirect to="/notFound" from="/*" />
          </Switch>
        </div>

        <a href="https://api.whatsapp.com/send/?phone=5491165604567&text&app_absent=0">
          <WhatsAppIcon id="wpp" />
        </a>
        <Footer />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
