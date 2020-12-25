import {React, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getprofiles} from '../../JS/actions/profile';
import Profile from '../profile/profile';
import './clown.css'

const Clown = () => {
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.profileReducer.profiles);
  const loadprofiles = useSelector(
    (state) => state.profileReducer.loadprofiles
  );
  console.log(profiles.catégorie);

  useEffect(() => {
    dispatch(getprofiles());
  }, []);
  const [région, setRégion] = useState('');
  if (région == '') {
    return (
      <div className='pageclown'>
        <div>
          <select
            className="btnselect"
            onChange={(e) => setRégion(e.target.value)}
          >
            <option id="pass" value=""></option>
            <option id="pass" value="Tunis">
              Tunis
            </option>
            <option id="pass" value="Ariana">
              Ariana
            </option>
            <option id="pass" value="Ben Arous">
              Ben Arous
            </option>
            <option id="pass" value="Mannouba">
              Mannouba
            </option>
          </select>
        </div>

        {profiles
          .filter((el) => el.catégorie === 'Clown')

          .map((el) => (
            <Profile key={el._id} profile={el} />
          ))}
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <select
            className="btnselect"
            onChange={(e) => setRégion(e.target.value)}
          >
            <option id="pass" value=""></option>
            <option id="pass" value="Tunis">
              Tunis
            </option>
            <option id="pass" value="Ariana">
              Ariana
            </option>
            <option id="pass" value="Ben Arous">
              Ben Arous
            </option>
            <option id="pass" value="Mannouba">
              Mannouba
            </option>
          </select>
        </div>

        {profiles
          .filter((el) => el.catégorie === 'Clown' && el.région === région)

          .map((el) => (
            <Profile key={el._id} profile={el} />
          ))}
      </div>
    );
  }
};
export default Clown;
