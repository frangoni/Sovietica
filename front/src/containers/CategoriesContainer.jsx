import React from "react";
import { connect } from "react-redux";
import Categories from "../components/Categories";

import { fetchCategories } from "../../store/action-creators/categories";

import Search from "../components/Search";

class CategoriesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    console.log("componenDM");
    this.props.fetchCategories();
    // this.props.fetchProductsByCat();
  }

  render() {
    return (
      <div>
        <Categories categorias={this.props.categorias} />
        <Search products={this.props.productos} />
      </div>
    );
  }
}

const mapStateToProps = function (state, ownProps) {
  console.log("state de CATEGORIES", state.categories.categories);
  return {
    productos: state.products.products,
    categorias: state.categories.categories,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchProductsByCat: (str) => dispatch(fetchProductsByCat(str)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesContainer);
