import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import {logout} from '../../JS/actions/user';
import {registerProfile} from '../../JS/actions/profile';
// import '../Signup/Signup.css';
import './addprofile.css';

const EditProfile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [profileName, setProfileName] = useState('');
  const [contact, setContact] = useState('');
  const [about, setAbout] = useState('');
  const [région, setRégion] = useState('');
  const [catégorie, setCatégorie] = useState('');

  return (
    <div className="pageadd">
      <div>
        {/* <div>
          <label s>Profile Name</label>
          <input
            id="user"
            type="text"
            className="input"
            onChange={(e) => setProfileName(e.target.value)}
          />
        </div> */}
        <div className="btninput">
          <div className="col-lg-3 col-sm-4">
            <div className="form-group">
              <label htmlFor="exampleInput1" className="bmd-label-floating">
                Profile Name
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInput1"
                onChange={(e) => setProfileName(e.target.value)}
              />
              <span className="bmd-help">Write Your Profile Name</span>
            </div>
          </div>

          {/* <div className="group">
          <label htmlFor="lastName" className="label">
            Contact
          </label>
          <input
            id="user"
            type="text"
            className="input"
            onChange={(e) => setContact(e.target.value)}
          />
        </div> */}
          <div className="col-lg-3 col-sm-4">
            <div className="form-group">
              <label htmlFor="exampleInput1" className="bmd-label-floating">
                Contact
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInput1"
                onChange={(e) => setContact(e.target.value)}
              />
              <span className="bmd-help">Write Your Contact</span>
            </div>
          </div>
          {/* <div className="group">
          <label htmlFor="pass" className="label">
            About
          </label>
          <input
            id="pass"
            type="text"
            className="input"
            onChange={(e) => setAbout(e.target.value)}
          />
        </div> */}
          <div className="col-lg-3 col-sm-4">
            <div className="form-group">
              <label htmlFor="exampleInput1" className="bmd-label-floating">
                About You
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInput1"
                onChange={(e) => setAbout(e.target.value)}
              />
              <span className="bmd-help">Write About you</span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="group">
        <label htmlFor="pass" className="label">
          Choose Your catégorie
        </label>
        <select onChange={(e) => setCatégorie(e.target.value)}>
          <option id="pass" value="onemanshow">
            onemanshow
          </option>
          <option id="pass" value="cuisine">
            cuisine
          </option>
        </select>
      </div> */}
      <div className="btncheck">
        <div className="form-check">
          <label className="form-check-label">
            <input
              onChange={(e) => setCatégorie(e.target.value)}
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              defaultValue="Music"
            />
            Music
            <span className="circle">
              <span className="check" />
            </span>
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input
              onChange={(e) => setCatégorie(e.target.value)}
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              defaultValue="Photographe"
              defaultChecked
            />
            Photographe
            <span className="circle">
              <span className="check" />
            </span>
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input
              onChange={(e) => setCatégorie(e.target.value)}
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              defaultValue="Clown"
              
            />
            Clown
            <span className="circle">
              <span className="check" />
            </span>
          </label>
        </div>
      </div>

      <div className="group">
        <label htmlFor="pass" className="label">
          Choose Your Région
        </label>
        <select
          className="btnselect"
          onChange={(e) => setRégion(e.target.value)}
        >
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
      {/* <Link to={`/`}> */}
      {/* <input
        type="submit"
        className="button"
        defaultValue="Submit"
        onClick={() =>
          dispatch(
            registerProfile(
              {profileName, contact, about, catégorie, région},
              history
            )
          )
        }
      /> */}
      <div className="btnadd">
        {/* <button
        onClick={() => {
          dispatch(logout());
          history.push('/');
        }}
      >
        Logout
      </button> */}
        <button
          class="btn btn-primary btn-round"
          onClick={() => {
            dispatch(logout());
            history.push('/');
          }}
        >
          Logout
        </button>
        <button
          class="btn btn-primary btn-round"
          onClick={() =>
            dispatch(
              registerProfile(
                {profileName, contact, about, catégorie, région},
                history
              )
            )
          }
        >
          <i class="material-icons">favorite</i> Create Profile
        </button>
      </div>
      
     
    
      

      <img src="" alt="Circle Image" class="rounded-circle img-fluid"></img>
        <input type='file'/>
      {/* </Link> */}
      </div>
  );
};

export default EditProfile;
