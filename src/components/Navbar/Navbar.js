import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import logo from '../../logo2.png';

const Navbar = () => {
    return (
        <div className="container-fulid navbar">
            <img src={logo} alt="" srcset="" className="img-fluid" />

            <nav className="ms-auto">
                <a href="/#"><FontAwesomeIcon icon={faShoppingCart} /></a>
                <a href="/login"><small>Login</small></a>
                <a href="/#"><button className="btn btn-danger">SignOut</button></a>
            </nav>
        </div>
    );
};

export default Navbar;