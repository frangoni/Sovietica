import React from "react";
// import { fetchMovies } from "../action-creators/movies";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
// import {logoutUser} from "../action-creators/usuarios";

// const mapStateToProps = function (state) {
//   return {
//     movies: state.movies,
//     user: state.user.id
//   };
// };

// const mapDispatchToProps = function (dispatch) {
//   return {
//     fetchMovies: (movie) => dispatch(fetchMovies(movie)),
//     logoutUser: ()=> dispatch(logoutUser())
//   };
// };

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        value: '',
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  handleChange(evt) {
    console.log(evt.target.value)
    const value = evt.target.value;
    this.setState({
      value: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchMovies(this.state.value);
  }

  handleLogout(){
    this.props.logoutUser();
    return this.props.history.push("/movies")
  }

  render() {
    return (
      <Navbar
        value={this.state.value}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        user={this.props.user}
        handleLogout={this.handleLogout}
        
      />
    )
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);