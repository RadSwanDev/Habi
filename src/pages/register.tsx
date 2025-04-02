/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios"
import { useState } from "react"

export default function RegisterPage(){
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')

    const registerAccount = async ()=>{
        const response = await axios.post("http://localhost:3000/register",{username,email,password})
        if(response){
            return window.location.href ="/login"
        }
        return
    }
    
    return (
    <div className='h-screen flex align-middle items-center'>
    <div className="flex flex-col w-4xl items-center my-10 p-5 mx-auto rounded shadow-xl border-2 border-lime-500 bg-gray-50 ">
    <h1 className='text-3xl font-bold text-lime-900 my-4'>Login</h1>
    <input onChange={e=>setUsername(e.target.value)} value={username} type='text' className='border-2 my-1 border-lime-500 p-3 rounded-md bg-lime-700 text-white w-80' placeholder='username'/>
    <input onChange={e=>setEmail(e.target.value)} value={email} type='email' placeholder="exampleemail@gmail.com" className='border-2 bg-lime-700 text-white w-80 border-lime-500 p-3 rounded-md my-1'/>
    <input onChange={e=>setPassword(e.target.value)} value={password} type='password' placeholder='********' className='border-2 bg-lime-700 text-white w-80 border-lime-500 p-3 rounded-md my-1'/>
    <button onClick={registerAccount} className='bg-lime-500 p-2 text-white border-2 w-32 my-1 border-lime-500 rounded-md shadow-sm hover:border-lime-600 hover:shadow-md hover:text-lime-700 hover:cursor-pointer'>Login</button>
    <a href='/login' className='my-4 text-lime-500 underline'>Already have an account? here</a>
    </div>  
    </div>
  )
}
