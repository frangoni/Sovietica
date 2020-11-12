import axios from "axios";
import { GET_REVIEW } from "../constants";

const getReview = (reviews) => {
  return {
    type: GET_REVIEW,
    payload: reviews,
  };
};

export const fetchReview = (id) => (dispatch) => {
  return axios
    .get(`/api/review/user/${id}`)
    .then((res) => dispatch(getReview(res.data)));
};

export const addReview = (id, data) => {
  axios.post(`/api/review/${id}`, data);
};

export const getReviews = (id) => (dispatch) => {
  return axios
    .get(`/api/review/${id}`)
    .then((res) => dispatch(getReview(res.data)));
};
