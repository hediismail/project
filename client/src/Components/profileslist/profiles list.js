import {React, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import { Dimmer, Loader } from 'semantic-ui-react'
import './profileslist.css';
import {getprofiles} from '../../JS/actions/profile';
import Profile from '../profile/profile';
import {Spinner} from 'react-bootstrap'
const Profileslist = () => {
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.profileReducer.profiles);
  const loadprofiles = useSelector(
    (state) => state.profileReducer.loadprofiles
  );
  console.log(loadprofiles, profiles);

  useEffect(() => {
    dispatch(getprofiles());
  }, []);

  return (
    <div className="profilelist">
      {loadprofiles ? (
        <Spinner type="grow" color="success" />):(
              profiles.map((el) => (
                <Profile key={el._id} profile={el} />
               
      
              )))}
            </div>
        
  );
};

export default Profileslist;
