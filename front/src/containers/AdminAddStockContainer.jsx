import React from "react";
import { connect } from "react-redux";
import AdminAddStock from "../components/AdminAddStock";
import {fetchProducts,createStock} from "../../store/action-creators/admin"

const mapStateToProps = function (state) {
  return {
      products : state.admin.products,
  };
};


const mapDispatchToProps = function (dispatch) {
  return {
      fetchProducts : () => dispatch(fetchProducts()),
      // fetchCategories : () => dispatch(fetchCategories()),
      createStock : (data) => dispatch(createStock(data))
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
      // this.props.fetchCategories()
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
        return this.props.history.push("/adminedit");
    }

    
  render() {
    return (
      <AdminAddStock
        products = {this.props.products}
        // categories = {this.props.categories}
        handleTalle = {this.handleTalle}
        handleColor = {this.handleColor}
        handleCantidad = {this.handleCantidad}
        handleProducto = {this.handleProducto}
        handleStock = {this.handleStock}

      />
     
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminAddStockContainer);