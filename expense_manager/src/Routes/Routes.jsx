import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Dashboard from "../Component/Dashboard";
import Register from "../Component/Register"
import Login from "../Component/Login";
import Home from "../Component/Home"


function Routes() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/login" render={(props) => <Login {...props} />} /> */}
          <Route path="/dashboard" render={() => <Dashboard />} />
          <Route path="/register" render={() => <Register />} />
          <Route path="/login" render={()=><Login />} />
          <Route>
            <div>Error 404 </div>
            <Link to="/">GO BACK HOME</Link>
          </Route>
        </Switch>
      </>
    );
  }
  
  export { Routes };