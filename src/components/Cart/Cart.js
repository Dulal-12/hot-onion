import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    const price = cart.reduce((sum , pd)=> sum + pd.price , 0);
    const tax = (price/100)*5;
    const total = price + tax;
    return (
        <div className='App p-5'>
            <p>Total : {total.toFixed(2)}</p>
            <button className='btn btn-danger'>PlaceOrder</button>
        </div>
    );
};

export default Cart;