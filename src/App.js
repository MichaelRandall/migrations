import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './redux/store'

import Footer from '../src/components/shared/Footer'
import Navbar from '../src/components/shared/Navbar'
import PageNotFound from '../src/components/shared/PageNotFound'

import StatusPage from '../src/components/pages/views/Status'
import AboutPage from '../src/components/pages/views/About'

import CakeContainer from './components/CakeContainer'
import IceCreamContainer from "./components/IceCreamContainer"
import PieContainer from "./components/PieContainer"

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
        <Navbar />
        <Switch>
          <Route exact path="/" component={CakeContainer} />
          <Route path="/icecream" component={IceCreamContainer} />
          <Route path="/pie" component={PieContainer} />
          <Route path="/about" component={AboutPage} />
          {/* <Route path="/members" component={MembersPage} /> */}
          {/* <Route path="/migrations" component={MigrationsPage} /> */}
          {/* <Route path="/migration/:name" component={ManageMigrationPage} /> */}
          {/* <Route path="/migration" component={ManageMigrationPage} /> */}
          <Route path="/status" component={StatusPage} />
          <Route component={PageNotFound} />
        </Switch>
        <CakeContainer />
        <IceCreamContainer />
        <PieContainer />
      </div>
      <Footer />
    </Provider>
  );
}

export default App;
