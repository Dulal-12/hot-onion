import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';


const Product = ({ product }) => {

    const { name, image, description, price, id } = product;

    return (
        <div className="container-fluid product-container mt-5">
            <img src={image} alt="" />
            <h6 className="name"><small><Link to={'/food/' + id}>{name}</Link></small></h6>
            <small>{description}</small>
            <p><h4>${price}</h4></p>
        </div>

    );
};

export default Product;