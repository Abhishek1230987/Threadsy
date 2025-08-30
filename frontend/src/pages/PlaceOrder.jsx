import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import stripe_logo from '../assets/stripe_logo.png'
import razorpay_logo from '../assets/razorpay_logo.png'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const PlaceOrder = () => {

  const [method, setMethod] = useState('cod') // 'cod' for Cash on Delivery, 'stripe' for Stripe, 'razorpay' for Razorpay

  const navigate = useNavigate();
  const { backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    phoneNo: '',
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    let value = event.target.value;

    // Phone number validation: restrict to 10 digits only
    if (name === 'phoneNo') {
      // Remove any non-digit characters
      value = value.replace(/\D/g, '');
      // Limit to 10 digits
      if (value.length > 10) {
        value = value.slice(0, 10);
      }
    }

    // Zip code validation: limit to reasonable length
    if (name === 'zipCode') {
      value = value.replace(/\D/g, '');
      if (value.length > 6) {
        value = value.slice(0, 6);
      }
    }

    setFormData({ ...formData, [name]: value });
  }


  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // Validate phone number length
    if (formData.phoneNo.length !== 10) {
      toast.error('Phone number must be exactly 10 digits');
      return;
    }

    // Validate zip code length (optional, adjust as needed)
    if (formData.zipCode && formData.zipCode.length < 3) {
      toast.error('Please enter a valid zip code');
      return;
    }

    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find((product) => product._id === items));
            if (itemInfo) {
              itemInfo.quantity = cartItems[items][item];
              itemInfo.size = item;
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
        paymentMethod: method,
        payment: false,
        date: Date.now(),
      }

      switch (method) {
        case 'cod':
          const response = await axios.post(`${backendUrl}/api/order/place`, orderData, { headers: { token } });
          if (response.data.success) {
            setCartItems({});
            navigate("/orders", { replace: true });
          } else {
            toast.error(response.data.message);
          }
          break;
        case 'stripe':
          const stripeResponse = await axios.post(backendUrl + "/api/order/stripe", orderData, { headers: { token } });
          if (stripeResponse.data.success) {
            window.location.href = stripeResponse.data.session_url;
          } else {
            toast.error(stripeResponse.data.message);
          }
          break;
        case 'razorpay':
          toast.info('Razorpay payment integration coming soon!');
          break;
        default:
          break;
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('An error occurred while placing the order. Please try again.');
      }
    }

  }


  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>

      {/* -----------Left Side Of PlaceOrder------------------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY '} text2={'INFORMATION'} />
        </div>

        <div className='flex gap-3'>
          <input className='border-3 rounded py-1.5 px-3.5 w-full' style={{ borderColor: '#cccac2' }} required type='text' placeholder='First name:' name='firstName' onChange={onChangeHandler} value={formData.firstName} />
          <input className='border-3 rounded py-1.5 px-3.5 w-full' style={{ borderColor: '#cccac2' }} type='text' placeholder='Middle name:' name='middleName' onChange={onChangeHandler} value={formData.middleName} />
          <input className='border-3 rounded py-1.5 px-3.5 w-full' style={{ borderColor: '#cccac2' }} required type='text' placeholder='Last name:' name='lastName' onChange={onChangeHandler} value={formData.lastName} />
        </div>

        <input className='border-3 rounded py-1.5 px-3.5 w-full' style={{ borderColor: '#cccac2' }} required type='email' placeholder='E-mail:' name='email' onChange={onChangeHandler} value={formData.email} />

        <input className='border-3 rounded py-1.5 px-3.5 w-full' style={{ borderColor: '#cccac2' }} required type='text' placeholder='Street:' name='street' onChange={onChangeHandler} value={formData.street} />

        <div className='flex gap-3'>
          <input className='border-3 rounded py-1.5 px-3.5 w-full' style={{ borderColor: '#cccac2' }} required type='text' placeholder='City:' name='city' onChange={onChangeHandler} value={formData.city} />
          <input className='border-3 rounded py-1.5 px-3.5 w-full' style={{ borderColor: '#cccac2' }} required type='text' placeholder='State:' name='state' onChange={onChangeHandler} value={formData.state} />
          <input className='border-3 rounded py-1.5 px-3.5 w-full' style={{ borderColor: '#cccac2' }} required type='text' placeholder='Country:' name='country' onChange={onChangeHandler} value={formData.country} />
        </div>

        <div className='flex gap-3'>
          <input className='border-3 rounded py-1.5 px-3.5 w-full' style={{ borderColor: '#cccac2' }} required type='number' placeholder='Zip Code:' name='zipCode' onChange={onChangeHandler} value={formData.zipCode} />
          <input className='border-3 rounded py-1.5 px-3.5 w-full' style={{ borderColor: '#cccac2' }} required type='number' placeholder='Phone No :' name='phoneNo' onChange={onChangeHandler} value={formData.phoneNo} />
        </div>
      </div>

      {/* -----------Right Side Of PlaceOrder------------------ */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Title text1={'PAYMENT '} text2={'METHOD'} />
          {/* ---------------PAYMENT METHOD SELECTION---------- */}
          <div className='flex gap-3 flex-col lg:flex-row'>

            {/* STRIPE */}
            <div 
              onClick={() => setMethod('stripe')} 
              className={`flex items-center gap-3 p-3 px-4 cursor-pointer border rounded-lg transition-all duration-200 hover:shadow-md ${
                method === 'stripe' 
                  ? 'border-green-400 shadow-md' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              style={{ backgroundColor: '#e7e1d8' }}
            >
              <p className={`min-w-3.5 h-3.5 border-2 rounded-full transition-colors ${method === 'stripe' ? 'bg-green-400 border-green-400' : 'border-gray-400'}`}></p>
              <img className='h-8 mx-4' src={stripe_logo} alt='Stripe Payment' />
            </div>

            {/* RAZORPAY */}
            <div 
              onClick={() => setMethod('razorpay')} 
              className={`flex items-center gap-3 p-3 px-4 cursor-pointer border rounded-lg transition-all duration-200 hover:shadow-md ${
                method === 'razorpay' 
                  ? 'border-green-400 shadow-md' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              style={{ backgroundColor: '#e7e1d8' }}
            >
              <p className={`min-w-3.5 h-3.5 border-2 rounded-full transition-colors ${method === 'razorpay' ? 'bg-green-400 border-green-400' : 'border-gray-400'}`}></p>
              <img className='h-8 mx-4' src={razorpay_logo} alt='Razorpay Payment' />
            </div>

            {/* CASH ON DELIVERY */}
            <div 
              onClick={() => setMethod('cod')} 
              className={`flex items-center gap-3 p-3 px-4 cursor-pointer border rounded-lg transition-all duration-200 hover:shadow-md ${
                method === 'cod' 
                  ? 'border-green-400 shadow-md' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              style={{ backgroundColor: '#e7e1d8' }}
            >
              <p className={`min-w-3.5 h-3.5 border-2 rounded-full transition-colors ${method === 'cod' ? 'bg-green-400 border-green-400' : 'border-gray-400'}`}></p>
              <p className='text-gray-700 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>

          <div className='w-full flex justify-center mt-6'>
            <button type='submit' className='bg-black rounded text-white px-16 py-3 text-sm'  >PLACE ORDER</button>
          </div>

        </div>

      </div>
    </form>
  )
}

export default PlaceOrder