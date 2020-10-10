import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Dashboard from "../Component/Dashboard";
import Register from "../Component/Register"
import Login from "../Component/Login";

function Routes() {
    return (
      <>
        <Switch>
          {/* <Route path="/login" render={(props) => <Login {...props} />} /> */}
          <Route path="/Dashboard" exact render={() => <Dashboard />} />
          <Route path="/register" render={() => <Register />} />
          <Route>
            <div>Error 404 </div>
            <Link to="/">GO BACK HOME</Link>
          </Route>
        </Switch>
      </>
    );
  }
  
  export { Routes };