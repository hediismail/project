import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Reservation from '../Reservation/Reservation';
import { getAllRequestReservation } from '../../JS/actions/reservation';

const ReservationList = (props) => {
	const idProfile = props.match.params.id;
	const dispatch = useDispatch();
	const reducerReservation = useSelector((state) => state.reservationReducer);
	const reservations = reducerReservation.reservations;
	useEffect(() => {
		dispatch(getAllRequestReservation(idProfile));
	}, []);

	return (
		<div>
			{!reservations ? (
				<div className="loader"></div>
			) : (
				reservations.map((el) => <Reservation reservation={el} idProfile={idProfile} />)
			)}
		</div>
	);
};

export default ReservationList;
