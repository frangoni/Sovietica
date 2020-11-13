import React from "react";
import Order from "../components/Order";
import { connect } from "react-redux";
import { fetchOrder } from "../../store/action-creators/order";

class OrdersContainer extends React.Component {
  componentDidMount() {
    this.props.fetchOrder();
  }

  render() {
    return <Order orders={this.props.orders} user={this.props.user} />;
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    orders: state.order.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrder: () => dispatch(fetchOrder()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer);
