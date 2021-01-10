import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteprofilebyid} from '../../JS/actions/profile';
import {current} from '../../JS/actions/user';
import './profile.css';

const Profile = ({profile, user}) => {
  // useEffect(() => {
  //   dispatch(current());
  // }, [user]);

  const dispatch = useDispatch();
  return (
    <div className="image-area">
      <div className="img-wrapper">
        <img src={profile.filePath} alt={profile.fileName} />
        <h2> {profile.profileName} </h2>
        {/* <div class="btns"> */}
        <ul>
          <li>
            <Link to={`/profile/${profile._id}`}>
              {/* className="btndetail" */}
              <a>
                <i class="far fa-address-card"> Detail</i>
              </a>
            </Link>
          </li>
          {!user ? null : user.role == 'Admin' ? (
            <li>
              <a onClick={() => dispatch(deleteprofilebyid(profile._id))}>
                <i class="fas fa-trash-alt"> </i>
              </a>
            </li>
          ) : null}
          {/* ) : null} */}
        </ul>
        {/* </div> */}
      </div>
    </div>
  );
};
export default Profile;
