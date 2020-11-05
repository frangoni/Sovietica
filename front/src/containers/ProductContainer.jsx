import React from 'react';
import { connect } from 'react-redux';
import Product from "../components/Product"
import {fetchProduct, fetchReviews, addCart} from "../../store/action-creators/productsActions"


class ProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.fetchProduct(this.props.idProducto)
    this.props.fetchReviews(this.props.idProducto)
  }

  /* componentDidUpdate(prevProps) {
    console.log("prev props", prevProps)
    if (this.props.idProduct !== prevProps.idProduct) {
      this.props.fetchProduct(this.props.idProduct)
    }
  } */


  handleSubmit(event) {
    const data = {talle : this.props.talle, color: this.props.color}
    event.preventDefault();
    this.props.addCart(this.props.idProducto, data)
    console.log("agregado al carrito")
  }


  render() {
    return (
      <div>
        <Product
          nombre = {this.props.nombre}
          idProducto = {this.props.idProduct}
          descripcion = {this.props.descripcion}
          foto = {this.props.foto}
          precio = {this.props.precio}
          reviews = {this.props.reviews}
          handleSubmit = {this.handleSubmit}
          /* talle = {this.props.talle}
          color = {this.props.color} */
        />
      </div>
    )
  }
}

const mapStateToProps = function (state, ownProps) {
  console.log("state", state)
  return {
    nombre: state.products.product.nombre,
    idProducto: ownProps.match.params.id,
    descripcion: state.products.product.descripcion,
    foto: state.products.product.foto,
    precio: state.products.product.precio,
    talle: state.products.product.talle,
    color: state.products.product.color,
    reviews: state.products.product.reviews
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    fetchProduct: (str) => dispatch(fetchProduct(str)),
    fetchReviews: (str) => dispatch(fetchReviews(str)),
    addCart: (id, data) => dispatch(addCart(id, data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)