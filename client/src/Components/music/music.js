import {React, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getprofiles} from '../../JS/actions/profile';
import Profile from '../profile/profile';
import './music.css'

const Music = () => {
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
    <div className='pagemusic'>
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
<div className='profils'>
      {profiles
        .filter((el) => el.catégorie === 'Music')

        .map((el) => (
          <Profile key={el._id} profile={el} />
        ))}
        </div>
    </div>
  );
}
else{
    return(<div>
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
          .filter((el) => el.catégorie === 'Music' && el.région===région)
  
          .map((el) => (
            <Profile key={el._id} profile={el} />
          ))}
      </div>

    )
};
}
export default Music;
