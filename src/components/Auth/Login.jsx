import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }
    
    return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form 
        onSubmit ={(e)=>{
            submitHandler(e)
        }}className='flex flex-col items-center justify-center'>
            <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
             required
              className='text-black outline-none bg-transparent border-2 border-emerald-600 px-3 py-6 text-xl rounded-full placeholder:text-gray-400' type="email" placeholder='Enter Email' />
            <input
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
             required
              className='text-black outline-none bg-transparent border-2 border-emerald-600 px-3 py-6 text-xl rounded-full mt-4 placeholder:text-gray-400' type="password" placeholder='Enter password' />
            <button className='mt-5text-white outline-none bg-emerald-600 px-9 py-8 mt-3 text-xl rounded-full placeholder:text-white'> Log in </button>
        </form>
        </div>
    </div>
  )
}

export default Login
