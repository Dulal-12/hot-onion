import React ,{useState}from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/fakeData';
import './ProductDetail.css';
import { addToDatabaseCart} from '../../utilities/databaseManager';
const ProductDetail = () => {

    const { id } = useParams();
    const product = fakeData.find(product => product.id === id);
    const { name, price, details, image } = product;
    const [cart , setCart] = useState([]);

    const handleAddProduct = (product)=>{
        const sameProduct = cart.find(pd => pd.key === product.key);
        let count = 1
        if(sameProduct){
            count = sameProduct.quantity + 1;
            const others = cart.filter(pd => pd.key !== product.key);
            setCart([...others , sameProduct])
        }
        else{
            product.quantity = 1
            setCart([...cart, product]);
        }
        addToDatabaseCart(product.id,count);
    }
    return (
        <div className="product-details m-5 p-5">
            <div className="row">
                <div className="col-md-6 col-sm-4 discription">
                    <h2>{name}</h2>
                    <p>{details}</p>
                    <h1>${price}</h1><br />
                    <button className='btn btn-danger'onClick={()=>handleAddProduct (product)}>Add to Cart</button>
                </div>
                <div className="col-md-6 col-sm-8 ">
                    <img src={image} alt="" className="img-fluid" />
                </div>
            </div>
         
        </div>
    );
};

export default ProductDetail;