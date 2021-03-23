import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import Product from '../Product/Product';
const Shop = () => {

  let {key} =  useParams();
   key=(key)?key:'breakfast';

   const products = fakeData.filter(product => product.category === key);
   const history = useHistory();
    return (
        <div className="container-fluid">

            {
                products.map(product => <Product product={product} key={product.id}></Product>)
            }
               <div style={{textAlign: 'center'}} className="m-5 p-5">
            <button className="btn btn-danger" onClick={()=> history.push('/shipment')}>Checkout Your Order</button>
        </div>
           
        </div>
    );
};

export default Shop;