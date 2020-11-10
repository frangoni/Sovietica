import React from "react";
import { fetchProducts } from "../../store/action-creators/products";
import { connect } from "react-redux";
import Search from "../components/Search";

const mapStateToProps = function (state) {
  return {
    products: state.products.products,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

class SearchContainer extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return <Search products={this.props.products} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
