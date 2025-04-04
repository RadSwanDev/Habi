import axios from "axios"

export default function Navigation() {
    const logoutAccount = async()=>{
        const response = await axios.post("http://localhost:3000/logout",{},{withCredentials:true})
        if(response){
            window.location.href = "/login"
        }
        return response
    }
    return (
    <>
    <div className="p-4 bg-lime-500 top-0 fixed w-screen z-30">
        <button onClick={logoutAccount} className="hover:cursor-pointer"><img src="public/log-out (1).svg"/></button>
    </div>
    </>
  )
}
