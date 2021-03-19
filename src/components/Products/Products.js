import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import Product from '../Product/Product';
const Products = () => {

  let {key} =  useParams();
   key=(key)?key:'breakfast';

   const products = fakeData.filter(product => product.category === key);
   console.log(products);
  
    return (
        <div className="container-fluid">

            {
                products.map(product => <Product product={product}></Product>)
            }
           
        </div>
    );
};

export default Products;