import React, { useEffect, useState } from 'react'
import {useAuthContext} from '../context/AuthContext'
import {motion as m} from 'framer-motion'

const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [userData,setUserData]=useState()
    const [userError,setUserError]=useState(false)
    const {setUser,setLoggedIn}=useAuthContext()
    const [formError,setFormError]=useState(true)
    const [loading,setLoading]=useState(false)
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
                if(email=='' || password==''){
                setFormError(true)
            setUserError(false)
            setLoading(false)
                }
            else{
                setFormError(false)
            }

            }
            handleError()
    },[email,password])

    const handleLogin=()=>{
        setLoading(true)
        console.log(loading)
        userData.map(user=>{

            if(email === user.email && password===user.password ){
                setUser(user)
                setLoggedIn(true)
                window.localStorage.setItem('user',JSON.stringify(user))
                
            setTimeout(function(){ window.location.href="http://localhost:3000/" }, 1000);
            setLoading(false)
            }
            else{
                
                setTimeout(function(){ setUserError(true) }, 2000);
                setLoading(false)
            }
            
           
            
        })
        
        
    }

  return (
    <div>
      <m.div
      whileInView={{opacity:1}}
      initial={{opacity:0}}
      transition={{duration:1}}
      className='bg-slate-200 dark:bg-slate-700 max-w-[400px] h-auto p-5 opacity-100  rounded-lg shadow-lg bg-opacity-30 backdrop-filter backdrop-blur-lg dark:bg-opacity-30 flex flex-col items-center gap-5'>

            <h1 className='text-2xl dark:text-white'>Login</h1>


            <form className=' flex flex-col items-center gap-5 dark:text-black dark:bg-opacity-20  p-3'>
           

            <input type="text" className='p-2 px-5 rounded-3xl outline-none md:p-3 md:px-10   placeholder:absolute placeholder:left-5 md:placeholder:text-lg   ' placeholder=' Email'  onChange={(e)=>setEmail(e.target.value)}/>
           
            <input type="password" className='p-2 px-5 rounded-3xl outline-none md:p-3 md:px-10   placeholder:absolute placeholder:left-5 md:placeholder:text-lg   ' placeholder='Password'  onChange={(e)=>setPassword(e.target.value)}/>


            <button disabled={formError || loading} type='button' className='p-2 bg-black dark:bg-slate-100 text-white dark:text-black rounded-3xl px-5 hover:opacity-80 disabled:opacity-70' onClick={handleLogin}>{loading ? <div role="status">
    <svg aria-hidden="true" className="inline w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white ml-2" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>: 'Login'}</button>
            
            {
                formError && <p className='text-blue-800 dark:text-blue-200 '>Please fill every field</p>
            }
             {
                userError && <p className='text-red-800 dark:text-red-500 font-bold'>wrong username or password</p>
            }

            </form>

        </m.div>
    </div>
  )
}

export default Login
