import React from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
  

const App = () => {
  return (
    <>
      <div className='bg-offwhite'>
        <ToastContainer />
        <Navbar />
      {/*we are using the Navbar component here outside because we want it to be present on all pages */}
      <SearchBar/>


      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Orders' element={<Orders />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/PlaceOrder' element={<PlaceOrder />} />
          <Route path='/product/:productid' element={<Product />} />
        </Routes>

        
        
      </div>
      <Footer/>
      </div>
      
    </>
  )
}

export default App
