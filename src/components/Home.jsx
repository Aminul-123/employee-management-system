import React from 'react'
import { Link } from 'react-router-dom';
import Card from './Card';

function Home() {
    const data = [
        {
          firstname : 'John',
          lastname: "Doe",
          id: 1,
          department : 'Staff',
          phone: "123-456-7890",
          email: "johndoe@example.com",
          gender: "Male"
        },
        {
          firstname: "Jane ",
          lastname : 'Smith',
          id: 2,
          department : 'Testing',
          phone: "987-654-3210",
          email: "janesmith@example.com",
          gender: "Female"
        }
      ];
      
  return (
    <div className="home">
      <div className='employee-heading'>
        <h2>ALL EMPLOYEES</h2>
        <Link to={'/add-employee'} className='add-employee-link' >Add Employee</Link>
      </div>
      <div className='all-cards'>

        {
          data.map((elem) => {
            return (
                <Card elem={elem} key={elem.id} />
             
            )
          })
        }
      </div>
    </div>
  )
}

export default Home
