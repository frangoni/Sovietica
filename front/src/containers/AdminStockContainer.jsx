import React from "react";
import { connect } from "react-redux";
import AdminStock from "../components/AdminStock";
import {fetchStock, deleteStock, updateStock } from "../../store/action-creators/admin"

const mapStateToProps = function (state) {
  return {
      stock: state.admin.stock,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
      fetchStock : () => dispatch(fetchStock()),
      deleteStock: (id) => dispatch(deleteStock(id)),
      updateStock : (id,data) => dispatch(updateStock (id,data))
  };
};

class AdminStockContainer extends React.Component {

  constructor(props){
    super(props);
    this.state={
      talle: "",
      color: "",
      cantidad: "",
    }

    this.deleteStock = this.deleteStock.bind(this)
    this.handleTalle = this.handleTalle.bind(this)
    this.handleColor = this.handleColor.bind(this)
    this.handleCantidad = this.handleCantidad.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
      this.props.fetchStock()
  }

  deleteStock(id){
    this.props.deleteStock(id)
  }

  handleTalle(e){
    const value = e.target.value;
    this.setState({
      talle: value,
    });
  }

  handleColor(e){
    const value = e.target.value;
    this.setState({
      color: value,
    });
  }

  handleCantidad(e){
    const value = e.target.value;
    this.setState({
      cantidad: value,
    });
  }

  handleSubmit(id){
    let data = {}
    for (const valor in this.state) {
     if(!(this.state[valor] == "")){
       data[valor] = this.state[valor]
     }
    }
    this.props.updateStock(id,data)
    this.setState({
      talle: "",
      color: "",
      cantidad: "",
    })
   }


  render() {
    return (
      <AdminStock
        stocks= {this.props.stock}
        deleteStock={this.deleteStock}
        handleSubmit = {this.handleSubmit}
        handleColor = {this.handleColor}
        handleCantidad={this.handleCantidad}
        handleTalle = {this.handleTalle}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminStockContainer);