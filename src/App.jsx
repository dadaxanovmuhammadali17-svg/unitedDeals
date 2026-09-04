import './App.css'
import Navbar from './components/navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './router/home/Home'
import Footer from './components/footer/Footer'
import Likes from './router/likes/Likes'
import Basket from './router/basket/Basket'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/likes' element={<Likes/>} />
        <Route path='/basket' element={<Basket/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
