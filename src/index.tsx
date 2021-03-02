import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./modules";
import CounterContainer from "./CounterContainer";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,
  document.getElementById("root")
);
