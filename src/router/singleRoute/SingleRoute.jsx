import "./SingleRoute.css"
import { products } from "../../mock";
import { useParams } from "react-router-dom"


import { PiShoppingCart } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa6";

import { useDispatch } from 'react-redux';
import { addToCart } from "../../redux/cartSlice";
import { addToLike } from "../../redux/likesSlice"

function SingleRoute(){
    const params = useParams();
    console.log(params)

    const data = products.find((item) => item.id === Number(params.id));
    console.log(data)

    const dispatch = useDispatch();
    const dispatch2 = useDispatch();


    return(
        <div className='container'>
         <div className='singleroute'>
            <div className='image'>
               <img src={data.image} alt="" />
            </div>
            <div>
               <p className='rating1'>⭐️⭐️⭐️⭐️⭐️(412)</p>             
               <p className='title'>{data.title}</p>                
               <b>₹{data.price}</b>
               <div className="buttons"><button onClick={() => dispatch(addToCart(item))} className="shopping"><PiShoppingCart /></button><button  onClick={() => dispatch2(addToLike(item))}><FaRegHeart /></button></div> 
            </div>
         </div>
            
            
        </div>
    )
}

export default SingleRoute