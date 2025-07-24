import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import stripe_logo from '../assets/stripe_logo.png'
import razorpay_logo from '../assets/razorpay_logo.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const PlaceOrder = () => {

  const [method, setMethod] = useState('cod') // 'cod' for Cash on Delivery, 'stripe' for Stripe, 'razorpay' for Razorpay

  const navigate = useNavigate();


  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>

      {/* -----------Left Side Of PlaceOrder------------------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY '}  text2={'INFORMATION'}/>
        </div>
        
        <div className='flex gap-3'>
          <input className='border-3 rounded py-1.5 px-3.5 w-full' style={{ borderColor: '#cccac2' }} type='text' placeholder='First name:'/> 
          <input className='border-3 rounded py-1.5 px-3.5 w-full' style={{ borderColor: '#cccac2' }} type='text' placeholder='Middle name:'/>
          <input className='border-3 rounded py-1.5 px-3.5 w-full' style={{ borderColor: '#cccac2' }} type='text' placeholder='Last name:'/>
        </div>

        <input className='border-3 rounded py-1.5 px-3.5 w-full' style={{ borderColor: '#cccac2' }} type='email' placeholder='E-mail:'/>

        <input className='border-3 rounded py-1.5 px-3.5 w-full' style={{ borderColor: '#cccac2' }} type='text' placeholder='Street:'/>

        <div className='flex gap-3'>
          <input className='border-3 rounded py-1.5 px-3.5 w-full' style={{ borderColor: '#cccac2' }} type='text' placeholder='City:'/> 
          <input className='border-3 rounded py-1.5 px-3.5 w-full' style={{ borderColor: '#cccac2' }} type='text' placeholder='State:'/>
          <input className='border-3 rounded py-1.5 px-3.5 w-full' style={{ borderColor: '#cccac2' }} type='text' placeholder='Country:'/>
        </div>

        <div className='flex gap-3'>
          <input className='border-3 rounded py-1.5 px-3.5 w-full' style={{ borderColor: '#cccac2' }} type='number' placeholder='Zip Code:'/> 
          <input className='border-3 rounded py-1.5 px-3.5 w-full' style={{ borderColor: '#cccac2' }} type='number' placeholder='Phone No :'/>
        </div>


      </div>

      {/* -----------Right Side Of PlaceOrder------------------ */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>

        <div className='mt-12'>
          <Title text1={'PAYMENT '} text2={'METHOD'}/>
          {/* ---------------PAYMENT METHOD SELECTION---------- */}
          <div className='flex gap-3 flex-col text-gray-100 lg:flex-row'>

            {/* SRIPE */}
            <div onClick = {() => setMethod('stripe')} className='flex items-center gap-3 p-2 px-3 cursor-pointer' style={{ borderColor: '#cccac2' }}>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`} ></p>
              <img className='h-9 mx-7' src={stripe_logo} style={{ borderColor: '#cccac2' }} alt='img...'/>              
            </div>

            {/* RAZORPAY */}
            <div onClick = {() => setMethod('razorpay')} className='flex items-center gap-3 p-2 px-3 cursor-pointer' style={{ borderColor: '#cccac2' }}>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className='h-9 mx-7' src={razorpay_logo} style={{ borderColor: '#cccac2' }} alt='img...'/>              
            </div>
          
            {/* CASH ON DELIVERY */}
            <div onClick = {() => setMethod('cod')} className='flex items-center gap-3 p-2 px-3 cursor-pointer' style={{ borderColor: '#cccac2' }}>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''} `} ></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>             
            </div>
          </div>

          <div className='w-full text-end '>
            <button onClick={() => navigate('/orders')} className='bg-black text-white rounded px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>
 
        </div>
      </div>
    </div>
  ) 
}

export default PlaceOrder