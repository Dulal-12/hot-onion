import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { useHistory } from 'react-router-dom';
import logo from '../../logo2.png';
import { userContext } from '../../App';

const Navbar = () => {
    const [loggedUser , setLoggedUser] = useContext(userContext);
    const history =useHistory();
    return (
        <div className="container-fulid navbar">
            <img src={logo} alt="" srcset="" className="img-fluid" />

            <nav className="ms-auto">
                <a href="/#"><FontAwesomeIcon icon={faShoppingCart} /></a>
                <a href="/login"><small onClick={()=> history.push('/login')}>Login</small></a>
                <a href="/#"><button className="btn btn-danger" onClick={()=> setLoggedUser({})}>SignOut</button></a>
            </nav>
        </div>
    );
};

export default Navbar;