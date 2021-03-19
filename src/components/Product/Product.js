import React from 'react';
import './Product.css';


const Product = ({product}) => {
    
    const {name ,image,  description , price} = product;
    
    return (
        <div className="container-fluid product-container mt-5">
           <img src={image} alt=""/>
           <h6 className="name"><small>{name}</small></h6>
           <small>{description}</small>
           <p><h4>${price}</h4></p>
        </div>
       
    );
};

export default Product;