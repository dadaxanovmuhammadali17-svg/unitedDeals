import "./Banner.css"
import playstation from "../../assets/playstation.svg"
import { FaArrowRight } from "react-icons/fa";
import phone from "../../assets/phonegoogle.svg"
import airpods from "../../assets/airpods.svg"
import package1 from "../../assets/package.svg"
import trophy from "../../assets/Trophy.svg"
import creditcard from "../../assets/CreditCard.svg"
import headset from "../../assets/Headphones.svg"
function Banner(){
  return(
    <div className='container'>
      <div className='banner-main'>
          <div className='banner-main-big'>
              <div className='bmain-texts'>
                <p className='top-text'>--- THE BEST PLACE TO PLAY</p>
                <p className='xbox-text'>Xbox Consoles</p>
                <p className='info-text'>Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for ₹2 USD.</p>
                <button className='banner-btn'>SHOP NOW <FaArrowRight/></button>
              </div>
              <img src={playstation} alt="" />
          </div>
          <div>
            <div className='google-phone-card-banner'>
                <div className='phone-card-texts'>
                  <p className='phone-summer'>SUMMER SALES</p>
                  <p className='phone-info'>New Google Pixel 6 pro</p>
                  <button className='banner-btn'>SHOP NOW <FaArrowRight/></button>
                </div>
                <img src={phone} alt="" />
            </div>
            <div className='airpods-card-banner'>
              <img src={airpods} alt="" />
              <div className='airpods-card-texts'>
                <p className='airpods-info'>Xiaomi FlipBuds Pro</p>
                <p className='airpods-price'>₹299 USD</p>
                <button className='banner-btn'>SHOP NOW <FaArrowRight/></button>
              </div>
            </div>
          </div>
          
      </div>
      <div className='banner2'>
          <div className='banner2-card'>
            <img src={package1} alt="" />
            <div>
              <p className='b2-card-text'>Fasted Delivery</p>
              <p className='b2-card-text-info'>Delivery in 24/H</p>
            </div>
          </div>
          <div className='banner2-card'>
            <img src={trophy} alt="" />
            <div>
              <p className='b2-card-text'>24 Hours Return</p>
              <p className='b2-card-text-info'>100% money-back guarantee</p>
            </div>
          </div>
          <div className='banner2-card'>
            <img src={creditcard} alt="" />
            <div>
              <p className='b2-card-text'>Secure Payment</p>
              <p className='b2-card-text-info'>Your money is safe</p>
            </div>
          </div>
          <div className='banner2-card'>
            <img src={headset} alt="" />
            <div>
              <p className='b2-card-text'>Support 24/7</p>
              <p className='b2-card-text-info'>Live contact/message</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Banner;