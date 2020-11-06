import React from "react";
import { connect } from "react-redux";
import Product from "../components/Product";
import {
  fetchProduct,
  fetchReviews,
  addCart,
  fetchStock,
} from "../../store/action-creators/productsActions";

class ProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      talle: "",
      color: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeTalle = this.handleChangeTalle.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
  }
  componentDidMount() {
    console.log("esto es idprocuto", this.props.idProducto);
    this.props.fetchProduct(this.props.idProducto);
    this.props.fetchReviews(this.props.idProducto);
    this.props.fetchStock(this.props.idProducto);
  }

  /* componentDidUpdate(prevProps) {
    console.log("prev props", prevProps)
    if (this.props.idProduct !== prevProps.idProduct) {
      this.props.fetchProduct(this.props.idProduct)
    }
  } */

  handleChangeTalle(evt) {
    console.log(evt.target.value);
    const value = evt.target.value;
    this.setState({
      talle: value,
    });
  }

  handleChangeColor(evt) {
    console.log(evt.target.value);
    const value = evt.target.value;
    this.setState({
      color: value,
    });
  }

  handleSubmit() {
    console.log("aca esta el handlesubmit", this.state);
    this.props.addCart(this.props.idProducto, this.state);
  }

  render() {
    return (
      <div>
        <Product
          nombre={this.props.nombre}
          idProducto={this.props.idProduct}
          descripcion={this.props.descripcion}
          foto={this.props.foto}
          precio={this.props.precio}
          reviews={this.props.reviews}
          handleSubmit={this.handleSubmit}
          handleChangeColor={this.handleChangeColor}
          handleChangeTalle={this.handleChangeTalle}
          stocks={this.props.stocks}
          /* talle = {this.props.talle}
          color = {this.props.color} */
        />
      </div>
    );
  }
}

const mapStateToProps = function (state, ownProps) {
  console.log("state", state);
  return {
    nombre: state.products.product.nombre,
    idProducto: ownProps.match.params.id,
    descripcion: state.products.product.descripcion,
    foto: state.products.product.foto,
    precio: state.products.product.precio,
    stocks: state.products.stock,
    reviews: state.products.product.reviews,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchProduct: (str) => dispatch(fetchProduct(str)),
    fetchReviews: (str) => dispatch(fetchReviews(str)),
    addCart: (id, data) => dispatch(addCart(id, data)),
    fetchStock: (str) => dispatch(fetchStock(str)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
