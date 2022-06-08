import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success" >
    <div className="container-fluid ">
      <Link className="navbar-brand " to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active " aria-current="page" to="/">Home</Link>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link active" to="/AboutUs">{props.aboutText}</Link>
          </li>
                    
        </ul>
        {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input"  onClick={props.togglemode} type="checkbox"  role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Enable darkmode</label>
      </div> */}
        <form className="d-flex">
          <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-light" type="submit">Search</button>
        </form>
        
     {/* <div className={`form-check form-switch text-${props.mode==='light'?'#330000':'dark'}`}>
      <input className="form-check-input"  onClick={props.comode} type="checkbox"  role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Enable red</label>
      </div> */}
      </div>
    </div>
  </nav>  
  
  )
} 

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
  };

Navbar.defaultProps = {
    title:"set title",
    aboutText: "About",
};  