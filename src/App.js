import React from "react";
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/cakes/CakeContainer'

//Vendor
// import { Route, Switch } from "react-router-dom";

//Custom Components
// import Dashboard from "./components/dashboard/views/Dashboard";
// import PageNotFound from "./components/shared/PageNotFound";

//Shared Components
// const Footer = lazy(() => import("./components/shared/Footer"));
// const Navbar = lazy(() => import("./components/shared/Navbar"));

//Lazy Loaded Views
// const About = lazy(() => import("./components/pages/views/About"));
// const Management = lazy(() =>
//   import("./components/migrations/views/Management")
// );
// const Members = lazy(() => import("./components/members/views/Members"));
// const Modals = lazy(() => import("./components/shared/modals/Modals"));
// const Migrations = lazy(() =>
//   import("./components/migrations/views/Migrations")
// );
// const Status = lazy(() => import("./components/pages/views/Status"));

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <CakeContainer />
    </div>
    </Provider>
  );
}

export default App;
