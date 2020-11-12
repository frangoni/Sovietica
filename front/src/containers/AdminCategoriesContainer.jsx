import React from "react";
import {
  addCategory,
  deleteCategory,
  fetchCategories,
} from "../../store/action-creators/categories";
import { connect } from "react-redux";
import AdminCategories from "../components/AdminCategories";

const mapStateToProps = function (state) {
  return {
    categories: state.categories.categories,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    addCategory: (data) => dispatch(addCategory(data)),
    deleteCategory: (id) => dispatch(deleteCategory(id)),
    fetchCategories: () => dispatch(fetchCategories()),
  };
};

class AdminCategoriesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      foto: "",
      open: false,
    };

    this.handleFoto = this.handleFoto.bind(this);
    this.handleNombre = this.handleNombre.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("event", e);
    this.props.addCategory({
      nombre: this.state.nombre,
      foto: this.state.foto,
    });
    this.handleClose();
  }

  handleFoto(e) {
    let foto = e.target.value;
    this.setState({ foto: foto });
  }

  handleNombre(e) {
    let nombre = e.target.value;
    this.setState({ nombre: nombre });
  }

  deleteCategory(id) {
    this.props.deleteCategory(id);
  }
  handleOpen() {
    this.setState({
      open: true,
    });
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <AdminCategories
        handleSubmit={this.handleSubmit}
        handleFoto={this.handleFoto}
        handleNombre={this.handleNombre}
        deleteCategory={this.deleteCategory}
        categories={this.props.categories}
        handleClose={this.handleClose}
        handleOpen={this.handleOpen}
        open={this.state.open}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminCategoriesContainer);
