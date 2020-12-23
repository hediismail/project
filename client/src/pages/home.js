import React from 'react'
import Profileslist from '../Components/profileslist/profiles list'


const home = () => {
    return (
        <div>
            {/*         carousel  */}
      <div className="section" id="carousel">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mr-auto ml-auto">
              {/* Carousel Card */}
              <div className="card card-raised card-carousel">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval={3000}>
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src="./assets/img/bg2.jpg" alt="First slide" />
                      <div className="carousel-caption d-none d-md-block">
                        <h4>
                          <i className="material-icons">location_on</i>
                          Yellowstone National Park, United States
                        </h4>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="./assets/img/bg3.jpg" alt="Second slide" />
                      <div className="carousel-caption d-none d-md-block">
                        <h4>
                          <i className="material-icons">location_on</i>
                          Somewhere Beyond, United States
                        </h4>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="./assets/img/bg.jpg" alt="Third slide" />
                      <div className="carousel-caption d-none d-md-block">
                        <h4>
                          <i className="material-icons">location_on</i>
                          Yellowstone National Park, United States
                        </h4>
                      </div>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <i className="material-icons">keyboard_arrow_left</i>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <i className="material-icons">keyboard_arrow_right</i>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              {/* End Carousel Card */}
            </div>
          </div>
        </div>
      </div>
      {/*         end carousel */}
    
      
      
    
       
       <Profileslist /> 
          

        </div>
    )
}

export default home
