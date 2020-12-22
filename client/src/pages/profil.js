import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Profileslist from '../Components/profileslist/profiles list';
import { getprofilebyid, getprofiles } from '../JS/actions/profile';
import './profile.css'


const Profil = (props) => {
  console.log(props.match.params.id)
  const idprofile=props.match.params.id
 
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getprofilebyid(idprofile));
  }, []);
  
  const profile = useSelector(state => state.profileReducer)
  
 console.log(profile.profile.profileName)
  
  const pro=profile.profile
 
console.log(pro)

    return (
        <div> 


             <div className="page-header header-filter" data-parallax="true" style={{backgroundImage: 'url("../assets/img/city-profile.jpg")'}} />
        <div className="main main-raised">
          <div className="profile-content">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ml-auto mr-auto">
                  <div className="profile">
                    <div className="avatar">
                      <img src="../assets/img/faces/christian.jpg" alt="Circle Image" className="img-raised rounded-circle img-fluid" />
                    </div>
                    <div className="name">
                      <h3 className="title">{pro.profileName}</h3>
                      <h6>{pro.contact}</h6>
                      <a href="#pablo" className="btn btn-just-icon btn-link btn-dribbble"><i className="fa fa-dribbble" /></a>
                      <a href="#pablo" className="btn btn-just-icon btn-link btn-twitter"><i className="fa fa-twitter" /></a>
                      <a href="#pablo" className="btn btn-just-icon btn-link btn-pinterest"><i className="fa fa-pinterest" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="description text-center">
                <p>{pro.about}</p>
              </div>
              <div className="row">
                <div className="col-md-6 ml-auto mr-auto">
                  <div className="profile-tabs">
                    <ul className="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" href="#studio" role="tab" data-toggle="tab">
                          <i className="material-icons">camera</i> Studio
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#works" role="tab" data-toggle="tab">
                          <i className="material-icons">palette</i> Work
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#favorite" role="tab" data-toggle="tab">
                          <i className="material-icons">favorite</i> commentaires
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tab-content tab-space">
                <div className="tab-pane active text-center gallery" id="studio">
                  <div className="row">
                    <div className="col-md-3 ml-auto">
                      <img src="../assets/img/examples/studio-1.jpg" className="rounded" />
                      <img src="../assets/img/examples/studio-2.jpg" className="rounded" />
                    </div>
                    <div className="col-md-3 mr-auto">
                      <img src="../assets/img/examples/studio-5.jpg" className="rounded" />
                      <img src="../assets/img/examples/studio-4.jpg" className="rounded" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane text-center gallery" id="works">
                  <div className="row">
                    <div className="col-md-3 ml-auto">
                      <img src="../assets/img/examples/olu-eletu.jpg" className="rounded" />
                      <img src="../assets/img/examples/clem-onojeghuo.jpg" className="rounded" />
                      <img src="../assets/img/examples/cynthia-del-rio.jpg" className="rounded" />
                    </div>
                    <div className="col-md-3 mr-auto">
                      <img src="../assets/img/examples/mariya-georgieva.jpg" className="rounded" />
                      <img src="../assets/img/examples/clem-onojegaw.jpg" className="rounded" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane text-center gallery" id="favorite">
                  <div className="row">
                    <div className="col-md-3 ml-auto">
                      <img src="../assets/img/examples/mariya-georgieva.jpg" className="rounded" />
                      <img src="../assets/img/examples/studio-3.jpg" className="rounded" />
                    </div>
                    <div className="col-md-3 mr-auto">
                      <img src="../assets/img/examples/clem-onojeghuo.jpg" className="rounded" />
                      <img src="../assets/img/examples/olu-eletu.jpg" className="rounded" />
                      <img src="../assets/img/examples/studio-1.jpg" className="rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
             
        </div>
    )
}

export default Profil
