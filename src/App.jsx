import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Applayout from './components/Applayout'
import Home from './components/Home'
import AddDetails from './components/AddDetails'
import EmployeeDetails from './components/EmployeeDetails'
import EditDetailsForm from './components/EditDetailsForm'

function App() {
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
  return (
    <RouterProvider router={browserRouter} />
  )
}

export default App