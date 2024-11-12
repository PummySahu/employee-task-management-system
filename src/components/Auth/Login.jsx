import React, { useState } from 'react'


const Login = ({getdata}) => {
    
const [email, setEmail] = useState("")
const [password, setpassword] = useState("")

const submithandler = (e)=>{
    e.preventDefault()
    // console.log("hyyy")
    getdata(email,password)
    setEmail("")
    setpassword("")
}

  return (
    <div className='h-screen overflow-x-hidden flex items-center justify-center sm:h-screen sm:w-screen '>
        <div className='border-2 border-emerald-500 p-20 w-80 sm:w-auto'>
            <form onSubmit={(e)=>{
                submithandler(e)
            }} className='flex flex-col items-center justify-center'>
                <input required 
                value={email} 
                onChange={(e)=>{setEmail(e.target.value)}}
                className='text-white outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 text-xl  rounded-full placeholder:text-gray-300' type="email" placeholder='Enter your email' />
                <input required value={password}
                onChange={(e)=>{setpassword(e.target.value)}}  className='text-white outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 text-xl  rounded-full placeholder:text-gray-300 mt-3' type="password" placeholder='enter password' />
                <button className='text-white outline-none bg-emerald-400 border-2 border-emerald-600 py-2 px-9 text-xl  rounded-full mt-5'>log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login