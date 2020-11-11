import axios from "axios";

const getOrder = (orders) => {
  return {
    type: "GET_ORDER",
    payload: orders,
  };
};

export const createOrder = (data) => {
  axios
    .post("/api/order", data)
    .then((rta) => {
      rta.data;
    })
    .catch((err) => err);
};

export const fetchOrder = () => {
  return (dispatch) => {
    axios
      .get("/api/order")
      .then((rta) => {
        console.log(rta.data);
        dispatch(getOrder(rta.data));
      })
      .catch((err) => err);
  };
};
