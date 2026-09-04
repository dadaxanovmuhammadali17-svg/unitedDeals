import "./Hero.css"
import { FaArrowRight } from "react-icons/fa";
import macbook from "../../assets/macbook.svg"
import { heroProduct } from '../../mock';
import latest1 from "../../assets/latest1.svg"
import latest2 from "../../assets/latest2.svg"
import latest3 from "../../assets/latest3.svg"
import latest11 from "../../assets/latest11.svg"
import latest12 from "../../assets/latest12.svg"
import latest13 from "../../assets/latest13.svg"
import comLogos from "../../assets/companylogos.svg"



function Hero(){
  return(
    <div className='container'>
        <div className='mac-hero'>
            <div className='mac-texts'>
              <button className='mac-price'>SAVE UP TO ₹200.00</button>
              <p className='mac-name'>Macbook Pro</p>
              <p className='mac-info'>Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage</p>
              <button className='banner-btn'>SHOP NOW  <FaArrowRight/></button>
            </div>
            <img src={macbook} alt="" />
        </div>
        <div className='hero-product'>
          {
            heroProduct.map((item) =>{
              return(
                <div className='hero-product-card' key={item.id}>
                  <img src={item.image} alt="" />
                  <div className='hero-product-texts'>
                    <p className='card-info'>{item.name}</p>
                    <p className='card-price'>{item.price}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='latest-news'>
          <p className='latest-text'>Latest News</p>
          <div className='latest-cards'>
            <div className='latest-card'>
              <img src={latest1} alt="" />
              <div>
                <img src={latest11} alt="" />
                <p className='latest-card-maintx'>Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae. </p>
                <p className='latest-card-info'>Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem. </p>
                <button className='latest-btn'>READ MORE <FaArrowRight/></button>
              </div>
              
            </div>
            <div className='latest-card'>
              <img src={latest2} alt="" />
              <div>
                <img src={latest12} alt="" />
                <p className='latest-card-maintx'>Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.</p>
                <p className='latest-card-info'>Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem. </p>
                <button className='latest-btn'>READ MORE <FaArrowRight/></button>
              </div>
              
            </div>
            <div className='latest-card'>
              <img src={latest3} alt="" />
              <div>
                <img src={latest13} alt="" />
                <p className='latest-card-maintx'>Curabitur massa orci, consectetur et blandit ac, auctor et tellus.</p>
                <p className='latest-card-info'>Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.</p>
                <button className='latest-btn'>READ MORE <FaArrowRight/></button>
              </div>
              
            </div>
          </div>
        </div>
        <div className='subscribe'>
            <p className='subscribe-text-1'>Subscribe to our newsletter</p>
            <p className='subscribe-info'>Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.</p>
            <div className='subscribe-email'>
              <input type="text" placeholder='Email address' />
              <button className='banner-btn'>SUBSCRIBE <FaArrowRight/></button>
            </div>
            <img src={comLogos} alt="" />
        </div>
    </div>
  )
}

export default Hero