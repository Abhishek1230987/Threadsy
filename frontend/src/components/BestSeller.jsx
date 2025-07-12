import { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductsItem from './ProductsItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSellers, setBestSeller] = useState([]);

  useEffect(() => {
    
    if (products.length > 0) {
      const bestProduct = products.filter(
        (item) => item.bestSeller === true || item.bestSeller === "true"
      );
      setBestSeller(bestProduct.slice(0, 5));
    }
  }, [products]); // run effect after products load

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'BEST'} text2={' SELLERS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          From tradition to trend - discover pieces that speak your story...
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          bestSellers.map((item, index) => (
            <ProductsItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        }
      </div>
    </div>
  );
};

export default BestSeller;
