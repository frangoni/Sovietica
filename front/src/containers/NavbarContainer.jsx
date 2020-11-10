import React from "react";
import { fetchSearchProducts } from "../../store/action-creators/products";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import { fetchLogout } from "../../store/action-creators/users";
import HamburgerMenu from "react-hamburger-menu";
import ToggledMenu from "../containers/ToggledMenu";

const mapStateToProps = function (state, { history }) {
  return {
    products: state.products.products,
    user: state.user.user,
    history,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchSearchProducts: (value) => dispatch(fetchSearchProducts(value)),
    fetchLogout: () => dispatch(fetchLogout()),
  };
};

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      toggle: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleChange(evt) {
    console.log(evt.target.value);
    const value = evt.target.value;
    this.setState({
      value: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchSearchProducts(this.state.value);
  }

  handleLogout() {
    this.props.fetchLogout();
    this.props.history.push("/home");
  }

  handleToggle() {
    this.setState({ toggle: !this.state.toggle });
  }

  render() {
    return (
<<<<<<< HEAD
      <>
        <Navbar
          value={this.state.value}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          user={this.props.user}
          handleLogout={this.handleLogout}
          user={this.props.user}
          handleToggle={this.handleToggle}
          toggle={this.state.toggle}
        />
        {this.state.toggle ? <ToggledMenu /> : null}
      </>
=======
      <Navbar
        value={this.state.value}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        user={this.props.user}
        handleLogout={this.handleLogout}
      />
>>>>>>> 128004528ebd12c59c35d023eb877f926052c0bd
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
