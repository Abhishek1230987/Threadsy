import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import star from '../assets/star.jpg';
import star_dull from '../assets/star_dull.jpg';
import RelatedProduct from '../components/RelatedPrdoduct';

const Product = () => {
  const { productid } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    const item = products.find((item) => item._id === productid);
    if (item) {
      setProductData(item);
      setImage(item.images[0]);
    }
  }, [productid, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* ----------Product Data------------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* ---------------Product Images----------------- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-start sm:justify-start sm:w-[18.7%] w-full sm:max-h-[500px] gap-2 sm:gap-3'>
            {
              productData.images.map((item, index) => (
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  key={index}
                  className='w-[24%] sm:w-full aspect-square object-cover flex-shrink-0 cursor-pointer border-2 border-transparent hover:border-gray-300 transition-all duration-200 rounded'
                  alt=''
                />
              ))
            }
          </div>
          <div className='w-full sm:w-[78%]'>
            <img src={image} className='w-full h-auto object-cover rounded' alt='loading...' />
          </div>
        </div>

        {/* ---------------Product info----------------- */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={star} alt='' className='w-3.5' />
            <img src={star} alt='' className='w-3.5' />
            <img src={star} alt='' className='w-3.5' />
            <img src={star} alt='' className='w-3.5' />
            <img src={star_dull} alt='' className='w-3.5' />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2 flex-wrap'>
              {
                productData.sizes.map((item, index) => (
                  <button
                    onClick={() => setSize(item)}
                    key={index}
                    className={`border border-gray-300 px-3 py-1 rounded hover:bg-gray-100 transition-colors ${item === size ? 'bg-gray-200' : ''}`}
                  >
                    {item}
                  </button>
                ))
              }
            </div>
            <button
              onClick={() => addToCart(productData._id, size)}
              className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 w-fit'
            >
              ADD TO CART
            </button>
            <hr className='mt-8 sm:w-4/5 text-gray-400' />
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% original product</p>
              <p>Cash on delivery is available on this product</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ------------ Description & Review Section ------------------ */}
      <div className='mt-20'>
        <div className='flex'>
          <p className='border-2 border-gray-200 px-5 py-3 text-sm'>Description</p>
          <p className='border border-gray-200 px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border-2 border-gray-200 px-6 py-6 text-sm text-gray-500'>
          <p>This product is crafted with the highest quality materials, offering both style and comfort.</p>
          <p className='mt-4'>Whether you're heading out for a casual day or dressing up for an occasion, this item is a perfect fit. Breathable, lightweight, and easy to maintain—it's a must-have in your wardrobe.</p>
        </div>
      </div>

      {/* -------------- Display Related Products ---------------------- */}
      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : <div className='opacity-0'></div>;
};

export default Product;
