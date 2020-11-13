import React from "react";
import AdminOrders from "../components/AdminOrders";
import { connect } from "react-redux";
import {
  fetchAdminOrders,
  updateOrders,
} from "../../store/action-creators/order";

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAdminOrders: () => dispatch(fetchAdminOrders()),
    updateOrders: (id, data) => dispatch(updateOrders(id, data)),
  };
};

class AdminOrdersContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      estado: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchAdminOrders();
  }

  handleSubmit(id) {
    this.props.updateOrders(id, this.state.estado);
  }
  handleChange(e) {
    console.log(e.target, " HANDLECHANGE ");
    this.setState({ estado: e.target.value });
  }

  render() {
    return (
      <AdminOrders
        orders={this.props.orders}
        user={this.props.user}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminOrdersContainer);
