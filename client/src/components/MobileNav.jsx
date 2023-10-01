
import React,{useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import {MdDarkMode} from 'react-icons/md'

import {BsFillSunFill} from 'react-icons/bs'


const MobileNav = ({darkMode,setDarkMode,user,setUser}) => {
    const [open,setOpen]=useState(false)
  return (
    <div onClick={()=>setOpen(!open)} className='text-3xl text-black '>

        <div className='dark:text-white cursor-pointer'>
        {!open ?<GiHamburgerMenu/> : <AiOutlineClose/>}
        </div>

        <div className={` ${open?'flex shadow-lg absolute p-5 px-10 flex-col gap-4 right-0 m-2 items-center   text-[18px] bg-slate-300 dark:bg-slate-700 dark:text-white bg-opacity-95 backdrop-blur-lg backdrop-filter dark:bg-opacity-95 ': 'hidden'} `}>
        

          {user ?
          <div className='flex flex-col gap-3 items-center'>
          <a href="/profile" className='font-bold text-red-500'>Profile</a>
          <a href="/order" >Order a delivery</a>
          <button className='opacity-80 hover:opacity-100 bg-black p-2 px-6 rounded-full text-white dark:bg-gray-100 text-sm dark:text-black '
                
                onClick={()=>{setUser(null);window.localStorage.setItem('user','');setTimeout(function(){ window.location.href="http://localhost:3000/auth" }, 1000);}}>
                      Sign Out
                </button>
          </div>

          : 
          <a href="/auth"
                className='opacity-80 hover:opacity-100 bg-black p-3 px-6 rounded-full text-white dark:bg-gray-100 text-sm dark:text-black'
                >
                  Login
                </a> }
           
           
           
           
           <div className='pt-4 text-2xl'>
            {darkMode==='dark' ? <button onClick={setDarkMode}><MdDarkMode/></button>: <button onClick={setDarkMode}><BsFillSunFill/></button>}

            </div>
           
        </div>
        
      
    </div>
  )
}

export default MobileNav
