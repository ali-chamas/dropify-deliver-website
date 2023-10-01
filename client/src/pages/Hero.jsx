import React from 'react'
import CardsMobile from '../components/Cardsobile'
import heroImg from '../assets/hero.png'
import {motion as m} from 'framer-motion'
import { AiOutlineDown } from 'react-icons/ai'
import Cards from '../components/Cards'


const Hero = () => {
  return (
   
    <m.div
    animate={{opacity:1}}
    initial={{opacity:0}}
    transition={{duration:0.8,ease:'easeIn'}}
    exit={{opacity:0}}
    className='bg_light dark:from-slate-700 dark:via-slate-800 dark:to-slate-600'>
      
    
    <div className=' h-screen  flex flex-col items-center gap-5 '>
        <div className='pt-20 md:pt-10 px-5'>
            <div className='flex flex-col mt-12 md:flex-row items-center dark:text-white gap-10 md:justify-between md:px-5 xl:px-20 '>
                <h1 className='font-extrabold text-4xl  lg:text-5xl xl:text-6xl text-center max-w-[700px]  '>Welcome to Dropify<span className='text-red-500'>.</span><br/><span className='text_red'>The Best</span> Delivery Company</h1>

                   
                   <m.img 
                   whileInView={{opacity:100}}
                   initial={{opacity:0}}
                   transition={{duration:1,ease:'easeIn'}}
                   src={heroImg} className=' rounded-full h-[250px] w-[380px] lg:h-[300px] md:w-[450px]' />

                   <a href='#cards' className=' bg-slate-400 p-2 text-xl rounded-full  bg-opacity-30 shadow-lg md:hidden absolute bottom-0 mb-5'>
                    <AiOutlineDown/>
                </a>
            </div>
            <div className='hidden md:block absolute top-[380px] '>
              <Cards/>
            </div>
        </div>
        
        </div >
       <div className='md:hidden'> 
        <CardsMobile/>
        </div>
        
          
        
    </m.div>
      
      
    
  )
}

export default Hero
