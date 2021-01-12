import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './profileslist.css';
import { getprofiles } from '../../JS/actions/profile';
import Profile from '../profile/profile';
const Profileslist = (région) => {
	console.log(région.région);
	const dispatch = useDispatch();
	const profiles = useSelector((state) => state.profileReducer.profiles);
	const user = useSelector((state) => state.userReducer.user);
	const loadprofiles = useSelector((state) => state.profileReducer.loadprofiles);
	useEffect(() => {
		dispatch(getprofiles());
	}, []);
	if (région.région === 'All The Régions') {
		return (
			<div className="profilelist">
				{loadprofiles ? (
					<div className="loader"></div>
				) : (
					profiles.map((el) => <Profile key={el._id} profile={el} user={user} />)
				)}
			</div>
		);
	} else {
		return (
			<div className="profilelist">
				{profiles
					.filter((el) => el.région === région.région)
					.map((el) => (
						<Profile key={el._id} profile={el} />
					))}
			</div>
		);
	}
};

export default Profileslist;
