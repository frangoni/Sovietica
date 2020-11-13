import React from "react";
import { connect } from "react-redux";
import AdminAddStock from "../components/AdminAddStock";
import {fetchProducts,createStock} from "../../store/action-creators/admin";
import { SnackbarProvider } from 'notistack';

const mapStateToProps = function (state) {
  return {
      products : state.admin.products,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
      fetchProducts : () => dispatch(fetchProducts()),
      createStock : (data) => dispatch(createStock(data)),
  };
};


class AdminAddStockContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        talle: "",
        color: "",
        cantidad: "",
        productos: ""
    }
    this.handleTalle = this.handleTalle.bind(this)
    this.handleColor = this.handleColor.bind(this)
    this.handleCantidad = this.handleCantidad.bind(this)
    this.handleProducto = this.handleProducto.bind(this)
    this.handleStock = this.handleStock.bind(this)
  }

  componentDidMount(){
      this.props.fetchProducts()
  }

    handleTalle(e){
        const value = e.target.value
        this.setState({
            talle: value
        })
    }

    handleColor(e){
        const value = e.target.value
        this.setState({
            color: value
        })
    }

    handleCantidad(e){
        const value = e.target.value
        this.setState({
            cantidad: value
        })
    }

    handleProducto(e){
        const value = e.target.value
        this.setState({
            productos: value
        })
    }

    handleStock(e){
        e.preventDefault()
        this.props.createStock(this.state)
        e.target.reset()
    }
    
  render() {
    return (
      <SnackbarProvider maxSnack={3}>
      <AdminAddStock
        products = {this.props.products}
        handleTalle = {this.handleTalle}
        handleColor = {this.handleColor}
        handleCantidad = {this.handleCantidad}
        handleProducto = {this.handleProducto}
        handleStock = {this.handleStock}
      />
      </SnackbarProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminAddStockContainer);