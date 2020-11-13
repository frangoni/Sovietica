import React from "react";
import { connect } from "react-redux";
import AdminAddProducts from "../components/AdminAddProducts";
import {createProducts, fetchCategories} from "../../store/action-creators/admin";
import { SnackbarProvider } from 'notistack';

const mapStateToProps = function (state) {
  return {
      categories : state.admin.categories
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
      fetchCategories : () => dispatch(fetchCategories()),
      createProducts : (data) => dispatch(createProducts(data)),
  };
};

class AdminAddProductsContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        nombre: "",
        precio : "",
        foto : "",
        descripcion : "",
        categoria : "",
    }
    this.handleNombre = this.handleNombre.bind(this)
    this.handlePrecio = this.handlePrecio.bind(this)
    this.handleDescripcion = this.handleDescripcion.bind(this)
    this.handleFoto = this.handleFoto.bind(this)
    this.handleCategoria = this.handleCategoria.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  componentDidMount(){
      // this.props.fetchProducts()
      this.props.fetchCategories()
  }

  handleNombre(e){
        const value = e.target.value
        this.setState({
            nombre: value
        })
    }

  handlePrecio(e){
      const value = e.target.value
      this.setState({
          precio: value
      })
  }

  handleDescripcion(e){
        const value = e.target.value
        this.setState({
            descripcion: value
        })
    }

    handleFoto(e){
        const value = e.target.value
        this.setState({
            foto: value
        })
    }

    handleCategoria(e){
        const value = e.target.value
        this.setState({
            categoria: value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.createProducts(this.state)
        e.target.reset()
    }


  render() {
    return (
      <SnackbarProvider maxSnack={3}>
      <AdminAddProducts 
        categories = {this.props.categories}
        handleNombre = {this.handleNombre}
        handleFoto = {this.handleFoto}
        handlePrecio = {this.handlePrecio}
        handleDescripcion = {this.handleDescripcion}
        handleCategoria = {this.handleCategoria}
        handleSubmit = {this.handleSubmit}
      />
      </SnackbarProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminAddProductsContainer);