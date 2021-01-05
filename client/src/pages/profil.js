import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getprofilebyid } from "../JS/actions/profile";
import Publication from "../Components/Publication/Publication";
import "./profile.css";
import { Spinner } from "react-bootstrap";
import { deletePublication } from "../JS/actions/Publication";
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

const Profil = (props) => {
  const idprofile = props.match.params.id;
  const profile = useSelector((state) => state.profileReducer);
  const user = useSelector((state) => state.userReducer.user);
  const loading = useSelector(
    (state) => state.publicationReducer.loadPublications
  );
  const publications = useSelector(
    (state) => state.publicationReducer.publications
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getprofilebyid(idprofile));
  }, []);

  const pro = profile.profile;

  return (
    <div>
      {/* Page Container */}
      <div
        className="w3-container w3-content"
        style={{ maxWidth: "1400px", marginTop: "80px" }}
      >
        {/* The Grid */}
        <div className="w3-row">
          {/* Left Column */}
          <div className="w3-col m3">
            {/* Profile */}
            <div className="w3-card w3-round w3-white">
              <div className="w3-container">
                <h4 className="w3-center">{pro.profileName}</h4>
                <p className="w3-center">
                  <img
                    src={pro.filePath}
                    className="w3-circle"
                    style={{ height: "106px", width: "106px" }}
                    alt="Avatar"
                  />
                </p>
                <hr />
                <p>
                  <i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme" />{" "}
                  {pro.catégorie}
                </p>
                <p>
                  <i className="fa fa-phone fa-fw w3-margin-right w3-text-theme" />{" "}
                  {pro.contact}
                </p>
              </div>
            </div>
            <br />
            {/* Accordion */}
            <div className="w3-card w3-round">
              <div className="w3-white">
                <button
                  onclick="myFunction('Demo3')"
                  className="w3-button w3-block w3-theme-l1 w3-left-align"
                >
                  <i className="fa fa-users fa-fw w3-margin-right" /> My Photos
                </button>
                <div id="Demo3" className="w3-hide w3-container w3-show">
                  <div className="w3-row-padding">
                    <br />
                    {publications
                      ? publications.map((el) =>
                          el.publicationPhoto ? (
                            <div className="w3-half">
                              <img
                                src={el.publicationPhoto}
                                alt=""
                                style={{ width: "100%" }}
                                className="w3-margin-bottom"
                              />
                            </div>
                          ) : null
                        )
                      : null}
                  </div>
                </div>
                {/* <button
                  onclick="myFunction('Demo3')"
                  className="w3-button w3-block w3-theme-l1 w3-left-align"
                >
                  <i className="fa fa-users fa-fw w3-margin-right" /> My Video
                </button>
                <div id="Demo3" className="w3-hide w3-container w3-show">
                  <div className="w3-row-padding">
                    <br />
                    <div className="w3-half">
                      <img
                        src="/w3images/lights.jpg"
                        alt=""
                        style={{ width: '100%' }}
                        className="w3-margin-bottom"
                      />
                    </div>
                    <div className="w3-half">
                      <img
                        src="/w3images/nature.jpg"
                        alt=""
                        style={{ width: '100%' }}
                        className="w3-margin-bottom"
                      />
                    </div>
                    <div className="w3-half">
                      <img
                        src="/w3images/mountains.jpg"
                        alt=""
                        style={{ width: '100%' }}
                        className="w3-margin-bottom"
                      />
                    </div>
                    <div className="w3-half">
                      <img
                        src="/w3images/forest.jpg"
                        alt=""
                        style={{ width: '100%' }}
                        className="w3-margin-bottom"
                      />
                    </div>
                    <div className="w3-half">
                      <img
                        src="/w3images/nature.jpg"
                        alt=""
                        style={{ width: '100%' }}
                        className="w3-margin-bottom"
                      />
                    </div>
                    <div className="w3-half">
                      <img
                        src="/w3images/snow.jpg"
                        alt=""
                        style={{ width: '100%' }}
                        className="w3-margin-bottom"
                      />
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <br />
            {/* Interests */}
            <div className="w3-card w3-round w3-white w3-hide-small">
              <div className="w3-container">
                <p>About Us</p>
                <p>{pro.about}</p>
              </div>
            </div>
            <br />
            {/* Alert Box */}
            {/* <div className="w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small">
           <span onclick="this.parentElement.style.display='none'" className="w3-button w3-theme-l3 w3-display-topright">
             <i className="fa fa-remove" />
           </span>
           <p><strong>Hey!</strong></p>
           <p>People are looking at your profile. Find out who.</p>
         </div> */}
            {/* End Left Column */}
          </div>
          {/* Middle Column */}
          <div className="w3-col m7">
            {/* <div className="w3-row-padding">
           <div className="w3-col m12">
             <div className="w3-card w3-round w3-white">
               <div className="w3-container w3-padding">
                 <h6 className="w3-opacity">Social Media template by w3.css</h6>
                 <p contentEditable="true" className="w3-border w3-padding">Status: Feeling Blue</p>
                 <button type="button" className="w3-button w3-theme"><i className="fa fa-pencil" /> &nbsp;Post</button> 
               </div>
             </div>
           </div>
         </div> */}
            {user._id === profile.profile.userId ? (
              <Publication idprofile={idprofile} />
            ) : null}

            {/* ==============>add publication */}
            {/* <div>
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
                  setPublicationPhoto(e.target.files[0]);
                }}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(
                    addPublication({ publication, publicationPhoto }, idprofile)
                  );
                  setPublication("");
                }}
              >
                add
              </button>
            </div> */}
            {loading ? (
              <Spinner animation="border" variant="primary" />
            ) : (
              publications
                .slice(0)
                .reverse()
                .map((el) => (
                  <div className="w3-container w3-card w3-white w3-round w3-margin">
                    <br />
                    <img
                      src={pro.filePath}
                      alt="Avatar"
                      className="w3-left w3-circle w3-margin-right"
                      style={{ width: "60px" }}
                    />
                    <span className="w3-right w3-opacity">{el.date}</span>
                    {el.publication && el.publicationPhoto ? (
                      <div>
                        <h3 style={{ fontFamily: "serif" }}>
                          {el.publication}
                        </h3>
                        <img
                          src={el.publicationPhoto}
                          alt=""
                          style={{ width: "100%" }}
                        />
                      </div>
                    ) : el.publicationPhoto ? (
                      <img
                        src={el.publicationPhoto}
                        alt=""
                        style={{ width: "100%" }}
                      />
                    ) : (
                      <h3>{el.publication}</h3>
                    )}
                    <hr className="w3-clear" />
                    <button
                      type="button"
                      className="w3-button w3-theme-d1 w3-margin-bottom"
                    >
                      <i className="fa fa-thumbs-up" /> &nbsp;Like
                    </button>
                    <button
                      onClick={() =>
                        dispatch(deletePublication(el._id, idprofile))
                      }
                      type="button"
                      className="w3-button w3-theme-d2 w3-margin-bottom"
                    >
                      {/* <i className="fa fa-delete" />  */}
                      Delete
                    </button>
                  </div>
                ))
            )}
            {/* <div className="w3-container w3-card w3-white w3-round w3-margin">
              <br />
              <img
                src="/w3images/avatar5.png"
                alt="Avatar"
                className="w3-left w3-circle w3-margin-right"
                style={{ width: "60px" }}
              />
              <span className="w3-right w3-opacity">16 min</span>
              <h4>Jane Doe</h4>
              <br />
              <hr className="w3-clear" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button
                type="button"
                className="w3-button w3-theme-d1 w3-margin-bottom"
              >
                <i className="fa fa-thumbs-up" /> &nbsp;Like
              </button>
              <button
                type="button"
                className="w3-button w3-theme-d2 w3-margin-bottom"
              >
                <i className="fa fa-comment" /> &nbsp;Comment
              </button>
            </div> */}
            {/* <div className="w3-container w3-card w3-white w3-round w3-margin">
              <br />
              <img
                src="/w3images/avatar6.png"
                alt="Avatar"
                className="w3-left w3-circle w3-margin-right"
                style={{ width: "60px" }}
              />
              <span className="w3-right w3-opacity">32 min</span>
              <h4>Angie Jane</h4>
              <br />
              <hr className="w3-clear" />
              <p>Have you seen this?</p>
              <img
                src="/w3images/nature.jpg"
                style={{ width: "100%" }}
                className="w3-margin-bottom"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <button
                type="button"
                className="w3-button w3-theme-d1 w3-margin-bottom"
              >
                <i className="fa fa-thumbs-up" /> &nbsp;Like
              </button>
              <button
                type="button"
                className="w3-button w3-theme-d2 w3-margin-bottom"
              >
                <i className="fa fa-comment" /> &nbsp;Comment
              </button>
 {user._id === profile.profile.userId ? (
              <Publication idprofile={idprofile} />
            ) : null}
            </div> */}
            {/* End Middle Column */}
          </div>
          {/* Right Column */}
          <div className="w3-col m2">
            {user._id === profile.profile.userId ? (
              <div className="w3-card w3-round w3-white w3-center">
                <div className="w3-container">
                  <p>Friend Request</p>
                  {/* <img
                  src="/w3images/avatar6.png"
                  alt="Avatar"
                  style={{ width: "50%" }}
                /> */}
                  <br />
                  {/* <span>Jane Doe</span> */}
                  <div className="w3-row w3-opacity">
                    <div className="w3-half">
                      <button
                        className="w3-button w3-block w3-green w3-section"
                        title="Accept"
                      >
                        <i className="fa fa-check" />
                      </button>
                    </div>
                    <div className="w3-half">
                      <button
                        className="w3-button w3-block w3-red w3-section"
                        title="Decline"
                      >
                        <i className="fa fa-remove" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/requestForum">
                <button>Send Request</button>
              </Link>
            )}
            {/* <br /> */}
            {/* <div className="w3-card w3-round w3-white w3-padding-16 w3-center">
           <p>ADS</p>
         </div> */}

            {/* <br />
         <div className="w3-card w3-round w3-white w3-padding-32 w3-center">
           <p><i className="fa fa-bug w3-xxlarge" /></p>
         </div> */}
            {/* End Right Column */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Page Container */}
      </div>
      <br />
      {/* Footer */}
      {/* <footer className="w3-container w3-theme-d3 w3-padding-16">
        <h5>Footer</h5>
      </footer>
      <footer className="w3-container w3-theme-d5">
        <p>
          Powered by{" "}
          <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">
            w3.css
          </a>
        </p>
      </footer> */}
    </div>
  );
};

export default Profil;
