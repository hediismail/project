import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import Reservation from "../Reservation/Reservation";
import { getAllRequestReservation } from "../../JS/actions/reservation";

const ReservationList = (props) => {
  const idProfile = props.match.params.id;
  console.log(idProfile);
  const dispatch = useDispatch();
  const reducerReservation = useSelector((state) => state.reservationReducer);
  const reservations = reducerReservation.reservations;
  useEffect(() => {
    dispatch(getAllRequestReservation(idProfile));
  }, []);

  console.log(reservations);

  return (
    <div>
      {!reservations ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        reservations.map((el) => (
          <Reservation reservation={el} idProfile={idProfile} />
        ))
      )}
    </div>
  );
};

export default ReservationList;
