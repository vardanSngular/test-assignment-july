import React from "react";
import { Route, Redirect } from "react-router-dom";
import getUser from "../../utils/getUser";
import Routes from "../../Routes";

interface Props {
  children: any;
  path: string;
  exact?: any;
}

function PrivateRoute({ children }: Props) {
  const user = getUser();
  const { token } = user || {};

  const isAuthenticated = !!token;

  return (
    <Route
      render={() =>
        isAuthenticated ? children : <Redirect to={Routes.login} />
      }
    />
  );
}

export default PrivateRoute;
