import axios from "axios";
import { SET_USER } from "../constants";

const receiveUser = (user) => ({
  type: SET_USER,
  user,
});

export const fetchUser = (nombre, apellido, email, direccion, telefono, clave) => dispatch =>
  axios.post("/api/user/register", {nombre, apellido, email, direccion, telefono, clave})
    .then(res => res.data)


export const fetchLogin = (email, clave) => (dispatch) => {
  return axios
    .post("/api/user/login", {
      clave: clave,
      email: email,
    })
    .then((res) => dispatch(receiveUser(res.data)));
};

export const fetchLogout = () => (dispatch) => {
  return axios
    .post("/api/user/logout")
    .then(() => dispatch(receiveUser({})))
};

// ver si anda con get o post
export const fetchIsLogged = () => (dispatch) => {
  return axios
    .get("/api/user/me")
    .then((res) => dispatch(receiveUser(res.data)));
};
