import React, { useEffect, useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';
import { editCalendrier } from '../../JS/actions/profile';
import { useDispatch, useSelector } from 'react-redux';


const Calendrie = ({calendrier}) => {
  const profile = useSelector((state) => state.profileReducer);
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const [selectedDays, setSelectedDays] = useState([]);
  useEffect(() => {
    getprofilebyid(profile._id);
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
        //  className="btn btn-primary btn-round btn-primary"
        <button
          className="w3-button w3-theme-d2 w3-margin-bottom"
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
