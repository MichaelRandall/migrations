import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardPage from "./dashboard/DashboardPage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import MembersPage from "./members/MembersPage";
import MigrationsPage from "./migrations/MigrationsPage";
import StatusPage from "./status/StatusPage";
import ManageMigrationPage from "./migrations/ManageMigrationPage";
// import MigrationForm from "./migrations/MigrationForm";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/members" component={MembersPage} />
        <Route path="/migrations" component={MigrationsPage} />
        <Route path="/migration/:name" component={ManageMigrationPage} />
        <Route path="/migration" component={ManageMigrationPage} />
        <Route path="/status" component={StatusPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
