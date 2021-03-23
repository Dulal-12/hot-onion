import React, { useContext, useState } from 'react';
import logo2 from '../../logo2.png';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
firebase.initializeApp(firebaseConfig);
const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [loggedUser , setLoggedUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        cpassword: '',
        success: false,
        error: ''
    })

    const handleData = (e) => {
        let valid = true;

        if (e.target.name === 'email') {
            valid = /\S+@\S+/.test(e.target.value);
            
        }
        if (e.target.name === 'password') {
            valid = e.target.value.length >= 5;
        }
        if (e.target.name === 'cpassword') {
            valid = user.password === e.target.value;
           
        }
        if (valid) {
            const newUser = { ...user };
            newUser[e.target.name] = e.target.value;
            setUser(newUser);
           
        }
    }
    const handleSubmit = (e) => {

        if (newUser && user.email && user.password && user.cpassword) {
          firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
              
              const newUser = { ...user };
              newUser.error = ''
              newUser.success = true;
              setUser(newUser);
            })
            .catch((error) => {
    
              const errorMessage = error.message;
              const newUser = { ...user };
              newUser.error = errorMessage;
              newUser.success = false;
              setUser(newUser);
             
            });
        }
        if (!newUser && user.email && user.password && user.cpassword) {
          firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
    
              const newUser = { ...user };
              newUser.error = ''
              newUser.success = true;
              setUser(newUser);    
              console.log(user);
              setLoggedUser(newUser);
              history.replace(from);
            })
            .catch((error) => {
             
              const errorMessage = error.message;
              const newUser = { ...user };
              newUser.error = errorMessage;
              newUser.success = false;
              setUser(newUser);
            });
        }
    
        e.preventDefault();
      }


    return (
        <div className='App login container mt-5 '>
            <img src={logo2} alt="" className="image-fluid mb-5" />
            <br />
            <button onClick={() => setNewUser(!newUser)} className='mb-5 btn btn-danger'>NewUser</button>
            <form onSubmit={handleSubmit}>

                {newUser && <input type="text" name="name" onBlur={handleData} className="form-controll" placeholder='Name' />}
                <br />
                <input type="email" name="email" onBlur={handleData} className="form-controll" placeholder='Email' required />
                <br />
                <input type="password" name="password" onBlur={handleData} className="form-controll" placeholder='Password' required/>
                <br />
                <input type="password" name="cpassword" onBlur={handleData} className="form-controll" placeholder='conform password' required/>
                <br />
                <input type="submit" value="Submit" onBlur={handleData} className='btn btn-danger' />
            </form>
            {
              user.success ? <p style={{ color: 'green' }}>User {newUser ? 'create' : 'login'} successfull</p> : <p style={{ color: 'red' }}>{user.error}</p>
            }
        </div>
    );
};

export default Login;