import React from 'react';
import './FinalState.css';
const FinalState = ({product , handleRemoveProduct}) => {
    const {name , image , price , id , quantity} = product;
    return (
        <div className='container final mb-5'>
            <div>
                <img src={image} alt="" srcset="" className='image-fluid'/>
            </div>
            <div>
                <p>{name}</p>
                <p>${price}</p>
                <p>Qunatity : {quantity} </p>
                <button className='btn btn-danger' onClick={()=>handleRemoveProduct(id)}>Remove</button>
            </div>
        </div>
    );
};

export default FinalState;