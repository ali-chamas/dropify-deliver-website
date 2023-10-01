import React, { useEffect, useState } from 'react'

import light from '../assets/light.jpg'
import dark from '../assets/dark.jpg'
import {motion as m} from 'framer-motion'
const Order = () => {

    const users = JSON.parse(window.localStorage.getItem('user'))
    const user =users.email
    

    let date=new Date()
    let month = date.getUTCMonth() + 1; //months from 1-12
  let day = date.getUTCDate();
  let year = date.getUTCFullYear();
  let orderDate = year + "/" + month + "/" + day;


    const [orderName,setOrderName]=useState('')
    const [orderWeight,setOrderWeight]=useState(0)
    const [fromLocation,setFromLoc]=useState(users.address)
    const [toLocation,setToLoc]=useState('')
    const [orderValue,setOrderValue]=useState(0)
    const [orderMessage,setMessage]=useState('')
    const [loading,setLoading]=useState(false)
    const [formError,setFormError]=useState(true)

    useEffect(()=>{

        const handleError=()=>{
            if(orderName=='' || orderWeight==''||fromLocation==''||toLocation==''||orderValue==''){
            setFormError(true)
        
            }
        else{
            setFormError(false)
        }

        }
        handleError()
},[orderName,orderValue,orderWeight,toLocation,fromLocation])


    const handleSubmit=async()=>{

        setLoading(true)
        const res =  await fetch('http://localhost:3001/orders',{
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderName,fromLocation,toLocation,orderValue,orderDate,user,orderWeight,orderMessage})    
            })
            const data=res.json()
                    console.log(data)
            
            setLoading(false)
            setTimeout(function(){window.location.href='http://localhost:3000/profile'},2000)

    }
    

  return (
    <m.div 
    animate={{opacity:1}}
    initial={{opacity:0}}
    transition={{duration:0.8,ease:'easeIn'}}
    exit={{opacity:0}}
    className='bg_light dark:from-slate-700 dark:via-slate-800 dark:to-slate-600 dark:text-white'>
        <div className='h-full min-h-screen flex flex-col items-center pt-20'>
            <h1 className='text-3xl font-extrabold'>Order a <span className='text_red'>delivery.</span> </h1>

<div className='flex flex-col lg:flex-row lg:gap-10 items-center md:mt-10 md:justify-between w-full md:px-20 lg:px-20'>
                <div className='my-5 relative  max-w-[280px] md:max-w-[600px] md:min-w-[200px]  hidden dark:block'>
                    <m.img
                    whileInView={{opacity:100}}
                    initial={{opacity:0}}
                    transition={{duration:1,ease:'easeIn'}}
                    src={light} className='rounded-full hidden dark:block' alt="" />
                </div>
                <div className='my-5 relative  max-w-[260px] md:max-w-[580px] lg:min-w-[300px] dark:hidden'>
                    <m.img
                    whileInView={{opacity:100}}
                    initial={{opacity:0}}
                    transition={{duration:1,ease:'easeIn'}}
                    src={dark} className='rounded-full dark:hidden' alt="" />
                </div>

            <form className=' flex flex-col items-center gap-5 dark:text-black bg-slate-300 dark:bg-slate-700 shadow-lg bg-opacity-30 dark:bg-opacity-20  p-3 mb-10'>
                <div className='flex flex-col md:flex-row  gap-2 items-center '>
                <div className='flex flex-col items-center gap-3'>
            <input type="text" className='p-2 px-5 rounded-3xl outline-none md:p-3 md:px-10   placeholder:absolute placeholder:left-5 md:placeholder:text-lg   ' placeholder='Order Name'  onChange={(e)=>setOrderName(e.target.value)}/>
            <input type="number" className='p-2 px-5 rounded-3xl outline-none md:p-3 md:px-10   placeholder:absolute placeholder:left-5 md:placeholder:text-lg   ' placeholder='Order weight (kg)'  onChange={(e)=>setOrderWeight(e.target.value)}/>
            <textarea type="text" className='p-2 px-5 rounded-3xl outline-none md:p-3 md:px-10   placeholder:absolute placeholder:left-5 md:placeholder:text-lg   ' placeholder='from location' defaultValue={fromLocation} onChange={(e)=>setFromLoc(e.target.value)}/>
            </div>
            <div className='flex flex-col items-center gap-3'>
            <textarea type="text" className='p-2 px-5 rounded-3xl outline-none md:p-3 md:px-10   placeholder:absolute placeholder:left-5 md:placeholder:text-lg   ' placeholder='to location'  onChange={(e)=>setToLoc(e.target.value)}/>
            <input type="number" className='p-2 px-5 rounded-3xl outline-none md:p-3 md:px-10   placeholder:absolute placeholder:left-5 md:placeholder:text-lg   ' placeholder='value $'  onChange={(e)=>setOrderValue(e.target.value)}/>
            <textarea className='p-2 px-5 rounded-3xl outline-none md:p-3 md:px-10   placeholder:absolute placeholder:left-5 md:placeholder:text-lg   ' placeholder='additional information (height,width,remark...)'  onChange={(e)=>setMessage(e.target.value)}/>
            </div>
            </div>
            <button type='button' className='p-2 bg-black dark:bg-slate-100 text-white dark:text-black rounded-3xl px-5 hover:opacity-80 disabled:opacity-70' onClick={handleSubmit} disabled={loading ||formError}>Submit Order</button>
            
            {formError && <p className='dark:text-blue-200 text-blue-800 '>please fill all fields</p>}
            </form>
            
        </div>
        </div>
      
    </m.div>
  )
}

export default Order
