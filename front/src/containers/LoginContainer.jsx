import React from "react";
import { fetchLogin } from "../../store/action-creators/users"; 
import { connect } from "react-redux";
import Login from "../components/Login";

const mapDispachToProps = (dispatch) => {
  return {
    fetchLogin: (email, clave) => dispatch(fetchLogin(email, clave ))
  };
};

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        email: '',
        clave: '',
        nombre: '',
        error:'',
      };
    this.handleEmail = this.handleEmail.bind(this);
    this.handleClave = this.handleClave.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    if(!this.state.email){
      return this.setState({error: "INGRESE EMAIL CORRECTO"})
    }
    if(!this.state.clave){
      return this.setState({error: "INGRESE CLAVE CORRECTA"})
    }
    this.props.fetchLogin(this.state.email, this.state.clave, this.state.nombre);
    return this.props.history.push("/home")
  }

  handleEmail(e){
    this.setState({email: e.target.value})
  }

  handleClave(e){
    this.setState({clave: e.target.value})
  }

  render() {
    return (
      <Login
        handleEmail={this.handleEmail}
        handleClave={this.handleClave}
        handleSubmit={this.handleSubmit}
        error={this.state.error}
      />
    )
  }
}

export default connect(null, mapDispachToProps)(LoginContainer);