import React, { useEffect, useState } from 'react'
import {useAuthContext} from '../context/AuthContext'
import {motion as m} from 'framer-motion'

const Register = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [address,setAdress]=useState('')

    const [userData,setUserData]=useState()
    const [userError,setUserError]=useState(false)


    

    const [loading,setLoading]=useState(false)
    const [formError,setFormError]=useState(true)

    useEffect(()=>{

        const fetchUsers=async ()=>{
            const res = await fetch('http://localhost:3001/users');
            const data = await res.json()
            setUserData(data)
        }
        
        fetchUsers()
        
    },[])

   

    useEffect(()=>{

            const handleError=()=>{
                if(email=='' || password==''||name=='' || address==''){
                setFormError(true)
            setUserError(false)
                }
            else{
                setFormError(false)
            }

            }
            handleError()
    },[name,address,email,password])

   

    const  handleLogin= async ()=>{

            
       setLoading(true)
        
        const res =  await fetch('http://localhost:3001/users',{
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name,email,password,address})    
        })

        if(!res.ok){
            setUserError(true)
        }
        else{
            const data =await res.json()
            
            window.localStorage.setItem('user',`{"name":"${name}","email":"${email}","password":"${password}","address":"${address}"}`)
            setTimeout(function(){window.location.href='http://localhost:3000/'},3000)
            
        
        
    }
    setLoading(false)

}

  return (
    <div>
      <m.div
      whileInView={{opacity:1}}
      initial={{opacity:0}}
      transition={{duration:1}}
      className='bg-slate-200 dark:bg-slate-700 max-w-[400px] h-auto p-5 opacity-100  rounded-lg shadow-lg bg-opacity-30 backdrop-filter backdrop-blur-lg dark:bg-opacity-30 flex flex-col items-center gap-5 '>

            <h1 className='text-2xl dark:text-white'>Register</h1>


            <form className=' flex flex-col items-center gap-5 dark:text-black dark:bg-opacity-20  p-3'>
           
            <input type="text" className='p-2 px-5 rounded-3xl outline-none md:p-3 md:px-10   placeholder:absolute placeholder:left-5 md:placeholder:text-lg   ' placeholder='Name'  onChange={(e)=>setName(e.target.value)}/>

            <input type="email" className='p-2 px-5 rounded-3xl outline-none md:p-3 md:px-10   placeholder:absolute placeholder:left-5 md:placeholder:text-lg   ' placeholder=' Email'  onChange={(e)=>setEmail(e.target.value)}/>
           
            <input type="password" className='p-2 px-5 rounded-3xl outline-none md:p-3 md:px-10   placeholder:absolute placeholder:left-5 md:placeholder:text-lg   ' placeholder='Password'  onChange={(e)=>setPassword(e.target.value)}/>


            <input type="text" className='p-2 px-5 rounded-3xl outline-none md:p-3 md:px-10   placeholder:absolute placeholder:left-5 md:placeholder:text-lg   ' placeholder='Your Address'  onChange={(e)=>setAdress(e.target.value)}/>


            <button disabled={formError || loading} type='button' className='p-2 bg-black dark:bg-slate-100 text-white dark:text-black rounded-3xl px-5 hover:opacity-80 disabled:opacity-80' onClick={handleLogin}>Register</button>
            
            {
                formError && <p className='text-blue-800 dark:text-blue-200 '>Please fill every field</p>
            }
             {
                userError && <p className='text-red-800 dark:text-red-500 font-bold'>the email you entered is already registered</p>
            }

            </form>

        </m.div>
    </div>
  )
}

export default Register
