import React from 'react';
import { Redirect, Route } from 'react-router-dom';
const PrivateRoute = ({ component: Component, ...rest }) => {
	// const isAuth = useSelector((state) => state.userReducer.isAuth)
	const isAuth = localStorage.getItem('token');

	if (isAuth) {
		return <Route exact component={Component} {...rest} />;
	}
	return <Redirect to="/Signup" />;
};

export default PrivateRoute;
