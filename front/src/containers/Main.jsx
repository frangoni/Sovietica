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
import CategoriesContainer from "../containers/CategoriesContainer";
import Footer from "../components/Footer";
import AdminContainer from "../containers/AdminContainer";
import CheckoutContainer from "../containers/CheckoutContainer";

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
        <NavbarContainer history={this.props.history} />
        <img
          id="logo"
          src="https://d26lpennugtm8s.cloudfront.net/stores/903/961/themes/common/logo-1845961916-1576018694-7eff1267abe4e50cd976a335b559c5f11576018695-480-0.png?0"
        ></img>
        <Switch>
          <Route exact path="/categories" component={CategoriesContainer} />
          <Route exact path="/home" component={SearchContainer} />

          <Route path="/login" component={LoginContainer} />
          <Route path="/register" component={RegisterContainer} />
          <Route exact path="/cart" component={CartContainer} />
          <Route exact path="/products/:id" component={ProductContainer} />
          <Route exact path="/admin" component={AdminContainer} />
          <Route exact path="/checkout" component={CheckoutContainer} />
          <Redirect to="/home" from="/" />
        </Switch>
        <a href="https://api.whatsapp.com/send/?phone=5491165604567&text&app_absent=0">
          <WhatsAppIcon id="wpp" />
        </a>
        <Footer />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Main);
