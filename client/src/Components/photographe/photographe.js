import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getprofiles } from '../../JS/actions/profile';
import Profile from '../profile/profile';
import './photographe.css';

const Photographe = () => {
	const dispatch = useDispatch();
	const profiles = useSelector((state) => state.profileReducer.profiles);
	useEffect(() => {
		dispatch(getprofiles());
	}, []);
	const [région, setRégion] = useState('All The Régions');
	if (région === 'All The Régions') {
		return (
			<div className="pagephotographe">
				<div>
					<select className="btnselect" onChange={(e) => setRégion(e.target.value)}>
						<option id="pass" value="All The Régions">
							All The Régions
						</option>
						<option id="pass" value="Tunis">
							Tunis
						</option>
						<option id="pass" value="Ariana">
							Ariana
						</option>
						<option id="pass" value="Ben Arous">
							Ben Arous
						</option>
						<option id="pass" value="Mannouba">
							Mannouba
						</option>
					</select>
				</div>

				{profiles
					.filter((el) => el.catégorie === 'Photographe')

					.map((el) => (
						<Profile key={el._id} profile={el} />
					))}
			</div>
		);
	} else {
		return (
			<div>
				<div>
					<select className="btnselect" onChange={(e) => setRégion(e.target.value)}>
						<option id="pass" value="All The Régions">
							All The Régions
						</option>
						<option id="pass" value="Tunis">
							Tunis
						</option>
						<option id="pass" value="Ariana">
							Ariana
						</option>
						<option id="pass" value="Ben Arous">
							Ben Arous
						</option>
						<option id="pass" value="Mannouba">
							Mannouba
						</option>
					</select>
				</div>
				<div className="profilelist">
					{profiles
						.filter((el) => el.catégorie === 'Photographe' && el.région === région)

						.map((el) => (
							<Profile key={el._id} profile={el} />
						))}
				</div>
			</div>
		);
	}
};
export default Photographe;
