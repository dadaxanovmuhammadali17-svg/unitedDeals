import "./Home.css"
import Banner from '../../components/banner/Banner'
import Hero from '../../components/hero/Hero'
import Products from '../../components/products/Products'

function Home(){
  return(
    <div>
      <Banner/>
      <Products/>
      <Hero/>
    </div>
  )
}

export default Home