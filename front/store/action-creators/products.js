import axios from "axios";
import { SET_PRODUCTS } from "../constants";

const receiveProducts = (products) => ({
  type: SET_PRODUCTS,
  products,
});



// CATEGORIAS

export const fetchProductsByCat = (catId) => (dispatch) => {
  axios
    .get(`/api/products/category/${catId}`)
    .then((res) => res.data)
    .then((productosByCat) => {
      dispatch(receiveProducts(productosByCat));
    });
};

export const fetchProducts = () => (dispatch) => {
  axios
    .get('/api/products')
    .then((res) => res.data)
    .then((producto) => {
      dispatch(receiveProducts(producto));
    });
};

export const fetchSearchProducts = (value) => (dispatch) => {
  axios
    .get(`/api/products/search/${value}`)
    .then((res) => res.data)
    .then((producto) => {
      dispatch(receiveProducts(producto));
    });
};