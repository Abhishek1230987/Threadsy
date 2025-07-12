import events from 'inquirer/lib/utils/events'
import React from 'react'

const NewsletterBox = () => {

    const onSubmitDefault = (event) => {
    event.preventDefault();
    }

  return (
    <div className='text-center mb-4'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20% OFF</p>
        <p className='text-gray-400 mt-3'>Subscribe to get latest updates and Offers</p>
        <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 mb-1'>
            <input className='w-full sm:flex-1 outline-none' type='email' placeholder='enter you email' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsletterBox