import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logout } from '../../JS/actions/user'
import { registerProfile } from '../../JS/actions/profile'
import '../Signup/Signup.css'
const EditProfile = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [profileName, setProfileName] = useState('')
  const [contact, setContact] = useState('')
  const [about, setAbout] = useState('')
  return (
    <div>
      <button
        onClick={() => {
          dispatch(logout())
          history.push('/')
        }}
      >
        Logout
      </button>
      <div >
        <div >
          <label s>
            Profile Name
          </label>
          <input
            id="user"
            type="text"
            className="input"
            onChange={(e) => setProfileName(e.target.value)}
          />
        </div>
        <div className="group">
          <label htmlFor="lastName" className="label">
            Contact
          </label>
          <input
            id="user"
            type="text"
            className="input"
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className="group">
          <label htmlFor="pass" className="label">
            About
          </label>
          <input
            id="pass"
            type="text"
            className="input"
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>
      </div>
      <input
        type="submit"
        className="button"
        defaultValue="Submit"
        onClick={() =>
          dispatch(registerProfile({ profileName, contact, about }, history))
        }
      />
    </div>
  )
}




export default EditProfile
