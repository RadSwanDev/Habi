import axios from "axios"
import { useEffect, useState } from "react"
export default function Dashboard() {
const [data,setData] = useState<{
    title : string, description : string, status : string
}[]>([])

useEffect(()=>{
    const fetchingData = async()=> {
        const response = await axios.get("http://localhost:3000/dashboard",{withCredentials:true})
        setData(response.data.data)
    }
    fetchingData()
},[])
    return (
  <>
  {data.map(item=>{
    return(
        <div>
        <p>{item.title }</p>
        <p>{item.description}</p>
        <p>{item.status}</p>
        <button>Hapus</button>
        </div>
    )
  })}
  </>
)
}
