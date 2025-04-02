import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/Login.tsx'
import Dashboard from './pages/dashboard.tsx'
import AddTask from './pages/add.tsx'
import RegisterPage from './pages/register.tsx'

const route = createBrowserRouter([
  {
    path : "/login",
    element : <LoginPage/>
  },{
    path : "/register",
    element : <RegisterPage/>
  },
  {
    path : "/dashboard",
    element : <Dashboard/>
  },{
    path : "/dashboard/add",
    element : <AddTask/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={route}/>  
   </StrictMode>,
)
