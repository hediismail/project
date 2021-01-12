import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteprofilebyid } from '../../JS/actions/profile';
import './profile.css';

const Profile = ({ profile, user }) => {
	const dispatch = useDispatch();
	return (
		<div className="image-area">
			<div className="img-wrapper">
				<img src={profile.filePath} alt={profile.fileName} />
				<h2> {profile.profileName} </h2>
				<ul>
					<li>
						<Link to={`/profile/${profile._id}`}>
							<a>
								<i class="far fa-address-card"> Detail</i>
							</a>
						</Link>
					</li>
					{!user ? null : user.role === 'Admin' ? (
						<li>
							<a onClick={() => dispatch(deleteprofilebyid(profile._id))}>
								<i class="fas fa-trash-alt"> </i>
							</a>
						</li>
					) : null}
				</ul>
			</div>
		</div>
	);
};
export default Profile;
