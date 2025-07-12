import React from 'react'
import { useState } from 'react';


const Login = () => {

  const [currentState, setCurrentState] = useState('login'); // 'login' or 'register'
  const onSubmitHandler = async (event)=> {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
      {currentState == 'login' ? '' : <input type='text' className=' px-1.5 w-full py-2 border-3 border-gray-800' style={{ borderColor: '#cccac2' }}  placeholder='Name:' required/>}
      <input type='email' className='px-1.5 w-full py-2 border-3 border-gray-800' style={{ borderColor: '#cccac2' }}  placeholder='Email:' required/>
      <input type='password' className='px-1.5 w-full py-2 border-3 border-gray-800' style={{ borderColor: '#cccac2' }}  placeholder='Password:' required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='text-gray-500 cursor-pointer'>Forgot Password?</p>
        {
          currentState === 'login' ? 
          <p onClick={() => setCurrentState('register')} className='text-gray-500 cursor-pointer'>Create an account</p> : 
          <p onClick={() => setCurrentState('login')} className='text-gray-500 cursor-pointer'>Already have an account?</p>
        }
      </div>
      <button className='px-8 my-2 mt-4 mb-58 py-2 bg-black rounded text-gray-400'>{currentState === 'login' ? 'Sign-In' : 'Sign-Up'}</button>
    </form>
  )
}

export default Login