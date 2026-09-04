import "./Navbar.css"
import icons from "../../assets/icons.svg"
import icon from "../../assets/Icon.svg"
import { FaArrowRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { BsArrowRepeat } from "react-icons/bs";
import { CgHeadset } from "react-icons/cg";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Navbar(){
  return(
    <div className='container'>
      <div className='navbar-header'>
          <div>
            <p className='yellow-bg-nvhd'>Black</p>
            <p className='black-bg-nvhd'>Friday</p>
          </div>
          <div>
            <p className='upto-nvhd'>Up to</p>
            <p className='per-yellow-nvhd'>59%</p>
            <p className='off-nvhd'>OFF</p>
          </div>
          <button>SHOP NOW <FaArrowRight /></button>
      </div>
      <div className='navbar-second'>
          <p className='nv2-text'>Welcome to Clicon online eCommerce store. </p>
          <div>
            <p>Follow us: <img src={icons} alt="" /></p>
            <select name="" id="">
              <option value="">Eng</option>
              <option value="">Rus</option>
              <option value="">Uzb</option>
            </select>
            <select name="" id="">
              <option value="">USD</option>
              <option value="">UZS</option>
              <option value="">RU</option>
            </select>
          </div>
      </div>
      <div className='navbar-main'>
          <div className='logo'>
              <img src={icon} alt="" />
              <Link className='logo-link' to={"/"}>UNITED DEALS</Link>
          </div>
          <div className='search-input'>
              <input type="text" placeholder='Search for anything...' />
              <p><CiSearch /></p>
          </div>
          <div className='icons-logos'>
              <p ><Link className='logo-link2' to={"/basket"}><LuShoppingCart /></Link></p>
              <p><Link className='logo-link2' to={"/likes"}><FaRegHeart /></Link></p>
              <p><AiOutlineUser /></p>
          </div>
      </div>
      <div className='navbar-three'>
          <div className='n3-icons'>
            <div className='n3-icon'>
                <p>All Category</p><p><IoIosArrowDown /></p>
            </div>
            <div>
                <p><SlLocationPin /></p><p>Track Order</p>
            </div>
            <div>
                <p><BsArrowRepeat /></p><p>Compare</p>
            </div>
            <div>
                <p><CgHeadset /></p><p>Customer Support</p>
            </div>
            <div>
                <p><IoIosInformationCircleOutline /></p><p>Need Help</p>
            </div>
          </div>
          <div>
            <p><BiPhoneCall /></p>
            <p>+1-202-555-0104</p>
          </div>
      </div>
    </div>
  )
}

export default Navbar