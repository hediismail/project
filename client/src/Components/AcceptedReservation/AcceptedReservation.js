import React from "react";

const AcceptedReservation = ({ reservation }) => {
  return (
    <div>
      <ul className="list">
        <li className="reservations">
          <p className="reservation">{reservation.firstName}</p>
          <p className="reservation">{reservation.lastName}</p>
          <p className="reservation">{reservation.reservationType}</p>
          <p className="reservation">{reservation.date}</p>
        </li>
      </ul>
    </div>
  );
};

export default AcceptedReservation;
