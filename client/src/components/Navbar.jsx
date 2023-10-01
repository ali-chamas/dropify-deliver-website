import React, { useEffect, useState } from 'react'
import MobileNav from './MobileNav'
import {DarkModeSwitch} from 'react-toggle-dark-mode'

import profile from '../assets/profile.jpg'
const Navbar = ({darkMode,setDarkMode}) => {

const [user ,setUser]=useState(null)
const [ open , setOpen]=useState(false)


useEffect(()=>{
  if(window.localStorage.getItem('user') != ''){
    setUser(JSON.parse(window.localStorage.getItem('user')))
      }
},[])
  
const [scrolled,setScrolled]=useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 50){
        setScrolled(true)
    }else{setScrolled(false)}  }) 
  },[])


  return (

    <div className={`p-5 md:px-20 flex  justify-between md:justify-baseline fixed w-screen top-0 items-center dark:text-white  z-50  ${!scrolled ? 'bg-transparent' : 'bg-slate-200 dark:bg-slate-700 dark:bg-opacity-30   bg-opacity-30 backdrop-filter backdrop-blur-lg'}`}> 
    <a href='/' className='font-extrabold text-3xl '>Dropify<span className='text-red-500'>.</span> </a>

    <div className='md:hidden'>
    <MobileNav darkMode={darkMode} setDarkMode={setDarkMode} user={user} setUser={setUser}/>
    </div>

    <div className='hidden md:flex items-center gap-10 font-bold'>


                {user ?
                <div className='flex gap-5 items-center'>
                <a href="/order" className='opacity-80 hover:opacity-100 bg-black p-3 px-6 rounded-full text-white dark:bg-gray-100 dark:text-black'>Order a delivery</a>

                <div>
                
                  
                  
                  
                  <img src={profile} className='max-w-[60px] max-h-[70px] rounded-full cursor-pointer' onClick={()=>setOpen(!open)} alt="" />
                  
                 

                    {open &&  <div className='absolute flex flex-col items-center bg-slate-200 dark:bg-slate-600 p-3  bg-opacity-95 top-[80px] right-[110px] py-4 gap-5 dark:bg-opacity-95'>
                  <a href="/profile" className='hover:opacity-80 hover:text-red-500'>
                    profile
                  </a>
                 <button className='opacity-80 hover:opacity-100 bg-black p-2 px-6 rounded-full text-white dark:bg-gray-100 text-sm dark:text-black'
                
                onClick={()=>{setUser(null);window.localStorage.setItem('user','');setTimeout(function(){ window.location.href="http://localhost:3000/auth" }, 1000);}}>
                      Sign Out
                </button>
                   </div>  }
                
                  
                  
                
                </div>
                
                </div>
                :
                <a href="/auth"
                className='opacity-80 hover:opacity-100 bg-black p-3 px-6 rounded-full text-white dark:bg-gray-100 dark:text-black'
                >
                  Login
                </a>
                
                }

            
           
            


        
            <div >
       <DarkModeSwitch
    onChange={setDarkMode}
    checked={darkMode==='light' ? false : true}
    size={25}
    />


    </div>
       
       </div>
    </div>
  )
}

export default Navbar
