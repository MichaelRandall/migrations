import React from "react";

//Vendor
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//Custom Components
import App from "./App";

//Custom History Push API Object
import history from "./history";
import axios from "axios";

//Custom CSS
import "./dist/css/app.css";
import "./dist/css/colors.css";
import "./dist/css/form.css";
import "./dist/css/format.css";

//Redux
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";

//Axios Base configuration
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
//axios.defaults.headers.common["X-Api-Key"] = process.env.REACT_APP_API_KEY;
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

axios.interceptors.response.use(
  function(response) {
    if (!response.hasOwnProperty("data")) return response;
    console.groupEnd();
    return response.data;
  },
  function(error) {
    console.group("API Errors");
    console.log("Error Status Code: ", error.status);
    switch (error.status) {
      case 401:
        return store.disptach({
          isAdmin: false,
          isAuthenticated: false,
          type: "AUTH_STATUS_CHANGE"
        });
      case 403:
        return Promise.reject({ error: error.message });
      default:
        return Promise.reject({ error: error.message });
    }
  }
);

const store = configureStore();

// App entry point here
render(
  <ReduxProvider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </ReduxProvider>,
  document.getElementById("app")
);
