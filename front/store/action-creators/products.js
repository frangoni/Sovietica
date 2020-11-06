import axios from "axios";
import { SET_PRODUCTS } from "../constants";

const receieveProducts = (products) => ({
  type: SET_PRODUCTS,
  products,
});

export const fetchProducts = () => (dispatch) => {
  axios
    .get('/api/products')
    .then((res) => res.data)
    .then((producto) => {
      dispatch(receieveProducts(producto));
    });
};

export const fetchSearchProducts = (value) => (dispatch) => {
  axios
    .get(`/api/products/search/${value}`)
    .then((res) => res.data)
    .then((producto) => {
      dispatch(receieveProducts(producto));
    });
};