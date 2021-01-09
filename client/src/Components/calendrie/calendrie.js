import React, { useEffect, useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';
import { editCalendrier } from '../../JS/actions/profile';
import { useDispatch, useSelector } from 'react-redux';

const Calendrie = ({ calendrier }) => {
	const profile = useSelector((state) => state.profileReducer);
	const user = useSelector((state) => state.userReducer.user);
	const dispatch = useDispatch();
	const [selectedDays, setSelectedDays] = useState([]);
	useEffect(() => {
		setSelectedDays(calendrier);
	}, [calendrier]);
	return (
		<div>
			<Calendar
				defaultvalue={calendrier}
				value={selectedDays}
				onChange={setSelectedDays}
				shouldHighlightWeekends
			/>
			{user._id === profile.profile.userId ? (
				<button
					onClick={() => {
						dispatch(editCalendrier(profile.profile._id, selectedDays));
					}}
				>
					save calendrier
				</button>
			) : null}
		</div>
	);
};

export default Calendrie;
