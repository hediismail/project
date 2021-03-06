import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../JS/actions/user';
import './navbar.css';

const Navbar = () => {
	const isAuth = useSelector((state) => state.userReducer.isAuth);
	const dispatch = useDispatch();
	const user = useSelector((state) => state.userReducer.user);
	return (
		<div>
			<nav className="navbar navbar-inverse navbar-expand-lg bg-dark">
				<div className="container">
					{/* Brand and toggle get grouped for better mobile display */}
					<div className="navbar-translate">
						<Link to={`/`}>
							<h2 className="navbar-brand">Home</h2>
						</Link>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="sr-only">Toggle navigation</span>
							<span className="navbar-toggler-icon" />
							<span className="navbar-toggler-icon" />
							<span className="navbar-toggler-icon" />
						</button>
					</div>
					{/* Collect the nav links, forms, and other content for toggling */}
					<div className="collapse navbar-collapse">
						<ul className="navbar-nav ml-auto">
							<Link to={`/music`}>
								<li className="nav-item">
									<h4 className="nav-link">Music</h4>
								</li>
							</Link>
							<Link to={`/photographe`}>
								<li className="nav-item">
									<h4 className="nav-link">Photographe</h4>
								</li>
							</Link>
							<Link to={`/clown`}>
								<li className="nav-item">
									<h4 className="nav-link">Clown</h4>
								</li>
							</Link>
							<Link to={`/aboutus`}>
								<li className="nav-item">
									<h4 className="nav-link">About us</h4>
								</li>
							</Link>
							{!user ? null : user.role === 'Admin' ? (
								<Link to={`/users`}>
									<li className="nav-item">
										<h4 className="nav-link">List of Users</h4>
									</li>
								</Link>
							) : null}
							<li className="nav-item"></li>
							<li className="nav-item">
								<h4 className="btn btn-rose btn-raised btn-fab btn-round" data-toggle="dropdown">
									<i className="material-icons">email</i>
								</h4>
							</li>
							<li className="dropdown nav-item">
								<h4 className="profile-photo dropdown-toggle nav-link" data-toggle="dropdown">
									<div className="profile-photo-small ">
										<img
											src="./assets/img/faces/parametre.png"
											alt="Circle pic"
											className="rounded-circle img-fluid"
										/>
									</div>
								</h4>
								<div className="dropdown-menu dropdown-menu-right">
									{!user ? null : user.role === 'Artist' ? (
										<Link to={`/profile`}>
											<h4 className="dropdown-item">Mon Profile</h4>
										</Link>
									) : null}
									{isAuth ? (
										<Link to={`/Signup`}>
											<h4
												onClick={() => {
													dispatch(logout());
												}}
												className="dropdown-item"
											>
												LOGOUT
											</h4>
										</Link>
									) : (
										<Link to={`/Signup`}>
											<h4 className="dropdown-item">SIGN IN</h4>
										</Link>
									)}
								</div>
							</li>
						</ul>
					</div>
					{/* /.navbar-collapse */}
				</div>
				{/* /.container*/}
			</nav>
		</div>
	);
};

export default Navbar;
