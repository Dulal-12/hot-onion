import React, { useState } from 'react';
import logo2 from '../../logo2.png';
import './Login.css';
const Login = () => {
    const [newUser, setNewUser] = useState(false);
    return (
        <div className='App login container mt-5 '>
            <img src={logo2} alt="" className="image-fluid mb-5"/>
             <br/>
             <button onClick={()=>setNewUser(!newUser)} className='mb-5 btn btn-danger'>NewUser</button>
             <form>
           
            { newUser && <input type="text" name="" className="form-controll" placeholder='Name'/>}
             <br/>
             <input type="email" name="" className="form-controll" placeholder='Email'/>
             <br/>
             <input type="password" name="" className="form-controll" placeholder='Password'/>
             <br/>
             <input type="password" name="" className="form-controll" placeholder='conform password'/>
             <br/>
             <input type="submit" value="Submit" className='btn btn-danger'/>
        </form>
</div>
    );
};

export default Login;