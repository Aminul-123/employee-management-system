import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Card from './Card';
import { useFirebaseContext } from '../context/FirebaseContext';

function Home() {
  const {data, err} = useFirebaseContext()
 
    if (err) {
      return (
        <>
          <p>{err}</p>
        </>
      )
    }
      
  return (
    <div className="home">
      <div className='employee-heading'>
        <h2>ALL EMPLOYEES</h2>
        <Link to={'/add-employee'} className='add-employee-link' >Add Employee</Link>
      </div>
      <div className='all-cards'>

        {
         data && data.map((elem) => {
            return (
                <Card elem={elem} key={elem?.id} />
             
            )
          })
        }
      </div>
    </div>
  )
}

export default Home
