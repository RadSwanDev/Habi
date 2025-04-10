import { useState } from 'react'
import './App.css'

export default function Alert({status,childStatus,borderColor,closeBtn,closeBtnHover,background,textColor} : {closeBtn : string,closeBtnHover: string,borderColor : string,background : string,textColor : string,status : string,childStatus:string}) {
  const [showAlert, setShowAlert] = useState<boolean>(true)
  return (
    <>
    {
      showAlert &&      
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md">
      <div className={`rounded-xl shadow-lg ${background} border-l-4 ${borderColor} p-4 animate-slideDown`}>
        <div className="flex justify-between items-start">
          <div>
            <h1 className={`font-semibold ${textColor}`}>{status}</h1>
            <p className="text-sm text-gray-700">{childStatus}</p>
          </div>
          <button
            className={`${closeBtn} hover:${closeBtnHover} text-lg font-bold ml-4`}
            onClick={() => setShowAlert(false)}
          >
            &times;
          </button>
        </div>
      </div>
    </div>

    }
  </>
  )
}
