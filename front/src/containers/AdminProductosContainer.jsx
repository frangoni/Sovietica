import React from "react";
import { connect } from "react-redux";
import AdminProductos from "../components/AdminProductos";
import {fetchProducts, fetchCategories, fetchStock } from "../../store/action-creators/admin"

const mapStateToProps = function (state) {
  return {
      products : state.admin.products,
      categories : state.admin.categories
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
      fetchProducts : () => dispatch(fetchProducts()),
      fetchCategories : () => dispatch(fetchCategories()),
      fetchStock : () => dispatch(fetchStock())
  };
};

class AdminProductosContainer extends React.Component {

  componentDidMount(){
      this.props.fetchProducts()
      this.props.fetchCategories()
      this.props.fetchStock()
  }

  render() {
    return (
      <AdminProductos
        products = {this.props.products}
        categories = {this.props.categories}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProductosContainer);