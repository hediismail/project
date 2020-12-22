import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import "./profile.css"

const Profile = ({profile}) => {
 
    return (
        <div className="image-area">
		<div className="img-wrapper">
			<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="Atul Prajapati" />
			<h2> {profile.profileName} </h2>
      
			<ul>
        <li>
          <Link to={`/profile/${profile._id}`}>
            <button className='btndetail'>detail</button>
            </Link>
            </li>
			</ul>
		</div>
	</div>
        
       
    )
}

export default Profile
