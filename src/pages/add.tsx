import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddTask() {
  const [title,setTitle] = useState<string>("")
  const [description,setDescription] = useState<string>("")
  const [status,setStatus] = useState<string>("")
  const navigate = useNavigate()

  useEffect(()=>{
      const fetchingData = async()=> {
          try{
              const response = await axios.get("http://localhost:3000/dashboard",{withCredentials:true})
              return response
            }catch(error){
          console.error("Unauthorized! Redirecting...",error)
          navigate("/login")
          }
      }
      fetchingData()
  }
  ,[navigate])
  
  const addTask = async()=>{
    const response = await axios.post("http://localhost:3000/dashboard/add",{title,description,status},{withCredentials : true})
    if(!response){
       return alert("Failed to make a request")
    }
    window.location.href = "/dashboard"
    }
    return (
    <div className='flex h-screen align-middle items-center'>
    <div className='bg-gray-100 w-2xl flex flex-col justify-center items-center my-2 mx-auto shadow-2xl rounded p-20'>
    <h1 className='my-3 font-bold text-2xl text-lime-800 underline'>Add Task</h1>
    <div className='flex flex-col'>
     <label>Title</label>
     <input value={title} onChange={e =>setTitle(e.target.value)} type='text' placeholder="Title" className='border-b-2 border-t-2  w-80 border-lime-500 p-3 rounded-md my-1'/>
     </div><div className='flex flex-col'>
     <label>Description</label>
     <input value={description} onChange={e => setDescription(e.target.value)} type='text' placeholder="Description" className='border-b-2 border-t-2 w-80 border-lime-500 p-3 rounded-md my-1'/>
     </div><div className='flex flex-col'>
     <label>Status</label>
     <input value={status} onChange={e => setStatus(e.target.value)} type='text' placeholder="pending" className='border-b-2 border-t-2 w-80 border-lime-500 p-3 rounded-md my-1'/>
     </div>
   <div className='flex'>
    <button className='bg-lime-300 p-3 mx-2 border mt-5 border-lime-300 hover:text-green-950 hover:cursor-pointer rounded text-green-900 ' onClick={addTask}>Add</button>
    <button className='bg-red-300 p-3 mx-2 border mt-5 border-red-300 hover:text-red-950 hover:cursor-pointer rounded text-red-900 ' onClick={()=> window.location.href = "/dashboard"}>Cancel</button>
    </div>
    </div>
    </div>
  )
}
