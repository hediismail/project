import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-inverse navbar-expand-lg bg-dark"
        role="navigation-demo"
      >
        <div className="container">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-translate">
            <Link to={`/`}>
              <a className="navbar-brand" href="#0">
                حفلها
              </a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
              <span className="navbar-toggler-icon" />
            </button>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <Link to={`/music`}>
                <li className="nav-item">
                  <a href="javascript:;" className="nav-link">
                    Music
                  </a>
                </li>
              </Link>
              <Link to={`/photographe`}>
                <li className="nav-item">
                  <a href="javascript:;" className="nav-link">
                    Photographe
                  </a>
                </li>
              </Link>
              <Link to={`/clown`}>
                <li className="nav-item">
                  <a href="javascript:;" className="nav-link">
                    Clown
                  </a>
                </li>
              </Link>
              <Link to={`/aboutus`}>
                <li className="nav-item">
                  <a href="javascript:;" className="nav-link">
                    About us
                  </a>
                </li>
              </Link>
              <li className="nav-item">
                  {/* <a href="javascript:;" className="nav-link">
                    About us
                  </a> */}

                </li>
              <li className="nav-item">
                <a
                  href="javascript:;"
                  className="btn btn-rose btn-raised btn-fab btn-round"
                  data-toggle="dropdown"
                >
                  <i className="material-icons">email</i>
                </a>
              </li>
              <li className="dropdown nav-item">
                <a
                  href="javascript:;"
                  className="profile-photo dropdown-toggle nav-link"
                  data-toggle="dropdown"
                >
                  <div className="profile-photo-small">
                    <img
                      src="./assets/img/faces/avatar.jpg"
                      alt="Circle Image"
                      className="rounded-circle img-fluid"
                    />
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <h6 className="dropdown-header">Dropdown header</h6>
                  <Link to={`/profile`}>
                    <a href="javascript:;" className="dropdown-item">
                      Me
                    </a>
                  </Link>

                  <a href="javascript:;" className="dropdown-item">
                    Settings and other stuff
                  </a>
                  <Link to={`/Signup`}>
                    <a href="javascript:;" className="dropdown-item">
                      Sign in
                    </a>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          {/* /.navbar-collapse */}
        </div>
        {/* /.container*/}
      </nav>
    </div>
  )
}

export default Navbar
