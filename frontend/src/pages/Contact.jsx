import React from 'react'
import Title from '../components/Title'
import contect_us from '../assets/contect_us.png'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div >
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={' US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={contect_us} alt='contact_us' className='w-full md:max-w-[450px] sm:w-96 rounded-lg shadow-lg' />
        <div className='flex flex-col justify-center items-start mx-20 gap-4'>
          <p className='font-semibold text-xl text-gray-600'>Our Store:</p>
          <p className='font-semibold text-l text-gray-500 '>123 Fashion St<br/> Style City, CA 12345</p>
          <p className='font-semibold text-xl text-gray-600'>Tel:</p>
          <p className='font-semibold text-l text-gray-500'>(123) 456-7890</p>
          <p className='font-semibold text-xl text-gray-600'>E-mail:</p>
          <p className='font-semibold text-l text-gray-500'>info@fashionstore.com</p>
          <p className='font-semibold text-xl text-gray-600'>Follow Us:</p>
          <p className='font-semibold text-l text-gray-500'>Instagram | Facebook | Twitter</p>
          <p className='font-semibold text-l text-gray-500 mb-15'>@Threadsy</p>

          <p className='font-semibold text-l text-gray-500'>Learn more about our teams and job openings</p>
          <button style={{ backgroundColor: '#d9d6cf', borderColor: '#d9d6cf' }}className='border  rounded-md px-4 py-2 hover:bg-gray-100 shadow-lg ' >Explore Jobs</button>

        </div>
      </div>


      <NewsletterBox/>
    </div>
  )
}

export default Contact