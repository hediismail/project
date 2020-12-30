import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  if (isAuth) {
    return <Route exact  component={Component} {...rest} />;
    
  } 
{return <Redirect to="/Signup" />;}
};

export default PrivateRoute;
// const isAuth = localStorage.getItem("token");


