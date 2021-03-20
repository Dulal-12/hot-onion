import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import Product from '../Product/Product';
const Shop = () => {

  let {key} =  useParams();
   key=(key)?key:'breakfast';

   const products = fakeData.filter(product => product.category === key);
  
    return (
        <div className="container-fluid">

            {
                products.map(product => <Product product={product} key={product.id}></Product>)
            }
           
        </div>
    );
};

export default Shop;