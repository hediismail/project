import React from 'react';
import './AcceptedReservation.css';

const AcceptedReservation = ({ reservation }) => {
	return (
		<div>
			<div className="reservationLi">
				<ul className="AcceptedLi">
					<li className="liAccept">
						<p className="AcceptLi">{reservation.firstName}</p>
						<p className="AcceptLi">{reservation.lastName}</p>
						<p className="AcceptLi">{reservation.reservationType}</p>
						<p className="AcceptLis">{reservation.date}</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default AcceptedReservation;
