import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Section.css';

const Section = () => {

    const first = "breakfast";
    const second = "lunch";
    const third = 'dinner'
  
    return (
        <div className="container section">
            <nav>
                <Link to={"/" + first} activeClassName="active">Breakfat</Link>
                <Link to={"/"+second}>Lunch</Link>
                <Link to={"/"+third}>Dinner</Link>
            </nav>
        </div>
    );
};

export default Section;