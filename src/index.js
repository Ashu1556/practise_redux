import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import myStore from "./Redux/Store";
import { BrowserRouter } from "react-router-dom";

import CustomProvider from "./Component/Context_api/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={myStore}>
    <BrowserRouter>
      <CustomProvider>
        <App />
      </CustomProvider>
    </BrowserRouter>
  </Provider>
);
