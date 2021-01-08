import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import {
  acceptReqReservation,
  declineReqReservation,
} from "../../JS/actions/reservation";
import "./Reservation.css";
const Reservation = ({ reservation, idProfile }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  return (
    <div>
      <ul className="list">
        <li className="reservations">
          <div className="Details">
            <p className="reservation">{reservation.firstName}</p>
            <button className="Detail" onClick={handleShow}>
              Details
            </button>
          </div>

          <Modal className="ModalMain" show={show}>
            <Modal.Body>
              <div className="ModalScript">
                <p className="ModalFont">First Name:</p>
                <p className="ModalAns">{reservation.firstName}</p>
              </div>
              <div className="ModalScript">
                <p className="ModalFont">Last Name:</p>
                <p className="ModalAns">{reservation.lastName}</p>
              </div>
              <div className="ModalScript">
                <p className="ModalFont">Date:</p>
                <p className="ModalAns">{reservation.date}</p>
              </div>

              <div className="ModalScript">
                <p className="ModalFont">Type:</p>
                <p className="ModalAns">{reservation.reservationType}</p>
              </div>
            </Modal.Body>
            <Modal.Footer className="modalFooter">
              <button
                className="ModalBtn ModalBtn1"
                onClick={() => {
                  handleClose();
                  dispatch(declineReqReservation(idProfile, reservation._id));
                }}
              >
                Decline
              </button>
              <button
                className="ModalBtn ModalBtn2"
                onClick={() => {
                  handleClose();
                  dispatch(acceptReqReservation(idProfile, reservation._id));
                }}
              >
                Accept
              </button>
              <button className="ModalBtn ModalBtn3" onClick={handleClose}>
                Close
              </button>
            </Modal.Footer>
          </Modal>
          {/* <p className="reservation">{reservation.lastName}</p> */}
          {/* <p className="reservation">{reservation.reservationType}</p> */}
          {/* <p className="reservation">{reservation.date}</p> */}
        </li>
        {/* <button
          onClick={() => {
            dispatch(declineReqReservation(idProfile, reservation._id));
          }}
        >
          Decline
        </button> */}
        {/* <button
          onClick={() => {
            dispatch(acceptReqReservation(idProfile, reservation._id));
          }}
        >
          Accept
        </button> */}
      </ul>
    </div>
  );
};
export default Reservation;
