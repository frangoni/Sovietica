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

export const fetchAdminOrders = () => {
  return (dispatch) => {
    axios
      .get("/api/order/admin")
      .then((rta) => {
       console.log(rta.data,"ESTA ES LA RTA.DATA")
        dispatch(getOrder(rta.data));
      })
      .catch((err) => err);
  };
};

const changeOrders = (order) => ({
  type: "UPDATE_ORDERS",
  order,
})

export const updateOrders = (id,estado)=>(dispatch)=>{
  axios.put(`/api/order/admin/${id}` , {estado: estado})
  
  .then(res => res.data)
    .then(orders=> 
      {console.log(orders, "ORDERS")
        dispatch(changeOrders(orders))})
}