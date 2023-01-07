import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <u>{props.title}</u>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/about"
                >
                  {props.about}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <button type="button" className="btn btn-outline-primary mx-1" onClick={()=>{props.togglemode('primary')}}>blue</button>
        <button type="button" className="btn btn-outline-secondary mx-1" onClick={()=>{props.togglemode('secondary')}}>gray</button>
        <button type="button" className="btn btn-outline-success mx-1" onClick={()=>{props.togglemode('success')}}>green</button>
        <button type="button" className="btn btn-outline-danger mx-1" onClick={()=>{props.togglemode('danger')}}>red </button> 
        <button type="button" className="btn btn-outline-warning mx-1" onClick={()=>{props.togglemode('warning')}}> yellow</button>
        <button type="button" className="btn btn-outline-info mx-1" onClick={()=>{props.togglemode('info')}}>skyblue</button>
        <button type="button" className="btn btn-outline-dark mx-1" onClick={()=>{props.togglemode('dark')}} style={{color:props.mode==='dark'?'white':'black'}}>dark</button>
        <button type="button" className="btn btn-outline-light mx-1" onClick={()=>{props.togglemode('light')}} style={{color:props.mode==='dark'?'white':'black'}}>white</button>
        {/* <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <input
            className="form-check-input mx-2"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onClick={props.togglemode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {props.msg}
          </label>
        </div> */}
      </nav>
    </>
  );
}
Navbar.propTypes = {
  title: "PropTypes.string",
  about: "PropType.string",
};
Navbar.defaultProps = {
  title: "Sayeed_s@jju",
  about: "About_$ayeed",
};
