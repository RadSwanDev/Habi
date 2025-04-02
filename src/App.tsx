import './App.css'

function App() {
  return (
    <>
    <div className="flex flex-col w-4xl items-center my-10 p-5 mx-auto rounded shadow-xl border-2 border-lime-500 bg-gray-50 ">
    <h1 className='text-3xl font-bold text-lime-900 my-4'>Login</h1>
    <input type='text' className='border-2 my-1 border-lime-500 p-3 rounded-md bg-lime-700 text-white w-80' placeholder='username'/>
    <input type='password' placeholder='********' className='border-2 bg-lime-700 text-white w-80 border-lime-500 p-3 rounded-md my-1'/>
    <button className='bg-lime-500 p-2 text-white border-2 w-32 my-1 border-lime-500 rounded-md shadow-sm hover:border-lime-600 hover:shadow-md hover:text-lime-700 hover:cursor-pointer'>Login</button>
    <a href='/register' className='my-4 text-lime-500 underline'>Don`t have an account? here</a>
    <p className='font-semibold text-xl text-lime-900'>SignIn With</p>
    <button className='flex items-center p-3 my-2 bg-slate-200 font-semibold text-slate-700 rounded-lg'><img src='7123025_logo_google_g_icon.png' width={40}/>Google</button>
    </div>  
    </>
  )
}

export default App
