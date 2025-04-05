import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import TaskCard from "../component/TaskCard"
import PlusButton from "../component/PlusButton"
import Navigation from "../component/Navigation"
import DeletePopUP from "../component/DeletepopUp"
import AddPopUP from "../component/AddPopUp"
import EditPopUp from "../component/EditPopUP"
export default function Dashboard() {
const [openDelete,setOpenDelete] = useState<boolean>(false)
const [openAdd,setOpenAdd] = useState<boolean>(false)
const [selectedId,setSelectedId] = useState<number | null>(null)
const [openEdit,setOpenEdit] = useState<boolean>(false)

  const [data,setData] = useState<{
   id:number, title : string, description : string, status : string,updated_at:string, created_at : string
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

const cancelButton = ()=>{
  setOpenDelete(false)
  setSelectedId(null)
}

const formatDateTime = (time : string)=>{
    return new Date(time).toLocaleDateString("id",{
        hour : "2-digit",
        minute : "2-digit",
        second : "2-digit",
        month : "short",
        year : "numeric"
    })
}

const yesButton = async ()=>{
  const response = await axios.delete(`http://localhost:3000/dashboard/delete/${selectedId}`,{withCredentials : true})

  setData((prev)=> prev.filter((task)=>"id" in task && task.id !== selectedId))

  setOpenDelete(false)
  setSelectedId(null)
  return response
}

    return (
  <>
  <Navigation></Navigation>
  <div className="mt-20 flex flex-col p-4 mx-auto min-h-screen w-full max-w-3xl bg-gray-50 shadow-xl rounded-lg">
  {
    data.length === 0 ? <h1 className="my-auto text-center text-gray-300 text-2xl font-bold">  You don't have any tasks yet. Let's create one!
  </h1>
    :
    data.map((item, index) => (
      <div key={index} className="mb-4">
        <TaskCard
          title={item.title}
          description={item.description}
          status={item.status}
          updated={formatDateTime(item.updated_at)}
          created={formatDateTime(item.created_at)}
          deleteBtn={()=>{
            setOpenDelete(true)
            setSelectedId(item.id)
          }}
          editBtn ={ ()=>{
            setOpenEdit(true)
          }}
        />
      </div>
    ))
  
  }
 </div>
<PlusButton onClick={()=>setOpenAdd(true)}/>
  {
    openDelete &&  <DeletePopUP yesButton={yesButton} cancelButton={cancelButton}/>
  }
  {
      openAdd && <AddPopUP cancelButton={()=>setOpenAdd(false)}/>
  }
  {
    openEdit && <EditPopUp 
    titleProps={""}
    setTitle={()=>{}}
    descriptionProps={""}
    setDescription={()=>{}}
    statusProps={""}
    setStatus = {()=>{}}
    cancelButton={()=>setOpenEdit(false)}
    />
  }
  
  </>
)
}
