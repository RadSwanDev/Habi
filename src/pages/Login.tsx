import axios from "axios"
import { useState } from "react"

export default function LoginPage() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const loginAccount = async()=>{
        try{
        const response = await axios.post("http://localhost:3000/login",{username,password},{withCredentials : true})
        setPassword("")
        setUsername("")

        if(response.status){
            window.location.href="/dashboard"
        }
        }catch(error){
            console.error(error)
        }
    }

    const googleAuthorization = ()=>{
        return window.location.href = "http://localhost:3000/auth/google"
    }
    return (
    <div className='h-screen flex align-middle items-center'>
    <div className="flex flex-col w-4xl items-center my-10 p-5 mx-auto rounded shadow-xl border-2 border-lime-500 bg-gray-50 ">
    <h1 className='text-3xl font-bold text-lime-900 my-4'>Login</h1>
    <input onChange={e=>setUsername(e.target.value)} value={username} type='text' className='border-2 my-1 border-lime-500 p-3 rounded-md bg-lime-700 text-white w-80' placeholder='username'/>
    <input onChange={e=>setPassword(e.target.value)} value={password} type='password' placeholder='********' className='border-2 bg-lime-700 text-white w-80 border-lime-500 p-3 rounded-md my-1'/>
    <button onClick={loginAccount} className='bg-lime-500 p-2 text-white border-2 w-32 my-1 border-lime-500 rounded-md shadow-sm hover:border-lime-600 hover:shadow-md hover:text-lime-700 hover:cursor-pointer'>Login</button>
    <a href='/register' className='my-4 text-lime-500 underline'>Don`t have an account? here</a>
    <p className='font-sem=ibold text-xl text-lime-900'>SignIn With</p>
    <button className="flex items-center bg-slate-300 p-2 rounded-md font-semibold align-middle" onClick={googleAuthorization}><img src="logo_google_g_icon.png" width={40}/>Google</button>
    </div>  
    </div>
  )
}
