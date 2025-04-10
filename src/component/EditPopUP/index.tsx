/* eslint-disable no-constant-binary-expression */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useEffect, useState } from "react"
import { UseSelectedId } from "../../context/selectedId"
import axios from "axios"
import { UseAlertContext } from "../../context/alert"

interface oldTaskType {
status : string | undefined
description : string | undefined
title : string |undefined
cancelButton : ()=>void
}

export default function EditPopUp({status,description,title,cancelButton} : oldTaskType) {
  const [titles,setTitles] = useState<string>('')
  const [descriptions,setDescriptions] = useState<string>('')
  const [statused, setStatused] = useState<string>('')  
  const {idSelected} = UseSelectedId()
  const [data,setData] = useState()
  const {setAlertContext} = UseAlertContext()   
  const inputCatch = useCallback((state : React.Dispatch<React.SetStateAction<string>>)=> (e : React.ChangeEvent<HTMLInputElement>)=>state(e.target.value),[])

  const fetchingData = async()=> {
      const response = await axios.get("http://localhost:3000/dashboard",{withCredentials:true})
      setData(response.data.data)    
  }

  useEffect(() => {
    setTitles(title || "")
    setDescriptions(description || "")
    setStatused(status || "")
  }, [title, description, status])
  

  const changeSaved = async(id : number | null)=>{
    try{
      if(!id === null){
        console.log("No Selected Id")
        return
      }
      const response = await axios.put(`http://localhost:3000/dashboard/edit/${id}`,{
        title : titles || title,
        description : descriptions || description,
        status : statused || status
      },{withCredentials:true})

      await fetchingData()
      setTitles("")
      setDescriptions("")
      setStatused("")
      setTimeout(()=>{
        window.location.href = "/dashboard"
      },2000)
      setAlertContext(response.data.message)
      return response
    }catch(error){
      console.error(error)
    }
  }

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 bg-opacity-50 backdrop-blur-sm">
    <div className="bg-white p-4 rounded-xl shadow-2xl w-3xl max-w-md">
    <h1 className="text-center text-2xl font-extrabold">Edit Task</h1>
    <div className='flex flex-col'>
   <label>Title</label>
   <input onChange={inputCatch(setTitles)} value={titles} type='text' placeholder="Title" className='border-b-2 border-t-2  w-80 border-lime-500 p-3 rounded-md my-1'/>
   </div><div className='flex flex-col'>
   <label>Description</label>
   <input onChange={inputCatch(setDescriptions)} value={descriptions} type='text' placeholder="Description" className='border-b-2 border-t-2 w-80 border-lime-500 p-3 rounded-md my-1'/>
   </div>
   <label htmlFor="" className="mx-1">Status : </label>
      <select value={statused} className='my-2 p-1 border-lime-500 border-2 rounded-full bg-lime-200 text-black'  onChange={(e)=>setStatused(e.target.value)}>
      <option value={""}>Select Status</option>
      <option value={"Pending"}>Pending</option>
      <option value={"In-progress"}>In Progress</option>
      <option value={"Completed"}>Completed</option>
      </select>
      <div className="flex justify-end">
          <button className="bg-lime-300 text-green-600 rounded-2xl px-4 py-2 mx-1 w-24  hover:cursor-pointer" onClick={()=>changeSaved(idSelected!)}>
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
  