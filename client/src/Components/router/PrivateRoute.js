import React from 'react'
import { Redirect, Route } from 'react-router-dom'
const PrivateRoute = ({ component: Dashbord, ...rest }) => {
  const isAuth = localStorage.getItem('token')

  if (isAuth) {
    return <Route component={Dashbord} {...rest} />
  }
  return <Redirect path="/" />
}

export default PrivateRoute
