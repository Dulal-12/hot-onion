import React from 'react';
import bg from '../../bannerbackground.png';
import './Bannar.css';
import foodLover2 from '../../Image/foodLover2.png';
const Bannar = () => {
    return (
        <div className="rounded  d-block bannar" style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${bg})`,
          }} >
            <h1 >BEST FOOD WAITING FOR YOU BELLY</h1>
               <img src={foodLover2} alt=""/>
        </div>   
    );
};

export default Bannar;