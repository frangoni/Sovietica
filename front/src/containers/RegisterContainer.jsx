import React from "react";
import { fetchUser } from "../../store/action-creators/users";
import { connect } from "react-redux";
import Register from "../components/Register";

const mapDispachToProps = (dispatch) => {
  return {
    fetchUser: (data) => dispatch(fetchUser(data)),
  };
};

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      apellido: "",
      email: "",
      direccion: "",
      telefono: "",
      clave: "",
    };

    this.handleName = this.handleName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleAdress = this.handleAdress.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.fetchUser(this.state);
    return this.props.history.push("/login");
  }

  handleName(e) {
    this.setState({ nombre: e.target.value });
  }

  handleLastName(e) {
    this.setState({ apellido: e.target.value });
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleAdress(e) {
    this.setState({ direccion: e.target.value });
  }

  handlePhone(e) {
    this.setState({ telefono: e.target.value });
  }

  handlePassword(e) {
    this.setState({ clave: e.target.value });
  }

  render() {
    return (
      <Register
        handleName={this.handleName}
        handleLastName={this.handleLastName}
        handleEmail={this.handleEmail}
        handleAdress={this.handleAdress}
        handlePhone={this.handlePhone}
        handlePassword={this.handlePassword}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(null, mapDispachToProps)(RegisterContainer);