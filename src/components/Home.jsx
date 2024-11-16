import React from 'react'
import { Link } from 'react-router-dom';

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
              <div className='card-cont' key={elem.id}>
                <Card elem={elem} />
                 
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home

function Card ({elem}) {
  return (
    <>
                   <img src="https://cdn-icons-png.freepik.com/512/1870/1870038.png" alt="img" className='emp-img' />
                  <p>Name : {`${elem.firstname} ${elem.lastname}`} </p>
                  <p>ID: {elem.id} </p>
                  <p>Department : {elem.department} </p>
                  <p>Phone No : {elem.phone} </p>
                  <p>Email: {elem.email} </p>
                  <p>Gender : {elem.gender} </p>
                  <div className='btns'>
                    <Link to={`/edit-details/${elem.id}`} className="btn edit-btn">Edit</Link>
                    <button className="btn del-btn">Delete</button>
                  </div>
    </>
  )
}