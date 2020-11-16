import React from "react";
import { fetchSearchProducts } from "../../store/action-creators/products";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import { fetchLogout } from "../../store/action-creators/users";
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
    this.handleState = this.handleState.bind(this);
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      value: value,
    });
    console.log(this.state.value);
    if (this.state.value.length >= 2) {
      this.props.history.push("/search");
      this.props.fetchSearchProducts(this.state.value);
    } else if (this.state.value.length < 1) {
      this.props.history.push("/home");
    }
    if (this.props.products.length == 1) {
      this.props.history.push(`/products/${this.props.products[0]._id}`);
      location.reload();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleLogout() {
    this.props.fetchLogout();
    location.reload();
  }

  handleToggle() {
    this.setState({ toggle: !this.state.toggle });
  }
  handleState() {
    this.setState({ value: "" });
  }

  render() {
    return (
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
          handleState={this.handleState}
        />
        {this.state.toggle ? <ToggledMenu /> : null}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
