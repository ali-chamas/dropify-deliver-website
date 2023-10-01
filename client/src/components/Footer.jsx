import React from 'react'
import {BsTwitter,BsInstagram,BsFacebook} from 'react-icons/bs'
const Footer = () => {
  return (
    <div className=' bg-slate-300 dark:bg-slate-900 p-5 py-10 flex flex-col items-center gap-8 '> 


    <div className='flex justify-evenly gap-4 w-full items-center dark:text-white'>
    <div className='flex flex-col gap-5 '>
          <a href="/" className=' hover:text-red-800 '>Terms and conditions</a>
          <a href="/" className='hover:text-red-800'>Return Policy</a>
          <a href="/" className='  hover:text-red-800'>About us</a>
      </div>
     <img src="/logo.svg" className='max-w-[100px] mr-8 md:mr-0' alt="" />
      <div className='flex flex-col gap-5 '>
          <a href="/" className='  hover:text-red-800'>Do you Want a request? </a>
          <a href="/" className=' hover:text-red-800'>Who are we?</a>
          <a href="/" className=' hover:text-red-800'>Why us?</a>
      </div>
      </div>
      
      <div className='flex  gap-5 text-lg text-red-800' >
        <a href="" className='hover:opacity-90 '><BsFacebook/></a>
        <a href="" className='hover:opacity-90 '><BsInstagram/></a>
        <a href="" className='hover:opacity-90 '><BsTwitter/></a>
      
      
      </div>

      <p className='text-red-600 text-sm'>Made by Ali Chamas</p> 
    </div>
  )
}

export default Footer
