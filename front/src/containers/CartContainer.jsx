import React from "react";
import Cart from "../components/Cart";
import { connect } from "react-redux";
import {
  fetchCart,
  deleteCart,
  updateCart,
} from "../../store/action-creators/cart";

class CartContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCart();
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.products != prevProps.products){
  //     this.props.fetchCart(this.props.products);
  //   } 
  // } 

  render() {
    return (
      <Cart
        products={this.props.products}
        deleteCart={this.props.deleteCart}
        updateCart={this.props.updateCart}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.cart.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: () => dispatch(fetchCart()),
    deleteCart: (id) => dispatch(deleteCart(id)),
    updateCart: (n) => dispatch(updateCart(n)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
