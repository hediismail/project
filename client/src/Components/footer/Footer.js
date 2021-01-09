import React from 'react';
// import { CgMail } from "react-icons/fa";
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaGoogleDrive } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
	return (
		<div className="footer">
			<div className="icons">
				<FaTwitterSquare className="icon" />
				<FaInstagramSquare className="icon" />
				<FaFacebook className="icon" />
				<FaGoogleDrive className="icon" />
			</div>
			<div className="list">
				<p>Home</p>
				<p>About us</p>
				<p>Sign up</p>
				<p>Music</p>
				<p>Photograph</p>
				<p>Clown</p>
			</div>
			<div className="copyright">
				<p>Copyright 2020 7aflha</p>
			</div>
		</div>
	);
};

export default Footer;
