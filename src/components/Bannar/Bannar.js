import React from 'react';
import bg from '../../bannerbackground.png';
import './Bannar.css';
import man from '../../ICON/Group 2.png';
const Bannar = () => {
    return (
        <div className="rounded  d-block bannar" style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${bg})`,
          }} >
            <h1 >BEST FOOD WAITING FOR YOU BELLY</h1>
            <img src={man} alt=""/>
        </div>   
    );
};

export default Bannar;