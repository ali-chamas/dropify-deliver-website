import React, {  useEffect, useMemo, useState } from 'react'
import AdminOrder from '../components/AdminOrder'
import AdminNumbers from '../components/AdminNumbers'

const Dashboard = () => {
 
    
    const [orders,setorders]=useState([])
  const [searchOrder,setSearchOrder]=useState('')
 
const [show,setShow]=useState(false)
const [order,setOrder]=useState()

const [ changeStatus,setChangeStatus]=useState('')
const [changeCost,setChangeCost]=useState('')

        useEffect(()=>{
          
          const fetchOrders=async()=>{
            const res = await fetch('http://localhost:3001/orders');
            const data=await res.json()
            let sorted = [...data].sort((a,b)=>b.id-a.id)
            setorders(sorted)
            
          }
          

         
         
         
          fetchOrders()
          
         
        },[changeStatus,changeCost])


 

  return (
    <div className='h-full min-h-screen bg_light  dark:from-slate-700 dark:via-slate-800 dark:to-slate-600'>
      <div className='flex flex-col  items-center gap-5 pt-28 md:pt-24 pb-10 dark:text-white'>
      <h1 className='text_red text-3xl font-bold'>Dashboard</h1>
      <div className='flex flex-col md:flex-row  gap-5  items-center md:justify-between w-full md:px-8 lg:px-20 xl:px-32'>

     {/**Orders & earnings */}
     
     {orders && orders.length>0?
     <AdminNumbers  changeStatus={changeStatus} changeCost={changeCost} orders={orders}/>
     :'loading'
     }
       {/**Orders */}


       <div className='flex flex-col gap-3 my-5'>
              <h1 className='text_red text-3xl font-bold text-center'>Orders</h1>

              <input type="search" className='p-3 outline-none w-[350px] dark:text-black' placeholder='Search by Name' onChange={(e)=>setSearchOrder(e.target.value)} />
              <div className="grid grid-cols-1 gap-4 max-h-[400px] overflow-y-auto ">
              
                      {orders && orders.length>0?
                      
                      
                      orders.filter((val)=>{
                  
                        if(searchOrder=='') return val
                      else if(val.orderName.toLowerCase().includes(searchOrder.toLowerCase())){
                        return val
                      }
                      
                      
                      
                    })
                    .map(order=>(
                    
                    
                  
    
                      
    
                        
                        
                      
                      
    
                             
                        <div key={order.id} className='bg-slate-50 dark:bg-slate-600 p-4 rounded-lg shadow-lg min-w-[350px] max-w-[350px] overflow-x-auto overflow-y-hidden hover:opacity-90  h-auto cursor-pointer' onClick={(()=>{setShow(true);setOrder(order)})}>
                        
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
                                <b>from location: </b>{order.fromLocation} 
                            </p>
                            <p >
                              <b>to location :</b> {order.toLocation}
                            </p>
                            <p>
                             <b>price :</b>  {order.orderValue}$
                            </p>
                            <p >
                              <b>delivery cost : </b>{order.deliveryValue}$
                            </p>
                          <p >
                            <b>additional info: </b>{order.orderMessage}
                          </p>
                            </div>
                          </div>
                        
                        
                         
    
                     
                     
                      ))
                      :
                      'no orders yet :('
                      }
                      </div>
                  

            </div>
      </div>
        
            
{show && <AdminOrder setChangeCost={setChangeCost} setChangeStatus={setChangeStatus}  order={order} setShow={setShow}/>}
      </div>
    </div>
  )
}

export default Dashboard
