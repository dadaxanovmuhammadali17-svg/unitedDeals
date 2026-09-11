import "./Basket.css"
import { useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from 'react';



function Basket(){

    const user = useSelector((item) => item.cart.value);
    console.log(user)
    const [count, setCount] = useState(1);

    const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    setCount(count + 1);
  };


    return(
        <div className="baskets container">
            <h1 className='mycart'>My cart</h1>
            <p className='lets'>Let’s create your account</p>

            <table className="table-basket">
                
            {
                user.map((item) =>{
                    return(
                        <tr className="card" key={item.id}>
                            <td className="name"><img src={item.image} alt="" /></td>
                            <td className="info">{item.title}</td>
                            <td className="price">₹{item.price}</td>
                            <td className="counter">
                                  <button className="minus" onClick={decrement}>-</button><span className="count">{count}</span><button className="plus" onClick={increment}>+</button></td>
                            <td className="price">₹{item.price}</td>
                            <td className="delete"><RiDeleteBin6Line /></td>
                        </tr>
                    )
                })
            }

            </table>
            
        </div>
    )
}

export default Basket;