import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {motion as m} from 'framer-motion'
const Cards = () => {

        const cards = [
                {title:'About us',desc:'Dropify is a shipping company , we deliver your orders anywhere at anytime. ',link:'/about'},
                {title:'Order Now',desc:'Place an order for a delivery request , we will contact you to confirm your order. ',link:'/order'},
                {title:'Careers',desc:' working for dropify is amazing , click here to check available opportunities,contact us for more ',link:'/careers'}
        ]
  return (
    <div  className='flex flex-col items-center md:flex-row  gap-8 pt-20 md:pt-10 md:gap-[20px] lg:gap-[100px] md:ml-[100px] dark:text-white'>


                        {cards.map((card,i)=>(
                        <m.a
                         whileInView={{opacity:1}}
                         initial={{opacity:0}}
                         transition={{duration:1,delay:i*0.3}}
                         key={i}
                        className='flex flex-col max-w-[200px] items-center bg-slate-400 p-5 gap-2 rounded-3xl bg-opacity-30 hover:scale-105 transition-all duration-200 hover:opacity-90 '>
                        <h1 className=' text-2xl font-bold flex gap-1 items-center '>{card.title} </h1>
                        <p className=' '>{card.desc} </p>
                        </m.a>
                        ))}             
                   
                    
                    
                    
            </div>
  )
}

export default Cards
