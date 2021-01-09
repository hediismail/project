import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../JS/actions/user';
import { editProfile, registerProfile } from '../../JS/actions/profile';
import './addprofile.css';
const EditProfile = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [profileName, setProfileName] = useState('');
	const [contact, setContact] = useState('');
	const [about, setAbout] = useState('');
	const [région, setRégion] = useState('');
	const [catégorie, setCatégorie] = useState('');
	const [file, setFile] = useState('');
	var formData = new FormData();
	formData.append('file', file);
	formData.append('profileName', profileName);
	formData.append('contact', contact);
	formData.append('about', about);
	formData.append('région', région);
	formData.append('catégorie', catégorie);
	const profile = useSelector((state) => state.profileReducer.profile);
	const editprofile = useSelector((state) => state.profileReducer.editeprofile);
	useEffect(() => {
		if (editprofile) {
			setContact(profile.contact);
			setProfileName(profile.profileName);
			setAbout(profile.about);
			setCatégorie(profile.catégorie);
			setRégion(profile.région);
		} else {
			setContact('');
			setProfileName('');
			setAbout('');
			setCatégorie('');
			setRégion('');
		}
	}, []);
	const handleprofile = () => {
		if (!editprofile) {
			dispatch(registerProfile(formData, history));
		} else {
			dispatch(editProfile(profile._id, formData, history));
		}
	};

	return (
		<div className="pageadd">
			<div>
				<div className="form-icon">
					{file ? (
						<img
							src={URL.createObjectURL(file)}
							style={{ width: '15%' }}
							className="rounded-circle img-fluid"
							alt="profile"
							onChange
						/>
					) : (
						<span>
							{editprofile ? (
								<img
									alt=""
									className="rounded-circle img-fluid"
									style={{ width: '15%' }}
									src={profile.filePath}
								/>
							) : (
								<img
									alt=""
									className="rounded-circle img-fluid"
									src="data:image/jpeg;base64,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"
								/>
							)}
						</span>
					)}
					<br />

					<input
						accept="image/*"
						id="icon-button-file"
						type="file"
						class="btn btn-primary btn-round"
						onChange={(e) => {
							setFile(e.target.files[0]);
						}}
					/>
				</div>
				<br />
				<div>
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
									value={profileName}
									onChange={(e) => setProfileName(e.target.value)}
								/>
								<span className="bmd-help">Write Your Profile Name</span>
							</div>
						</div>

						<div className="col-lg-3 col-sm-4">
							<div className="form-group">
								<label htmlFor="exampleInput1" className="bmd-label-floating">
									Contact
								</label>
								<input
									type="email"
									className="form-control"
									id="exampleInput1"
									value={contact}
									onChange={(e) => setContact(e.target.value)}
								/>
								<span className="bmd-help">Write Your Contact</span>
							</div>
						</div>

						<div className="col-lg-3 col-sm-4">
							<div className="form-group">
								<label htmlFor="exampleInput1" className="bmd-label-floating">
									About You
								</label>
								<input
									type="email"
									className="form-control"
									id="exampleInput1"
									value={about}
									onChange={(e) => setAbout(e.target.value)}
								/>
								<span className="bmd-help">Write About you</span>
							</div>
						</div>
					</div>
				</div>

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
								// defaultChecked
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
					<select className="btnselect" value={région} onChange={(e) => setRégion(e.target.value)}>
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
				{/* <Calendrie /> */}
			</div>

			<div className="btnadd">
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
					// onClick={editprofile () => dispatch(registerProfile(formData, history))}
					onClick={handleprofile}
				>
					<i class="material-icons">favorite</i> {!editprofile ? 'Create Profile' : 'Update profile'}
					{/* onClick= {()=>dispatch(editProfile(profile._id,formData,history))}  */}
				</button>
			</div>
		</div>
	);
};

export default EditProfile;
