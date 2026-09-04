import "./Basket.css"
import { useSelector } from "react-redux";


function Basket(){

    const user = useSelector((item) => item.cart.value);
    console.log(user)

    return(
        <div className="baskets">

            <table className="table-basket">
                <tr className="tr-main">
                    <th>Item</th>
                    <th>Price</th>
                    <th>Name</th>
                </tr>
            {
                user.map((item) =>{
                    return(
                        <tr className="card" key={item.id}>
                            <td className="name"><img src={item.image} alt="" /></td>
                            <td className="price">{item.price}</td>
                            <td className="info">{item.title}</td>
                        </tr>
                    )
                })
            }

            </table>
            
        </div>
    )
}

export default Basket;