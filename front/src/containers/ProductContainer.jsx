import React from "react";
import { connect } from "react-redux";
import Product from "../components/Product";
import {
  fetchProduct,
  addCart,
  fetchStock,
} from "../../store/action-creators/productsActions";
import { getReviews } from "../../store/action-creators/review";
import Axios from "axios";

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
    this.props.fetchProduct(this.props.idProducto);
    this.props.getReviews(this.props.idProducto);
    this.props.fetchStock(this.props.idProducto);
  }

  /* componentDidUpdate(prevProps) {
    console.log("prev props", prevProps)
    if (this.props.idProduct !== prevProps.idProduct) {
      this.props.fetchProduct(this.props.idProduct)
    }
  } */

  handleChangeTalle(evt) {
    const value = evt.target.value;
    this.setState({ talle: value });
    this.setState({ color: "" });
  }

  handleChangeColor(evt) {
    const value = evt.target.value;
    this.setState({ color: value });
  }

  handleSubmit() {
    if (this.props.user._id) {
      this.props.addCart(this.props.idProducto, this.state);
      this.props.history.push("/cart");
    } else {
      Axios.post(`/api/cart/local/${this.props.idProducto}`, this.state)
        .then((producto) => {
          let storage = JSON.parse(localStorage.getItem("producto"));
          if (storage == null) storage = [];
          storage.push({ cantidad: 1, productos: [producto.data] });
          localStorage.setItem("producto", JSON.stringify(storage));
        })
        .then(() => this.props.history.push("/cart"));
    }
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
          talle={this.state.talle}
          color={this.state.color}
          user={this.props.user}
        />
      </div>
    );
  }
}

const mapStateToProps = function (state, ownProps) {
  return {
    nombre: state.products.product.nombre,
    idProducto: ownProps.match.params.id,
    descripcion: state.products.product.descripcion,
    foto: state.products.product.foto,
    precio: state.products.product.precio,
    stocks: state.products.stock,
    reviews: state.review.reviews,
    user: state.user.user,
    history: ownProps.history,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchProduct: (str) => dispatch(fetchProduct(str)),
    getReviews: (str) => dispatch(getReviews(str)),
    addCart: (id, data) => dispatch(addCart(id, data)),
    fetchStock: (str) => dispatch(fetchStock(str)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
