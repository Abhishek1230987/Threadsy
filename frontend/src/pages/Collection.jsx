import React, {use, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import { useContext } from 'react'
import dropdown from '../assets/dropdown.png'
import Title from '../components/Title.jsx'
import { useEffect } from 'react'
import ProductsItem from '../components/ProductsItem.jsx'




const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = React.useState(false);

  const [filterProducts, setFilterProducts] = useState([]);
  const {product, search, showSearch} = useContext(ShopContext); 

// filtering of category
  const [category, setCategory] = useState([]);
// filtering of subCategory
  const [subCategory, setSubCategory] = useState([]);
  // Sorting of price
  const [sortType, setSortType] = useState('relavent');
  
  const toggleCategory = (e) => {
   if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item=> item !== e.target.value));
    }else
    {
      setCategory(prev=> [...prev, e.target.value]);
    }
   };
  //  
   const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){ 
      setSubCategory(prev => prev.filter(item => item !== e.target.value)); 
    }else {
      setSubCategory(prev => [...prev, e.target.value]);
    }
   }
 
    // filter Logics
    const applyFilter = () => {

      let productsCopy = [...products];

      if(showSearch && search){
        productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
      }

      if(category.length > 0) {
        productsCopy = productsCopy.filter(item => category.includes(item.category));
      }
      if(subCategory.length > 0) {
        productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
      }
      setFilterProducts(productsCopy);
    }


  
    useEffect(() => {
      applyFilter();
    }, [category, subCategory, search, showSearch]);

    // Sorting(price) Logics
    const sortProduct = () => {

      let fpcopy = filterProducts.slice();

      switch(sortType){
        case 'low/high':
          setFilterProducts(fpcopy.sort((a,b) => (a.price -b.price)));
          break;
        case 'high/low':
          setFilterProducts(fpcopy.sort((a,b) => (b.price -a.price)));
          break;
        default:
          applyFilter();
          break;
      }
    }

    useEffect(() => {
      sortProduct();
    }, [sortType])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Option: */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img src={dropdown} className={`w-4 h-6 sm:hidden ${showFilter ? 'rotate-270' : ''}`} alt='dropdown_icon' />
        </p>

        {/* Categories */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGOChange</p>
          <div className='flex flex-col gap-2 text-gray-700'>
            <p className='flex gap-2'>
              <input type='checkbox' value={'Men'} onChange={toggleCategory} className='w-4 h-4' />Men
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' value={'Women'} onChange={toggleCategory} className='w-4 h-4' />Women
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' value={'Kids'} onChange={toggleCategory} className='w-4 h-4' />Kids
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' value={'Gadges'} onChange={toggleCategory} className='w-4 h-4' />Gadges
            </p>
          </div>
        </div>

        {/* SubCategories */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>SubCategories</p>
          <div className='flex flex-col gap-2 text-gray-700'>
            <p className='flex gap-2'>
              <input type='checkbox' value={'Topwear'} onChange={toggleSubCategory} className='w-4 h-4' />Topwear
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' value={'Bottomwear'} onChange={toggleSubCategory} className='w-4 h-4' />Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' value={'Winterwear'} onChange={toggleSubCategory} className='w-4 h-4' />Winetrwear
            </p>
            <p className='flex gap-2'>
              <input type='checkbox' value={'Kichen Gadges'} onChange={toggleSubCategory} className='w-4 h-4' />Kichen Gadges
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low/high">Sort by: Low to High</option>
            <option value="high/low">Sort by: High to Low</option>
          </select>
        </div>
        {/* Map products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {
          filterProducts.map((item,index) => (
            <ProductsItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Collection
