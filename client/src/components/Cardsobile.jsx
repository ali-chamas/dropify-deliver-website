import React from 'react'
import Cards from './Cards'
const CardsMobile = () => {
  return (
    <div className='h-[120vh]' id='cards' >
               
               <div className='absolute -bottom-[400px] right-0 h-60 w-80 bg-gradient-to-tr from-slate-400 via-red-600 to-slate-900 dark:from-slate-400 -z-20 blur-3xl'/>
               
             <div className='absolute -bottom-[600px] left-[0px] h-60 w-80 bg-gradient-to-tr from-slate-600 via-red-600 to-slate-700 -z-20 blur-2xl'/>
   <Cards/>
            
    </div>
  )
}

export default CardsMobile
