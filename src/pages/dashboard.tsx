import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
export default function Dashboard() {
const [data,setData] = useState<{
    title : string, description : string, status : string,updated_at:string
}[]>([])
const navigate = useNavigate()

useEffect(()=>{
    const fetchingData = async()=> {
        try{
            const response = await axios.get("http://localhost:3000/dashboard",{withCredentials:true})
            setData(response.data.data)    
        }catch(error){
        console.error("Unauthorized! Redirecting...",error)
        navigate("/login")
        }
    }
    fetchingData()
}
,[navigate])

const formatDateTime = (time : string)=>{
    return new Date(time).toLocaleDateString("id",{
        hour : "2-digit",
        minute : "2-digit",
        second : "2-digit",
        month : "short",
        year : "numeric"
    })
}

    return (
  <>
  <button>logout</button>
  {data.map(item=>{
    return(
        <div className="mx-auto my-10 shadow-2xl p-3  rounded w-5xl">
            <div className="flex items-center justify-between">
            <p className="font-bold text-xl font-sans my-1">{item.title }</p>
            <p className="text-green-600">{formatDateTime(item.updated_at)}</p>
            </div>
        <hr className="my-1 bg-gray-200 text-gray-400" />
        <p className="mx-auto my-1 mb-10 text-gray-400 font-sans text-lg">{item.description}</p>
        <div className="flex justify-between align-middle items-center">
            <div> 
            <button className="bg-red-400 p-2 rounded text-red-800 border border-red-200 hover:border-red-800 hover:cursor-pointer mx-1 hover:text-white ">Delete</button>
            <button className="bg-yellow-400 p-2 rounded text-yellow-800 border border-yellow-200 hover:border-yellow-800 hover:cursor-pointer mx-1 hover:text-white ">Edit</button>
            <button className="bg-green-400 p-2 rounded text-green-800 border border-green-200 hover:border-green-800 hover:cursor-pointer mx-1 hover:text-green">Status</button>
            </div>
            <p className={item.status !== "pending" ? "text-green-500" : "text-orange-600"}>{item.status}</p>
        </div>
        </div>
    )
  })}
  <button className="mx-2 fixed z-30 bottom-20 right-20 text-3xl my-2 bg-lime-300 p-2 text-lime-700 rounded shadow-2xs border-2 border-lime-300 hover:border-lime-700 hover:text-lime-800 gover:shadow-2xl hover:cursor-pointer" onClick={()=>window.location.href = "/dashboard/add"}>Add Task</button>
  </>
)
}
