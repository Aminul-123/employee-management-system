import React, { useContext } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Applayout from './components/Applayout'
import Home from './components/Home'
import AddDetails from './components/AddDetails'
import EmployeeDetails from './components/EmployeeDetails'
import EditDetailsForm from './components/EditDetailsForm'
import Login from './auth/Login'
import { AuthContext } from './context/FirebaseAuthProvider'

function App() {
  const {user} = useContext(AuthContext)
  const browserRouter = createBrowserRouter([
    {
      element : <Applayout />,
      children : [
      
        {
          path : '/',
          element : <Home />
        },
        {
          path : '/add-employee',
          element : <AddDetails />
        },
        {
          path : '/employee-details/:id',
          element : <EmployeeDetails />
        },
        {
          path : '/edit-details/:id',
          element : <EditDetailsForm />
        }
      ] 
    }
  ])

  if (user === null) {
    return <Login />
  }
  return (
    
    <RouterProvider router={browserRouter} />
  )
}

export default App