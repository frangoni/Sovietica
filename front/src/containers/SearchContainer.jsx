import React from "react";
import { fetchCategories } from "../../store/action-creators/categories";
import { connect } from "react-redux";
import Search from "../components/Search";

const mapStateToProps = function (state) {
  return {
    products: state.products.products,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
  };
};

class SearchContainer extends React.Component {
  /*  componentDidMount() {
    this.props.fetchCategories();
  } */

  render() {
    return <Search products={this.props.products} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
