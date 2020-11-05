import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";
import Main from "./containers/Main";

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <Route path="/" component={Main} />
  </BrowserRouter>
</Provider>,
 document.getElementById("app")
);