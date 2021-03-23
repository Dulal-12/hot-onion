import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import './ProductDetail.css';

const ProductDetail = () => {

    const { id } = useParams();
    const product = fakeData.find(product => product.id === id);
    const { name, price, details, image } = product;

    return (
        <div className="product-details m-5 p-5">
            <div className="row">
                <div className="col-md-6 col-sm-4 discription">
                    <h2>{name}</h2>
                    <p>{details}</p>
                    <h1>${price}</h1><br />
                    <button className='btn btn-danger'>Add to Cart</button>
                </div>
                <div className="col-md-6 col-sm-8 ">
                    <img src={image} alt="" className="img-fluid" />
                </div>
            </div>
         
        </div>
    );
};

export default ProductDetail;