import React from 'react'
import exchange_icon from '../assets/exchange_icon.png'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={exchange_icon} className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>15 days return Policy</p>
            <p className='text-gray-400'>We offer 15 days free return Policy</p>
        </div>
        <div>
            <img src={exchange_icon} className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>15 days return Policy</p>
            <p className='text-gray-400'>We offer 15 days free exchange Policy</p>
        </div>

        <div>
            <img src={exchange_icon} className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>Best customer support</p>
            <p className='text-gray-400'>WE provide 24/7 customer support</p>
        </div>

       
        
    </div>
  )
}

export default OurPolicy