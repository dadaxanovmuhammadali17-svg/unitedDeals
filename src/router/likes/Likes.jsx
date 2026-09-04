import "./Likes.css"
import { useSelector } from "react-redux";

function Likes(){

    const user = useSelector((item) => item.like.value);
    console.log(user)

    return(
        <div className="likes">
            {
                user.map((item) =>{
                    return(
                        <div className="card" key={item.id}>
                            <img src={item.image} alt={item.title} />
                              <p>⭐️⭐️⭐️⭐️⭐️(412)</p>             
                              <p>{item.title}</p>                
                              <b>₹{item.price}</b>
                                    
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Likes;