import React from 'react'
import "./Company.css";

const Company = () => {
    return (
        <div className="company-wrapper">
            <div className="company-container">
                <div className="company-items">
                    <div className="company">

                        <p className="med-text med-title">Company</p>
                        <ul>
                            <li className="sm-text">About Us</li>
                            <li className="sm-text">Careers</li>
                            <li className="sm-text">Legal</li>
                        </ul>
                    </div>
                    <div className="contact-us">
                        <p className="sm-text med-title">Contact Us</p>
                        <ul>
                            <li className="sm-text">info@balls.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company
