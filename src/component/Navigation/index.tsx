import axios from "axios"
import { useEffect, useState } from "react"

export default function Navigation() {
   const [open, setOpen] = useState<boolean>(false)
   const [userData, setUserData] = useState<{
      id: number,
      email: string,
      foto_profile: string | null,
      tanggal_lahir: string | null,
      telepon: number | null,
      username: string
   }>()
   const [defaultProfile,setDefaultProfile] = useState<string>("https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png")

   const logoutAccount = async () => {
      try {
         const response = await axios.post("http://localhost:3000/logout", {}, { withCredentials: true })
         if (response) {
            window.location.href = "/login"
         }
      } catch (error) {
         console.error("Logout failed: ", error)
      }
   }

   const fetchinData = async () => {
      try {
         const response = await axios.get("http://localhost:3000/dashboard/profile", { withCredentials: true })
         setUserData(response.data.data[0]) 
         
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
      
         console.error("Error fetching user data: ", error?.response || error.message || error)
      
      }
   }

   useEffect(() => {
      fetchinData()
   }, [])

   return (
      <>
         <div className="p-4 bg-lime-500 top-0 fixed w-screen z-10 flex rounded-b-lg justify-between">
            <button onClick={() => setOpen(true)}>
               <img src="/menu.svg" alt="Menu" />
            </button>
            <div className="flex gap-2 p-1 rounded-full text-white hover:cursor-pointer border-2 mr-5">
               <button onClick={() => window.location.href = "/profile"} className="flex items-center text-white justify-center mx-5 gap-3">
                  <p>{userData?.username}</p>
                  <img src={`${ userData?.foto_profile !== null ? userData?.foto_profile : defaultProfile}`} alt="Profile" className="rounded-full" width={35} height={35}/>
               </button>
            </div>
         </div>

         <div className={`fixed z-30 top-0 left-0 w-screen h-screen transition-all duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
            <div className="absolute w-full h-full bg-black/30 backdrop-blur-sm" onClick={() => setOpen(false)}></div>
            <div className={`absolute top-0 left-0 bg-white shadow-xl w-96 p-0 rounded-r-2xl transform transition-all duration-300 ${open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
               <div className="border-b-2 border-gray-300 text-red-400 text-shadow-2xs shadow-xl">
                  <button onClick={() => setOpen(false)} className="p-2 text-xl font-bold">
                     ✕ Close
                  </button>
               </div>
               <ul className="mx-4 p-2 my-1">
                  {[
                     { key: "Home", icon: "/home.svg", action: () => window.location.href = "/dashboard" },
                     { key: "Profile", icon: "/user (1).svg", action: () => window.location.href = "/profile" },
                     { key: "Logout", icon: "/log-out (2).svg", action: logoutAccount }
                  ].map((item, index) => (
                     <li key={index} className="hover:bg-slate-400 p-2 border-b-2 border-gray-400 text-gray-700 hover:text-black hover:cursor-pointer">
                        <button className="flex items-center text-xl p-2 w-full justify-start gap-1" onClick={item.action}>
                           <img src={item.icon} alt={item.key} />
                           {item.key}
                        </button>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </>
   )
}
