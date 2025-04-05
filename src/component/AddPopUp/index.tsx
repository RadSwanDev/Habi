import axios from "axios";
import { useState } from "react";

export default function AddPopUP({cancelButton} : {cancelButton : () => void}) {
      const [title,setTitle] = useState<string>("")
      const [description,setDescription] = useState<string>("")
      const [status,setStatus] = useState<string>("")
     
      const addTask = async()=>{
        const response = await axios.post("http://localhost:3000/dashboard/add",{title,description,status},{withCredentials : true})
        if(!response){
           return alert("Failed to make a request")
        }
        window.location.href = "/dashboard"
        }
    
    return (
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 bg-opacity-50 backdrop-blur-sm">
        <div className="bg-white p-4 rounded-xl shadow-2xl w-full max-w-md">
         <h1 className="text-center text-2xl font-bold">Add Task</h1>
        <div className='flex flex-col'>
     <label>Title</label>
     <input value={title} onChange={e =>setTitle(e.target.value)} type='text' placeholder="Title" className='border-b-2 border-t-2  w-80 border-lime-500 p-3 rounded-md my-1'/>
     </div><div className='flex flex-col'>
     <label>Description</label>
     <input value={description} onChange={e => setDescription(e.target.value)} type='text' placeholder="Description" className='border-b-2 border-t-2 w-80 border-lime-500 p-3 rounded-md my-1'/>
     </div>
        <select value={status} className='my-2 p-1 border-lime-500 border-2 rounded-full bg-lime-200 text-black' onChange={(e)=>setStatus(e.target.value)}>
        <option value={""}>Select Status</option>
        <option value={"pending"}>Pending</option>
        <option value={"in-progress"}>In Progress</option>
        <option value={"completed"}>Completed</option>
        </select>
        <div className="flex justify-end">
            <button className="bg-lime-300 text-green-600 rounded-2xl px-4 py-2 mx-1 w-24  hover:cursor-pointer" onClick={addTask}>
              Yes
            </button>
            <button className="bg-red-300 text-red-600 rounded-2xl px-4 py-2 mx-1 w-24 hover:cursor-pointer" onClick={cancelButton}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
  