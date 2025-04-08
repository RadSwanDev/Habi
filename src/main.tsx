import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/Login.tsx'
import Dashboard from './pages/dashboard.tsx'
import RegisterPage from './pages/register.tsx'
import App from './App.tsx'
import { SelectedIdProvide } from './context/selectedId/index.tsx'

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
    path:"/",
    element : <App/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SelectedIdProvide>
    <RouterProvider router={route}/>  
    </SelectedIdProvide>
   </StrictMode>,
)
