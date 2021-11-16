import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {

  let { Auth } = useSelector((state) => state);

  return (
    <Route
      {...rest}
      render={(props) =>
        Auth.Perm.role_name && restricted ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;