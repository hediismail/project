import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllConfirmedReservation } from "../../JS/actions/reservation";
import AcceptedReservation from "../AcceptedReservation/AcceptedReservation";

const AcceptedReservationList = (props) => {
  const idProfile = props.match.params.id;
  const reservations = useSelector(
    (state) => state.reservationReducer.reservations
  );
  const loading = useSelector(
    (state) => state.reservationReducer.loadReservation
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllConfirmedReservation(idProfile));
  }, []);

  return (
    <div>
      {!reservations ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        reservations.map((el) => <AcceptedReservation reservation={el} />)
      )}
    </div>
  );
};

export default AcceptedReservationList;
