  
import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  let { Auth } = useSelector((state) => state);

  return (
    <Route
      {...rest}
      render={(props) =>
        Auth.Perm.role_name ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;