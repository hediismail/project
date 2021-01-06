import React, {useEffect, useState} from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import {Calendar} from 'react-modern-calendar-datepicker';
import {
  editCalendrier,
  editProfile,
  getprofilebyid,
} from '../../JS/actions/profile';
import {useDispatch, useSelector} from 'react-redux';
// import {useHistory} from 'react-router-dom';

const Calendrie = () => {
  const profile = useSelector((state) => state.profileReducer.profile);

  const dispatch = useDispatch();
  //   const history = useHistory();
  // ✅ a change in default state: []
  //   useEffect(() => {
  //     getprofilebyid(profile._id);
  //   }, []);
  console.log(profile);
  const calendrier = useSelector(
    (state) => state.profileReducer.profile.calendrie
  );

  //   const calend = Array.from(calendrier);

  //   console.log({calendrier: calendrier.forEach((el) => el.shift())});
  const [selectedDays, setSelectedDays] = useState(calendrier);
  //   profile.calendrie = selectedDays;
  //   console.log(profile.calendrie);

  return (
    <div>
      <Calendar
        value={selectedDays}
        onChange={setSelectedDays}
        shouldHighlightWeekends
      />
      <button
        onClick={() => {
          dispatch(editCalendrier(profile._id, selectedDays));
        }}
      >
        save calendrier
      </button>
    </div>
  );
};

export default Calendrie;
