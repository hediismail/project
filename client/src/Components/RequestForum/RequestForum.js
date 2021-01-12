import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./RequestForum.css";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { addReservation } from "../../JS/actions/reservation";

const RequestForum = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [reservationType, setReservationType] = useState("");
  const [date, setDate] = useState("");
  // const date1 = date.toString().split(" ").slice(1, 4).join("/");
  const dispatch = useDispatch();
  const idProfile = useSelector((state) => state.profileReducer.profile._id);
  // console.log(date.toString().split(" ").slice(1, 4).join("/"));
  return (
    <div className="ForumMain">
      <div className="ForumSec">
        <span className="ForumScr">First Name:</span>
        <input
          className="ForumInp"
          name="firstName"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </div>
      <div className="ForumSec">
        <span className="ForumScr">Last Name:</span>
        <input
          className="ForumInp"
          name="lastName"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>
      <div className="ForumBox">
        <span className="ForumWri">Type of Request:</span>
        <select
          onChange={(e) => {
            setReservationType(e.target.value);
          }}
        >
          <option className="ForumOpt" value="Party">
            Party
          </option>
          <option className="ForumOpt" value="wedding">
            Wedding
          </option>
          <option className="ForumOpt" value="birthday">
            Birthday
          </option>
        </select>
      </div>

      <br />
      <div className="ForumSec">
        <span className="ForumScr">Date:</span>
        <DatePicker
          minDate={new Date()}
          selected={date}
          showTimeSelect
          dateFormat="Pp"
          onChange={(date) => setDate(date)}
        />
        {/* isClearable  */}

        {/* dateFormat="dd/MM/yyyy"  */}
        {/* <input
          className="ForumInp"
          name="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        /> */}
      </div>
      <button
        className="ButtonSend"
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
