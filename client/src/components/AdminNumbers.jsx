import React, { useEffect, useState } from 'react'

const AdminNumbers = ({orders,changeCost,changeStatus,setChangeCost}) => {
    const [earning,setEarning]=useState(0)
    const [totalOrders,setTotalOrders]=useState('')
    




       useEffect(()=>{
        let total=0;
        let count=orders.length;
        for(let i=0;i<orders.length;i++){
            if(orders[i].orderStatus==='delivered'){
            total+=orders[i].deliveryValue
            }
        }
        
        const updateDash=async()=>{
        const res = await fetch('http://localhost:3001/dashboard/1',{
            method:'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({orders:count,earnings:total })  
            
        })
        
        }
        const fetchDashboard=async()=>{
            const res = await fetch('http://localhost:3001/dashboard');
            const data=await res.json()
            setEarning(data[0].earnings)
            setTotalOrders(data[0].orders)
            
          }

         fetchDashboard()
          
        updateDash()
        

       },[changeCost,changeStatus])


     
       
          
   

  return (
    <div className='flex gap-10 items-center text-center'>
    <div className='flex flex-col gap-5 items-center'>
      
      <h1 className='text-2xl '>Total Orders:</h1>
      <p className='font-bold text-3xl'>{totalOrders}</p>
      </div>
      <div className='flex flex-col gap-5 items-center'>
      
      <h1 className=' text-2xl '>Total Earnings:</h1>
      <p className='font-bold  text-3xl'>${earning}</p>
      </div>

    </div>
  )
}

export default AdminNumbers
