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
  return () => {
    axios.delete(`/api/cart/${idProduct}`).then((rta) => rta.data);
  };
};

export const updateCart = (idProduct) => {
  return () => {
    axios.put(`/api/cart/${idProduct}`, cantidad).then((rta) => rta.data);
  };
};
