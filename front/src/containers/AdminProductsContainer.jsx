import React from "react";
import { connect } from "react-redux";
import AdminProducts from "../components/AdminProducts";
import {fetchProducts,
        fetchCategories,
        createProducts, 
        createStock} from "../../store/action-creators/admin"

const mapStateToProps = function (state) {
  return {
      products : state.admin.products,
      categories : state.admin.categories
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
      fetchProducts : () => dispatch(fetchProducts()),
      fetchCategories : () => dispatch(fetchCategories()),
      createProducts : (data) => dispatch(createProducts(data)),
      createStock : (data) => dispatch(createStock(data))
  };
};

class AdminProductsContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        nombre: "",
        precio : "",
        foto : "",
        descripcion : "",
        categoria : "",
        talle: "",
        color: "",
        cantidad: "",
        productos: ""
    }
    this.handleNombre = this.handleNombre.bind(this)
    this.handlePrecio = this.handlePrecio.bind(this)
    this.handleDescripcion = this.handleDescripcion.bind(this)
    this.handleFoto = this.handleFoto.bind(this)
    this.handleCategoria = this.handleCategoria.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.handleTalle = this.handleTalle.bind(this)
    this.handleColor = this.handleColor.bind(this)
    this.handleCantidad = this.handleCantidad.bind(this)
    this.handleProducto = this.handleProducto.bind(this)
    this.handleStock = this.handleStock.bind(this)
  }

  componentDidMount(){
      this.props.fetchProducts()
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
        this.props.createProducts({
            nombre : this.state.nombre,
            precio : this.state.precio,
            descripcion : this.state.descripcion,
            foto : this.state.foto,
            categoria : this.state.categoria
        })
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
        this.props.createStock({
            cantidad : this.state.cantidad,
            talle : this.state.talle,
            color : this.state.color,
            productos : this.state.productos
        })
    }

  render() {
    return (
      <AdminProducts 
        products = {this.props.products}
        categories = {this.props.categories}
        handleNombre = {this.handleNombre}
        handleFoto = {this.handleFoto}
        handlePrecio = {this.handlePrecio}
        handleDescripcion = {this.handleDescripcion}
        handleCategoria = {this.handleCategoria}
        handleSubmit = {this.handleSubmit}

        handleTalle = {this.handleTalle}
        handleColor = {this.handleColor}
        handleCantidad = {this.handleCantidad}
        handleProducto = {this.handleProducto}
        handleStock = {this.handleStock}
      />
     
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProductsContainer);