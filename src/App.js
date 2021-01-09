import React, { Suspense, lazy } from "react";

//Vendor
import { Route, Switch } from "react-router-dom";

//Custom Components
import Dashboard from "./components/dashboard/presentationComponents/Dashboard";
import PageNotFound from "./components/shared/PageNotFound";

//Shared Components
const Footer = lazy(() => import("./components/shared/Footer"));
const Navbar = lazy(() => import("./components/shared/Navbar"));

//Lazy Loaded Views
const About = lazy(() =>
  import("./components/pages/presentationComponents/About")
);
const Management = lazy(() =>
  import("./components/migrations/presentationComponents/Management")
);
const Members = lazy(() =>
  import("./components/members/presentationComponents/Members")
);
const Modals = lazy(() => import("./components/shared/modals/Modals"));
const Migrations = lazy(() =>
  import("./components/migrations/presentationComponents/Migrations")
);
const Status = lazy(() =>
  import("./components/pages/presentationComponents/Status")
);

function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/about" component={About} />
        <Route path="/members" component={Members} />
        <Route path="/migration/:name" component={Management} />
        <Route path="/migrations" component={Migrations} />
        <Route path="/status" component={Status} />
        <Route component={PageNotFound} />
      </Switch>
      {/* <Modals /> */}
      <Footer />
    </Suspense>
  );
}

export default App;
