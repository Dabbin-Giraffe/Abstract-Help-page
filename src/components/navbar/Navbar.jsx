import React from 'react';
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";

const Navbar = () => {

    return (
        <div className='wrapper'>
            <div className="nav-container">
                <div className="left-sub-container">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <p className="lg-text">Abstract</p>
                    </div>
                    <div className="help-center">
                        <span className='lg-text'>|</span>
                        <p className="lg-text"><a className='no-underline' href="">Help Center</a></p>
                    </div>
                </div>
                <div className="right-sub-container">
                    <button className="button-secondary "><p className="lg-text">Submit Request</p></button>
                    <button className="button-primary "><p className="lg-text">Sign in</p></button>
                </div>
            </div>

        </div>
    )
}

export default Navbar
