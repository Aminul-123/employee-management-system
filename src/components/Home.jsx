import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Card from './Card';
import { collection, getDocs, query } from 'firebase/firestore';
import { useFirebaseContext } from '../context/FirebaseContext';

function Home() {
  const {firestore} = useFirebaseContext()
  const [data, setData] = useState([]);
    // const data = [
    //     {
    //       firstname : 'John',
    //       lastname: "Doe",
    //       id: 1,
    //       department : 'Staff',
    //       phone: "123-456-7890",
    //       email: "johndoe@example.com",
    //       gender: "Male"
    //     }
        // {
        //   firstname: "Jane ",
        //   lastname : 'Smith',
        //   id: 2,
        //   department : 'Testing',
        //   phone: "987-654-3210",
        //   email: "janesmith@example.com",
        //   gender: "Female"
        // }
      // ];

      useEffect(() => {
        async function getAllEmployee () {
          try {
            const collectionRef = collection(firestore, 'add-employee');
            const q = query(collectionRef)
            const snap = await getDocs(q);
            snap.forEach((elem) => console.log(elem.data()))
        //NEXT WILL BE WORKING ON STORING THE DATA IN A STATE SO THE WE CAN USE THEM TO DISPLAY CARDS
           // setData(snap);
            
          }
          catch(err) {
            alert(err.message)
          }
        }
        getAllEmployee()
      }, [])
      
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
                <Card elem={elem} key={elem.id} />
             
            )
          })
        }
      </div>
    </div>
  )
}

export default Home
