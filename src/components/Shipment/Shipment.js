import React from 'react';
import './Shipment.css';
const Shipment = () => {


    const handleAdd = (e) =>{

        e.preventDefault();
    }
    return (
        <div className='App container shipment login mt-5 mb-5'>
            <h3 className='delivary'>Edit Delivary Details ...</h3>

           <form onSubmit={handleAdd}>
               <input type="text" name="city" id="" placeholder='City' required/>
               <br/>
               <input type="text" name="postoffice" id="" placeholder='Post office' required/>
               <br/>
               <input type="text" name="road" id="" placeholder='Road No' required/>
               <br/>
               <input type="text" name="village" id="" placeholder='Village' required/>
               <br/>
               <input type="submit" value="Save and Continue" className='btn btn-danger'/>
           </form>
        </div>
    );
};

export default Shipment;