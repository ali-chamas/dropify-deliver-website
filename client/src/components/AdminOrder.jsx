import React, { useState ,useEffect} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
const AdminOrder = ({order,setShow,setChangeCost,setChangeStatus}) => {



const [orderStatus,setStatus]=useState(order.orderStatus)
 const [deliveryValue,setDeliveryValue]=useState(order.deliveryValue)
 
 const [allow,setAllow]=useState(true)

 useEffect(()=>{

    const handleAllow=()=>{
      if(orderStatus!=='' ){
        setAllow(false)
      }
      else{setAllow(true)}
      
    }
    handleAllow()
      
  },[allow])



 const UpdateOrder=async(id)=>{
    const res = await fetch(`http://localhost:3001/orders/${id}`,{
      method:'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({orderStatus,deliveryValue})
    })
    setShow(false)
    setChangeCost(deliveryValue)
    setChangeStatus(orderStatus)
    
  }
  return (
    <div className='fixed top-0 left-0 h-screen  w-full bg-slate-700 bg-opacity-40 flex items-center justify-center '>

    <div className='bg-slate-200 dark:bg-slate-800 max-w-[400px] h-auto p-5 opacity-100  rounded-lg shadow-lg bg-opacity-30 backdrop-filter backdrop-blur-lg dark:bg-opacity-30 '>
        <div className='relative top-0 left-0 cursor-pointer text-xl ' onClick={()=>setShow(false)}><AiOutlineClose/></div>
        <form className=' flex flex-col items-center gap-5 dark:text-black dark:bg-opacity-20  p-3'>

<h1 className='text-red-500 font-bold'>#{order.id}</h1>
<p className='dark:text-white'>{order.orderName}</p>

                
                 <select

                  defaultValue={orderStatus}
                  onChange={(e)=>setStatus(e.target.value)}
                  
                  className={`text-black p-2  ${order.orderStatus==='in progress' ?'bg-yellow-200' : 'bg-green-200' }`}>
                    <option  className='bg-green-200'>
                    delivered
                    </option>
                    <option  className='bg-yellow-200' >
                    in progress
                    </option>
                    
                  </select >
                 

                  <div className='flex gap-2 dark:text-white'>
                    <label htmlFor="">delivery cost :</label>
                  <input type="number" min={0} className='dark:text-black w-10 text-center' placeholder='$$'
                  
                  onChange={(e)=>setDeliveryValue(e.target.value)}
                  defaultValue={deliveryValue} 
                  
                   />
                   </div>


        <button type='button' disabled={allow} className='p-2 bg-black dark:bg-slate-100 text-white dark:text-black rounded-3xl px-5 disabled:opacity-70 hover:opacity-80' onClick={()=>(UpdateOrder(order.id))}>Submit changes</button>
        

        </form>

    </div>
  
</div>
  )
}

export default AdminOrder
