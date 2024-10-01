import React from 'react'
import Abstract from './Abstract/Abstract'
import Community from './Community/Community'
import Company from './Company/Company'
import Copyright from './Copyright/Copyright'
import Resources from './Resources/Resources'
import logo from "../../assets/images/logo.svg"
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div className="footer-upper">
                <Abstract />
                <Resources />
                <Community />
                <Company />
                <img src={logo} alt="" />
            </div>
            <div className="footer-lower">
                <Copyright />
            </div>
        </div>
    )
}

export default Footer
