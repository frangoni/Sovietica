import React from "react";
import Cart from "../components/Cart";
import { connect } from "react-redux";
import {
  fetchCart,
  deleteCart,
  updateCart,
} from "../../store/action-creators/cart";

class CartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: true,
    };
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  componentDidMount() {
    this.props.fetchCart();
  }

  handleRefresh() {
    this.setState((prevState) => ({
      refresh: !prevState.refresh,
    }));
  }

  render() {
    return (
      <Cart
        products={this.props.products}
        deleteCart={this.props.deleteCart}
        updateCart={this.props.updateCart}
        user={this.props.user}
        handleRefresh={this.handleRefresh}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.cart.products,
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCart: () => dispatch(fetchCart()),
    deleteCart: (id) => dispatch(deleteCart(id)),
    updateCart: (id, n) => dispatch(updateCart(id, { cantidad: n })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
