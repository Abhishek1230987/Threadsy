import logo from '../assets/logo.jpg';
import search from '../assets/search.png';
import profile from '../assets/profile.png';
import menu from '../assets/menu.jpg';
import cart from '../assets/cart.jpg';
import '../index.css';
import { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount} = useContext(ShopContext);

  return (
    <div className='w-full px-6 flex justify-between items-center py-5 font-medium bg-[#1b1a1b]'>
      {/* Logo */}
      <Link to='/'>
        <img src={logo} className='w-20 object-contain' alt='Logo' />
      </Link>

      {/* Nav Links */}
      <ul className='hidden sm:flex gap-5 text-sm text-gray-400'>
        <NavLink to="/" className="flex flex-col items-center gap-1 hover:text-gray-500">
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-600 hidden' />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1 hover:text-gray-500">
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-600 hidden' />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1 hover:text-gray-500">
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-600 hidden' />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1 hover:text-gray-500">
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-600 hidden' />
        </NavLink>
      </ul>

      {/* Icons */}
      <div className='flex items-center gap-6 sm:gap-10 text-gray-600'>
        {/* Search */}
        <div onClick={() => setShowSearch(true)} className='cursor-pointer'>
          <img src={search} className='w-5' alt='Search' />
        </div>

        {/* Profile, Cart, Menu (Horizontally aligned) */}
        <div className='flex items-center gap-6'>
          {/* Profile with dropdown */}
          <div className='group relative'>
            <Link to='/Login'><img className='w-5 cursor-pointer' src={profile} alt='Profile' /></Link>
            <div className='group-hover:block hidden absolute right-0 pt-4 z-50'>
              <div className='flex flex-col gap-2 py-3 w-36 px-5 bg-[#292329] text-gray-300 rounded shadow-lg'>
                <p className='cursor-pointer hover:text-gray-400'>My Profile</p>
                <Link to='/Orders'><p className='cursor-pointer hover:text-gray-400'>Orders</p></Link>
                <p className='cursor-pointer hover:text-gray-400'>Logout</p>
              </div>
            </div>
          </div>

          {/* Cart */}
          <Link to='/cart' className='relative'>
            <img src={cart} className='w-5 min-w-5' alt='Cart' />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
          </Link>

          {/* Menu (Mobile) */}
          <img
            onClick={() => setVisible(true)}
            src={menu}
            alt='Menu'
            className='w-6 cursor-pointer sm:hidden'
          />
        </div>
      </div>

      {/* Mobile Side Drawer */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col gap-4 p-3 bg-[#1b1a1b] text-white'>
          <NavLink
            onClick={() => setVisible(false)}
            to='/'
            className={({ isActive }) =>
              `hover:text-gray-500 py-2 pl-6 border-b ${isActive ? 'bg-white text-black rounded' : ''}`
            }>
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to='/collection'
            className={({ isActive }) =>
              `hover:text-gray-500 py-2 pl-6 border-b ${isActive ? 'bg-white text-black rounded' : ''}`
            }>
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to='/about'
            className={({ isActive }) =>
              `hover:text-gray-500 py-2 pl-6 border-b ${isActive ? 'bg-white text-black rounded' : ''}`
            }>
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to='/contact'
            className={({ isActive }) =>
              `hover:text-gray-500 py-2 pl-6 border-b ${isActive ? 'bg-white text-black rounded' : ''}`
            }>
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
