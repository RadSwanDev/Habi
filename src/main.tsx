import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/Login.tsx'
import Dashboard from './pages/dashboard.tsx'

const route = createBrowserRouter([
  {
    path : "/login",
    element : <LoginPage/>
  },{
    path : "/dashboard",
    element : <Dashboard/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={route}/>  
   </StrictMode>,
)
