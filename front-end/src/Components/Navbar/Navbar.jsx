import React from 'react'
import { NavLink,Link } from "react-router-dom"
import "./Navbar.css"
import { signout, isAuthenticate, userInfo } from "../../utils/auth";

const Navbar = () => {
    return (
      <>
        <div className="NavbarWrapper">
          <div className="px-lg-4 px-md-2 px-sm-0  tex-center">
            <nav className="navbar navbar-expand-lg navbar-light navWrap">
              {/* Nabar Logo code start */}

              <Link className="navbar-brand d-flex" exact to="/">
                <img
                  src="./img/logo.jpeg"
                  alt="logo"
                  className="img-fluid logo"
                ></img>
                <span className="logoTitle">
                  <div>
                    <p className="mx-5">Apon</p>
                    <p>Basic Need Food Ltd</p>
                  </div>
                </span>
              </Link>

              {/* Nabar Logo code End */}

              {/* Nabar Toggle button code start */}

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              {/* Nabar Toggle button code End */}

              {/* Nabar Menu code start */}
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink
                      activeClassName="active_css"
                      className="nav_Link"
                      exact
                      to="/"
                    >
                      <i className="fa fa-home" aria-hidden="true"></i>
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="active_css"
                      className="nav_Link"
                      to="/about"
                    >
                      <i className="fa fa-book" aria-hidden="true"></i>
                      About
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      activeClassName="active_css"
                      className="nav_Link"
                      to="/shop"
                    >
                      <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                      Shop
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      activeClassName="active_css"
                      className="nav_Link"
                      to="/gallery"
                    >
                      <i className="fa fa-picture-o" aria-hidden="true"></i>
                      Gallery
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="active_css"
                      className="nav_Link"
                      to="/cart"
                    >
                      <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                      Cart
                    </NavLink>
                  </li>

                  {!isAuthenticate() && (
                    <>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="active_css"
                          className="nav_Link"
                          to="/signin"
                        >
                          <i className="fa fa-sign-in" aria-hidden="true"></i>
                          signin
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="active_css"
                          className="nav_Link"
                          to="/signup"
                        >
                          <i className="fa fa-user-plus" aria-hidden="true"></i>
                          Signup
                        </NavLink>
                      </li>
                    </>
                  )}

                  {isAuthenticate() && (
                    <>
                      
                      <li className="nav-item">
                        <NavLink
                          activeClassName="active_css"
                          className="nav_Link"
                          to={`/${userInfo().role}/deshbord`}
                     
                        >
                          <i className="fa fa-user" aria-hidden="true"></i>
                          Deshbord
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          activeClassName="active_css"
                          className="nav_Link"
                          to="/logout"
                        >
                          <i className="fa fa-sign-in" aria-hidden="true"></i>
                          Logout
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </>
    );
}

export default Navbar
