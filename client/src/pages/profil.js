import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getprofilebyid } from '../JS/actions/profile';
import Publication from '../Components/Publication/Publication';
import './profile.css';
import { Link } from 'react-router-dom';
import { ToggleTrue } from '../JS/actions/profile';
import {
	deletePublication,
	getPublicationById,
	updateDisike,
	updateLike,
	updateComment,
} from '../JS/actions/Publication';
import Calendrie from '../Components/calendrie/calendrie';
import { getAllRequestReservation } from '../JS/actions/reservation';
import { useState } from 'react';
import Comment from '../Components/comment/Comment';

const Profil = (props) => {
	const idprofile = props.match.params.id;
	const profile = useSelector((state) => state.profileReducer);
	const user = useSelector((state) => state.userReducer.user);
	const loading = useSelector((state) => state.publicationReducer.loadPublications);
	const publications = useSelector((state) => state.publicationReducer.publications);
	const publicationsAdded = useSelector((state) => state.publicationReducer.publication.publication);
	useEffect(() => {
		dispatch(getPublicationById(idprofile));
	}, [publicationsAdded]);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getprofilebyid(idprofile));
		dispatch(getAllRequestReservation(idprofile));
	}, []);
	const nbrReservation = useSelector((state) => state.reservationReducer.reservations);
	const [commentAdded, setCommentAdded] = useState('');
	const pro = profile.profile;
	const calendrier = pro.calendrie;
	return (
		<div>
			{/* Page Container */}
			<div className="w3-container w3-content" style={{ maxWidth: '1400px', marginTop: '80px' }}>
				{/* The Grid */}
				<div className="w3-row">
					{/* Left Column */}
					<div className="w3-col m3">
						{/* Profile */}
						<div className="w3-card w3-round w3-white">
							<div className="w3-container">
								<h4 className="w3-center">{pro.profileName}</h4>
								<p className="w3-center">
									<img
										src={pro.filePath}
										className="w3-circle"
										style={{ height: '106px', width: '106px' }}
										alt="Avatar"
									/>
								</p>
								<hr />
								<p>
									<i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme" /> {pro.catégorie}
								</p>
								<p>
									<i className="fa fa-phone fa-fw w3-margin-right w3-text-theme" /> {pro.contact}
								</p>
								{!user ? null : user._id === profile.profile.userId ? (
									<Link to={`/addprofile`}>
										<button
											className="w3-button w3-theme-d2 w3-margin-bottom"
											onClick={() => {
												dispatch(ToggleTrue(), getprofilebyid(idprofile));
											}}
										>
											Setting
										</button>
									</Link>
								) : null}
							</div>
						</div>
						<br />
						{/* Accordion */}
						<div className="w3-card w3-round">
							<div className="w3-white">
								<button
									onclick="myFunction('Demo3')"
									className="w3-button w3-block w3-theme-l1 w3-left-align"
								>
									<i className="fa fa-users fa-fw w3-margin-right" /> My Photos
								</button>
								<div id="Demo3" className="w3-hide w3-container w3-show">
									<div className="w3-row-padding">
										<br />
										{publications
											? publications.map((el) =>
													el.publicationPhoto ? (
														<div className="w3-half">
															<img
																src={el.publicationPhoto}
																alt=""
																style={{ width: '100%' }}
																className="w3-margin-bottom"
															/>
														</div>
													) : null
											  )
											: null}
									</div>
								</div>
							</div>
						</div>
						<br />
						{/* Interests */}
						<div className="w3-card w3-round w3-white w3-hide-small">
							<div className="w3-container">
								<p>About Us</p>
								<p>{pro.about}</p>
							</div>
						</div>

						<br />
						<Calendrie calendrier={calendrier} />
					</div>

					{/* Middle Column */}
					<div className="w3-col m7">
						{/* add Publication */}
						{!user ? null : user._id === profile.profile.userId ? (
							<Publication idprofile={idprofile} />
						) : null}
						{/* load publication */}
						{loading ? (
							<div className="loader w3-center"></div>
						) : (
							publications
								.slice(0)
								.reverse()
								.map((el) => (
									<div className="w3-container w3-card w3-white w3-round w3-margin">
										<br />
										<img
											src={pro.filePath}
											alt="Avatar"
											className="w3-left w3-circle w3-margin-right"
											style={{ width: '60px' }}
										/>
										<span className="w3-right w3-opacity">{el.date}</span>
										{el.publication && el.publicationPhoto ? (
											<div>
												<h3 style={{ fontFamily: 'serif' }}>{el.publication}</h3>
												<img src={el.publicationPhoto} alt="" style={{ width: '100%' }} />
											</div>
										) : el.publicationPhoto ? (
											<img src={el.publicationPhoto} alt="" style={{ width: '100%' }} />
										) : (
											<h3>{el.publication}</h3>
										)}
										<hr className="w3-clear" />
										<span className="w3-left">
											<i className="fas fa-heart" style={{ color: 'red' }}></i>{' '}
											{el.usersLiked.length}{' '}
											{el.usersLiked.length === 0 || el.usersLiked.length === 1
												? 'like'
												: 'likes'}
										</span>
										<button
											onClick={() => {
												el.usersLiked.find((el) => el.idUser === user._id)
													? dispatch(updateDisike(el._id, { idUser: user._id }, idprofile))
													: dispatch(updateLike(el._id, { idUser: user._id }, idprofile));
											}}
											type="button"
											className="w3-button w3-theme-d1 w3-margin-bottom"
										>
											<i className="fa fa-thumbs-up" /> &nbsp;
											{el.usersLiked.find((el) => el.idUser === user._id) ? 'Dislike' : 'Like'}
										</button>
										<button
											data-toggle="dropdown"
											type="button"
											className="w3-button w3-theme-d2 w3-margin-bottom"
										>
											<i className="fa fa-comment" /> &nbsp;Comment
										</button>
										<div className="dropdown-menu">
											<input
												placeholder="Add a comment..."
												style={{ width: '90%' }}
												value={commentAdded}
												onChange={(e) => {
													setCommentAdded(e.target.value);
												}}
											/>
											<input
												type="submit"
												onClick={() => {
													dispatch(
														updateComment(el._id, { comments: commentAdded }, idprofile)
													);
													setCommentAdded('');
												}}
											/>
										</div>
										{!user ? null : user._id === el.userId || user.role === 'Admin' ? (
											<button
												onClick={() => dispatch(deletePublication(el._id, idprofile))}
												type="button"
												className="w3-button w3-theme-d2 w3-margin-bottom"
											>
												<i className="far fa-trash-alt"></i> Delete
											</button>
										) : null}
										<br />
										<div className="w3-left">
											<Comment comment={el} idprofile={idprofile} user={user} />
										</div>
									</div>
								))
						)}
						{/* End Middle Column */}
					</div>
					{/* Right Column */}
					<div className="w3-col m2">
						{!user ? null : user._id === profile.profile.userId ? (
							<div className="w3-card w3-round w3-white w3-center">
								<div className="w3-container">
									<Link to={`/requests/${idprofile}`}>
										<div className="nbrNotification">
											<button className="w3-button w3-theme-d2 w3-margin-bottom">
												{nbrReservation ? nbrReservation.length : '0'} Notifications
											</button>
										</div>
									</Link>
									<br />
									<Link to={`/acceptedRequests/${idprofile}`}>
										<button className="w3-button w3-theme-d2 w3-margin-bottom">
											Accepted Requests
										</button>
									</Link>
									<br />
								</div>
							</div>
						) : (
							<Link to="/requestForum">
								<button className="w3-button w3-theme-d2 w3-margin-bottom">Send Request</button>
							</Link>
						)}
						<br />
						{/* End Right Column */}
					</div>
					{/* End Grid */}
				</div>
				{/* End Page Container */}
			</div>
			<br />
		</div>
	);
};

export default Profil;
