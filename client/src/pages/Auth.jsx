import React, { useState } from 'react'
import Login from '../components/Login'
import bg from '../assets/auth.png'
import Register from '../components/Register'
const Auth = () => {

  const [reg,setReg]=useState(false)

  return (
    <div className='bg_light dark:from-slate-700 dark:via-slate-800 dark:to-slate-600 h-full min-h-screen' >
      <div className='flex flex-col items-center gap-10 pt-28 dark:text-white'>
        <h1 className='text_red text-3xl font-bold'>
            Welcome To Dropify!
        </h1>
        <div className='flex justify-between md:w-full items-center md:px-10 lg:px-20 xl:px-32'>
        <img  className='hidden md:block md:max-w-[400px] lg:max-w-[500px]' src={bg} />

        {!reg ?
         <div className='flex flex-col items-center'>
         <Login/>
         <p>Doesn't have an account? <span className='font-bold cursor-pointer hover:opacity-80' onClick={()=>setReg(true)}>Register</span></p>
         </div>
        :
        <div className='flex flex-col items-center'>
        <Register/>
        <p className='pb-8'>Already have an account? <span className='font-bold cursor-pointer hover:opacity-80' onClick={()=>setReg(false)}>Login</span></p>
        </div>
        }

       
        
        </div>
       
      </div>
    </div>
  )
}

export default Auth
