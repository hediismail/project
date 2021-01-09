import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReservation } from "../../JS/actions/reservation";

const RequestForum = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [reservationType, setReservationType] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const idProfile = useSelector((state) => state.profileReducer.profile._id);
  return (
    <div>
      <div>
        <span>FirstName:</span>
        <input
          name="firstName"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </div>
      <div>
        <span>LastName:</span>
        <input
          name="lastName"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>
      <span>Type of Request:</span>
      <select
        onChange={(e) => {
          setReservationType(e.target.value);
        }}
      >
        <option value="Party">Party</option>
        <option value="wedding">Wedding</option>
        <option value="birthday">Birthday</option>
      </select>
      <br />
      <div>
        <span>choose date:</span>
        <input
          name="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
      <button
        onClick={(e) => {
          dispatch(
            addReservation(
              { firstName, lastName, reservationType, date },
              idProfile
            )
          );
          setFirstName("");
          setLastName("");
          setDate("");
        }}
      >
        Send
      </button>
    </div>
  );
};

export default RequestForum;
