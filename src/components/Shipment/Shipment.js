import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import './Shipment.css';
const Shipment = () => {

    const [information , setInformation] = useState({
        city :'',
        postoffice:'',
        road :'',
        village : ''
    })
    const history = useHistory();

   
   
    const handleAdd = (e) =>{

        if(information.city && information.postoffice && information.road && information.village){
            history.push('/placeOrder');
        }
       
        e.preventDefault();
    }


    const handleData = (e) =>{
        let valid = true;
        if(e.target.name === 'city'){
            valid = e.target.value.length >=3;
        }
        if(e.target.name === 'postoffice'){
            valid = e.target.value.length >=3;
        }
        if(e.target.name === 'road'){
            valid = e.target.value.length >=1;
        }
        if(e.target.name === 'village'){
            valid = e.target.value.length >=3;
        }
        if(valid){
            const userInformation = {...information};
            userInformation[e.target.name] = e.target.value;
            setInformation(userInformation)
        }
    }
    return (
        <div className='App container shipment login mt-5 mb-5'>
            <h3 className='delivary'>Edit Delivary Details ...</h3>

           <form onSubmit={handleAdd}>
               <input type="text" name="city" onBlur={handleData} placeholder='City' required/>
               <br/>
               <input type="text" name="postoffice" onBlur={handleData} placeholder='Post office' required/>
               <br/>
               <input type="text" name="road" onBlur={handleData} placeholder='Road No' required/>
               <br/>
               <input type="text" name="village" onBlur={handleData} placeholder='Village' required/>
               <br/>
               <input type="submit" value="Save and Continue" className='btn btn-danger'/>
           </form>
         
        </div>
    );
};

export default Shipment;