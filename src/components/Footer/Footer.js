import React from 'react';
import logo2 from'../../logo2.png';
import './Footer.css';
const Footer = () => {
    return (
        <div className=" footer p-5">
            <div className="row mb-5">
                <div className="col-md-4 col-sm-3 ">
                    <img src={logo2} alt="" className="image-fluid"/>
                    <small>@copyright 2020</small>
                </div>
                <div className="col-md-4 col-sm-3 mt-5">
                    <ul>
                        <li>About Our online food</li>
                        <li>Read Our Bloog</li>
                        <li>Sign Up to Deliver</li>
                        <li>Add your Restorant</li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-3 mt-5">
                    <ul>
                        <li>Get Help</li>
                        <li>Read FAQs</li>
                        <li>View All Cities</li>
                        <li>Resturent near me</li>
                    </ul>
                </div>
               
            </div>
        </div>
    );
};

export default Footer;