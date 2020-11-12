import React from "react";
import { connect } from "react-redux";
import Categories from "../components/Categories";

import { fetchCategories } from "../../store/action-creators/categories";
import {fetchProductsByCat} from "../../store/action-creators/products"
import Search from "../components/Search";

class CategoriesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    console.log("componenDM");
    this.props.fetchCategories();
    // this.props.fetchProductsByCat();
  }

  handleClick(id) {
    this.props.fetchProductsByCat(id);
  }

  render() {
    return (
      <div>
        <Categories categorias={this.props.categorias} handleClick={this.handleClick} />
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
    fetchProductsByCat: (id) => dispatch(fetchProductsByCat(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesContainer);
