import React, { useEffect, useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'


const ProfilePopup = ({setShow,email,name,address}) => {

      const [newName,setNewName]=useState(name)
      const [newAddress,setNewAdress]=useState(address)
     
    
  const updateProfie=async()=>{
     const res = await fetch(`http://localhost:3001/users/${email}`,{
      method:'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name:newName, address:newAddress})    
      })
      if(res.ok){
        window.localStorage.setItem('user',`{"name":"${newName}","email":"${email}","address":"${newAddress}"}`)

        setShow(false)
      }
      else{console.log('err')}
   
   console.log(res)  
  }
    
  return (
    <div className='fixed top-0 left-0 h-screen  w-full bg-slate-700 bg-opacity-40 flex items-center justify-center '>

        <div className='bg-slate-200 dark:bg-slate-800 max-w-[400px] h-auto p-5 opacity-100  rounded-lg shadow-lg bg-opacity-30 backdrop-filter backdrop-blur-lg dark:bg-opacity-30'>
            <div className='relative top-0 left-0 cursor-pointer text-xl ' onClick={()=>setShow(false)}><AiOutlineClose/></div>
            <form className=' flex flex-col items-center gap-5 dark:text-black dark:bg-opacity-20  p-3'>
            <input type="text" className='p-2 px-5 rounded-3xl outline-none md:p-3 md:px-10   placeholder:absolute placeholder:left-5 md:placeholder:text-lg   '  placeholder='New Name'  onChange={(e)=>setNewName(e.target.value)}/>

            
           
            <textarea type="text" className='p-2 px-5 rounded-3xl outline-none md:p-3 md:px-10   placeholder:absolute placeholder:left-5 md:placeholder:text-lg   ' placeholder='New Address'   onChange={(e)=>setNewAdress(e.target.value)}/>


            <button type='button' className='p-2 bg-black dark:bg-slate-100 text-white dark:text-black rounded-3xl px-5 hover:opacity-80' onClick={(updateProfie)}>Submit changes</button>
            

            </form>

        </div>
      
    </div>
  )
}

export default ProfilePopup
