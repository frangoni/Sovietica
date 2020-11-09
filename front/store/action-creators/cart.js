import axios from "axios";

const traerCarrito = (products) => {
  return {
    type: "TRAER_CARRITO",
    products,
  };
};

export const fetchCart = () => {
  return (dispatch) => {
    axios
      .get("/api/cart")
      .then((rta) => rta.data)
      .then((products) => {
        dispatch(traerCarrito(products));
      });
  };
};

export const deleteCart = (idProduct) => {
  return (dispatch) => {
    axios
      .delete(`/api/cart/${idProduct}`)
      .then((products) => dispatch(traerCarrito(products.data)));
  };
};

export const updateCart = (idProduct, cantidad) => {
  return (dispatch) => {
    axios
      .put(`/api/cart/${idProduct}`, cantidad)
      .then((products) => dispatch(traerCarrito(products.data)));
  };
};
