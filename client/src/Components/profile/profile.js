import React from 'react'
import { Link } from 'react-router-dom'
import './profile.css'

const Profile = ({ profile }) => {
  return (
    <div className="image-area">
      <div className="img-wrapper">
        <img src={profile.filePath} alt={profile.fileName} />
        <h2> {profile.profileName} </h2>
                      
        <ul>
          <li>
            <Link to={`/profile/${profile._id}`}>
              <button className="btndetail">detail</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Profile
