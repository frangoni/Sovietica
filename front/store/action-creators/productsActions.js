import axios from "axios";

const fetchOneProduct = (productId) => ({
  type: "FETCH_PRODUCT",
  payload: productId,
});

const Review = (productId) => ({
  type: "FETCH_REVIEWS",
  payload: productId,
});

const fetchOneStock = (product) => ({
  type: "FETCH_STOCK",
  payload: product,
});

export const fetchProduct = (productId) => {
  return (dispatch) =>
    axios
      .get(`/api/products/${productId}`)
      .then((res) => res.data)
      .then((product) => dispatch(fetchOneProduct(product)));
};

export const fetchStock = (productId) => {
  return (dispatch) =>
    axios
      .get(`/api/stock/${productId}`)
      .then((res) => res.data)
      .then((product) => dispatch(fetchOneStock(product)));
};

export const fetchReviews = (productId) => {
  return (dispatch) =>
    axios
      .get(`/api/review/${productId}`)
      .then((res) => res.data)
      .then((reviewProduct) => dispatch(Review(reviewProduct)));
};

export const addCart = (productId, data) => {
  return () => {
    axios.post(`/api/cart/${productId}`, data).then((res) => res.data);
  };
};
