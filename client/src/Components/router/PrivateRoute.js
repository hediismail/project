import React from "react";
import { Redirect, Route } from "react-router-dom";
const PrivateRoute = ({ component: addprofile, ...rest }) => {
  const isAuth = localStorage.getItem("token");

  if (isAuth) {
    return <Route component={addprofile} {...rest} />;
  }
  return <Redirect path="/Signup" />;
};

export default PrivateRoute;
