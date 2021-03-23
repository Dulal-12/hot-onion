import React,{useEffect, useState} from 'react';
import fakeData from '../../fakeData/fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import FinalState from '../FinalState/FinalState';
import './PlaceOrder.css';
const PlaceOrder = () =>{
    const [cart , setCart] = useState([]);
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        //console.log(savedCart)
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(id => {
            const product = fakeData.find(ele => ele.id === id);
            product.quantity = savedCart[id];
            return product;
        })
       
        setCart(cartProducts);
    } ,[]);
       
    console.log(cart);

    const handleRemoveProduct = (key) =>{
        const newCart = cart.filter(pd => pd.id !== key);
        setCart(newCart);
        removeFromDatabaseCart(key);
    }
    return(
        <div className='container placeOrder mt-5'>
          <div className='pd-container'>
              {
                  cart.map(product => <FinalState product={product} handleRemoveProduct={handleRemoveProduct} key={product.id}></FinalState>)
              }
          </div>
          <div className='c-container'>
              <Cart cart={cart} ></Cart>
          </div>
        </div>
    );
}
export default PlaceOrder;