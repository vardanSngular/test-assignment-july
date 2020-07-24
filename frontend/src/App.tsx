import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";

import AppProvider from "./AppContext/AppContext";
import Routes from "./Routes";

const App = () => {
  const { login, home } = Routes;

  return (
    <AppProvider>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path={home}>
            <Home />
          </PrivateRoute>
          <Route path={login} component={Login} />
        </Switch>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
