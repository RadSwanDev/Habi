import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import TaskCard from "../component/TaskCard"
import PlusButton from "../component/PlusButton"
import Navigation from "../component/Navigation"
export default function Dashboard() {
const [data,setData] = useState<{
    title : string, description : string, status : string,updated_at:string, created_at : string
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
  <Navigation></Navigation>
  <div className="mt-20 flex flex-col p-4 mx-auto min-h-screen w-full max-w-3xl bg-gray-50 shadow-xl rounded-lg">
  {data.map((item, index) => (
    <div key={index} className="mb-4">
      <TaskCard
        title={item.title}
        description={item.description}
        status={item.status}
        updated={formatDateTime(item.updated_at)}
        created={formatDateTime(item.created_at)}
      />
    </div>
  ))}
</div>
<PlusButton onClick={()=>window.location.href = "/dashboard/add"}/>
  </>
)
}
