import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllConfirmedReservation } from '../../JS/actions/reservation';
import AcceptedReservation from '../AcceptedReservation/AcceptedReservation';

const AcceptedReservationList = (props) => {
	const idProfile = props.match.params.id;
	const reservations = useSelector((state) => state.reservationReducer.reservations);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllConfirmedReservation(idProfile));
	}, []);

	return (
		<div>
			{!reservations ? (
				<div className="loader"></div>
			) : (
				reservations.map((el) => <AcceptedReservation reservation={el} />)
			)}
		</div>
	);
};

export default AcceptedReservationList;
