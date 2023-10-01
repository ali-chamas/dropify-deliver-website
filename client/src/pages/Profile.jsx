import React, { useEffect, useState } from 'react'
import ProfilePopup from '../components/ProfilePopup'
import img from '../assets/deliveryGuy.png'
import {motion as m} from 'framer-motion'

const Profile = () => {

    
    const [show,setShow]=useState(false)
  const [searchOrder,setSearchOrder]=useState('')
    const user = JSON.parse(window.localStorage.getItem('user'))
    

    const [orders,setOrders]=useState(null)

    

    useEffect(()=>{

      const fetchOrder=async()=>{
        const res = await fetch(`http://localhost:3001/orders/${user.email}`)
        const data = await res.json()
        let sorted = [...data].sort((a,b)=>b.id-a.id)
        setOrders(sorted)

      }
      fetchOrder()

    },[orders])
    
   

  return (
    <m.div
    animate={{opacity:1}}
    initial={{opacity:0}}
    transition={{duration:0.8,ease:'easeIn'}}
    exit={{opacity:0}}
    className='bg_light dark:from-slate-700 dark:via-slate-800 dark:to-slate-600 dark:text-white'>
      <div className='h-full min-h-screen dark:text-white'>

      <div className='flex flex-col md:flex-row pt-28 items-center md:px-10 lg:px-20 md:justify-between'>

        {/**Profile */}



          <div className='flex flex-col items-center gap-3'>
              <h1 className='text_red text-3xl font-bold'>Profile</h1>
              <div className='shadow-lg py-5 px-10 flex flex-col gap-4 '>
                  <p><span className='font-bold'>name:</span> {user.name}</p>
                  <p><span className='font-bold'>email:</span> {user.email}</p>
                  <p><span className='font-bold'>address:</span> {user.address}</p>
                  <button type='button' className='p-2 bg-black dark:bg-slate-100 text-white dark:text-black rounded-3xl px-5 hover:opacity-80' onClick={()=>(setShow(true))}>Change info</button>
              </div>
              <div>
                {show ?<ProfilePopup name={user.name} address={user.address} setShow={setShow}  email={user.email} /> : ''}
                
              </div>
          </div>

            <img src={img} className='hidden md:block max-w-[220px] lg:max-w-[400px] xl:max-w-[450px]' alt="" />

        {/**Orders */}


          <div>
            <div className='flex flex-col gap-3 my-5'>
              <h1 className='text_red text-3xl font-bold text-center'>Orders</h1>
              <input type="search" className='p-3 outline-none w-[350px] dark:text-black' placeholder='Search by Name' onChange={(e)=>setSearchOrder(e.target.value)} />
              <div className="grid grid-cols-1 gap-4 max-h-[400px] overflow-y-auto ">
                {orders && orders.length>0 ?
                
                
                orders.filter((val)=>{
                  
                    if(searchOrder=='') return val
                  else if(val.orderName.toLowerCase().includes(searchOrder.toLowerCase())){
                    return val
                  }
                  
                  
                  
                })
                .map((order)=>(
                
                
              

                  

                    
                    
                  
                  

                         
                    <div key={order.id} className='bg-slate-50 dark:bg-slate-600 p-4 rounded-lg shadow-lg min-w-[350px] max-w-[350px] overflow-x-auto overflow-y-hidden'>
                    
                        <div className='flex items-center space-x-2 text-sm'>

                       
                          <p className='text-red-500'>
                           # {order.id}
                            
                          </p>
                          <p className='font-bold'>
                          {order.orderName}
                          </p>
                          <p className='text-sm font-light'>
                            {order.orderDate}
                          </p>
                          <p className={`${order.orderStatus === 'in progress' ? "bg-yellow-200" : "bg-green-200"} text-black p-2`}>
                            {order.orderStatus}
                          </p>
                        
                        </div>
                        <div className='flex flex-col gap-2 break-words'>
                        <p>
                            from location: <b>{order.fromLocation}</b> 
                        </p>
                        <p>
                          to location : <b>{order.toLocation}</b>
                        </p>
                        <p>
                          price : <b>{order.orderValue}$</b>
                        </p>
                        <p>
                              delivery cost : <b>{order.deliveryValue}$</b>
                            </p>

                        </div>
                      </div>
                    
                    
                     

                 
                 
                  )):
                  <div className=' flex flex-col items-center gap-4'>
                      <p className='text-xl '> make your first order!</p>
                        <a href="/order" className='opacity-80 hover:opacity-100 bg-black p-3 px-6 rounded-full text-white dark:bg-gray-100 dark:text-black'>order a delivery</a>
                  </div>
                  }
                   </div>
                
                     
            </div>
          </div>
      </div>

      </div>
      
    </m.div>
  )
}

export default Profile
