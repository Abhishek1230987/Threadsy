import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductsItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className='h-full'>
      <div className='h-full flex flex-col justify-between border border-gray-200 rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-300'>
        <div className='overflow-hidden'>
          <img
            className='hover:scale-110 transition ease-in-out duration-300 w-full h-48 object-cover rounded'
            src={image[0]}
            alt='Product'
          />
        </div>
        <div className='pt-3 text-gray-500'>
          <p className='text-sm font-medium line-clamp-2'>{name}</p>
          <p className='text-sm mt-1 text-gray-500'>{currency} {price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductsItem;
