import React from "react";
import { fetchProducts, fetchProductsByCat } from "../../store/action-creators/products";
import {fetchCategories} from "../../store/action-creators/categories"
import { connect } from "react-redux";
import Search from "../components/Search";
import Categories from "../components/Categories";

const mapStateToProps = function (state) {
  console.log("categorias en search", state.categories)
  return {
    products: state.products.products,
    categorias: state.categories.categories,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchProducts: () => dispatch(fetchProducts()),
    fetchProductsByCat: (id) => dispatch(fetchProductsByCat(id)),
  };
};

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchCategories();
  }

  handleClick(id) {
    this.props.fetchProductsByCat(id);
  }


  render() {
    return (
      <div>
        <Categories categorias={this.props.categorias} handleClick={this.handleClick}/>
        <Search products={this.props.products} />;
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
