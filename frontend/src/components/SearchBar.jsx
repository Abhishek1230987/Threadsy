import React, { useEffect } from 'react'
import { ShopContext } from '../context/shopcontext.jsx';
import cross from '../assets/cross.png'  
import Search from '../assets/Search.png'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';


const SearchBar = () => {
    const{search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const[visible, setVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if(location.pathname !== '/Collection') {
      setVisible(true);
    }else {
      setVisible(false);
    }
  },[location]);

  return showSearch && visible ? (
    <div className='border border-t border-b bg-[#1b1a1b] text-center'>
        <div className='inline-flex item-center justify-center border bg-[#1b1a1b] px-5 my-2 rounded-full w-3/4 sm:w-1/2'>
        <input value={search} onChange={(e) => setSearch(e.target.value)} type='text' placeholder='Search' className='flex-1 outer-none text-sm text-gray-200'/>
        <img src={Search} className='w-4  bg-[#1b1a1b] border-none outline-none'/>
        <img onClick={() => setShowSearch(false)} src={cross} className='inline w-3 cursor-pointer ml-1'/>
        </div>

    </div>
  ) : null
};

export default SearchBar