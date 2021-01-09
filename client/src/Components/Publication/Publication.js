import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPublication } from '../../JS/actions/Publication';

import './Publication.css';
const Publication = ({ idprofile }) => {
	const [publication, setPublication] = useState('');
	const [file, setFile] = useState('');
	const data = new FormData();
	data.append('publication', publication);
	data.append('file', file);
	const dispatch = useDispatch();

	return (
		<div className=" w3-container w3-card w3-white w3-round w3-margin">
			<div className="text">
				<input
					type="text"
					name="publication"
					value={publication}
					placeholder="write your status"
					onChange={(e) => {
						setPublication(e.target.value);
					}}
				/>
			</div>
			<input
				type="file"
				id="myFile"
				onChange={(e) => {
					setFile(e.target.files[0]);
				}}
			/>
			<button
				onClick={(e) => {
					e.preventDefault();
					dispatch(addPublication(data, idprofile));
					setPublication('');
					setFile('');
				}}
			>
				add
			</button>
		</div>
	);
};

export default Publication;
