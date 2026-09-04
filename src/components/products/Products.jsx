import "./Products.css"
import { products } from '../../mock'

import { PiShoppingCart } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa6";

import { useDispatch } from 'react-redux';
import { addToCart } from "../../redux/cartSlice";
import { addToLike } from "../../redux/likesSlice"


function Products(){
       const dispatch = useDispatch();
    const dispatch2 = useDispatch();
   return(
      <div className='container'>
         <div className="products">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <p>⭐️⭐️⭐️⭐️⭐️(412)</p>             
            <p>{item.title}</p>                
            <b>₹{item.price}</b>
            <div className="buttons"><button onClick={() => dispatch(addToCart(item))} className="shopping"><PiShoppingCart /></button><button  onClick={() => dispatch2(addToLike(item))}><FaRegHeart /></button></div>         
          </div>
            ))}
        </div>
      </div>
   )
}

export default Products