import React from "react";
import { connect } from "react-redux";
import AdminProducts from "../components/AdminProducts";
import {fetchProducts, deleteProducts, updateProducts } from "../../store/action-creators/admin"

const mapStateToProps = function (state) {
  return {
      products: state.admin.products,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    deleteProducts: (id) => dispatch(deleteProducts(id)),
    updateProducts: (id,data) => dispatch(updateProducts(id,data))
  };
};

class AdminProductsContainer extends React.Component {

  constructor(props){
    super(props);
    this.state={
      nombre:"",
      precio:"",
      foto:"",
      descripcion:""
    }

    this.deleteProducts = this.deleteProducts.bind(this)
    this.handleNombre = this.handleNombre.bind(this)
    this.handlePrecio = this.handlePrecio.bind(this)
    this.handleFoto = this.handleFoto.bind(this)
    this.handleDescripcion = this.handleDescripcion.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
      this.props.fetchProducts()
  }

  deleteProducts(id){
    this.props.deleteProducts(id)
  }

  handleNombre(e){
    const value = e.target.value;
    this.setState({
      nombre: value,
    });
  }

  handlePrecio(e){
    const value = e.target.value;
    this.setState({
      precio: value,
    });
  }

  handleFoto(e){
    const value = e.target.value;
    this.setState({
      foto: value,
    });
  }

  handleDescripcion(e){
    const value = e.target.value;
    this.setState({
      descripcion: value,
    });
  }

  handleSubmit(id){
    let data = {}
    for (const valor in this.state) {
     if(!(this.state[valor] == "")){
       data[valor] = this.state[valor]
     }
    }
    this.props.updateProducts(id,data)
    this.setState({
      nombre:"",
      precio:"",
      foto:"",
      descripcion:""
    })
   }


  render() {
    return (
      <AdminProducts
        products= {this.props.products}
        deleteProducts={this.deleteProducts}
        handleSubmit = {this.handleSubmit}
        handleNombre = {this.handleNombre}
        handlePrecio={this.handlePrecio}
        handleFoto={this.handleFoto}
        handleDescripcion = {this.handleDescripcion }
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProductsContainer);