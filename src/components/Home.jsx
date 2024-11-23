import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Card from './Card';
import { useFirebaseContext } from '../context/FirebaseContext';

function Home() {
  const {data, err} = useFirebaseContext()
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState('')
  

  //     useEffect(() => {
  //       async function getAllEmployee () {
  //         try {
  //           const collectionRef = collection(firestore, 'add-employee');
  //           const q = query(collectionRef)
  //           const snap = await getDocs(q);
  //           if (!snap) throw new Error('No Employee data found☹🙁')
  //            setData(snap.docs.map((elem) => ({...elem.data()})))
  //         }
  //         catch(err) {
  //           // alert(err.message)
  //           setErr(err.message)
  //         }
  //       }
  //       getAllEmployee()
  //     }, [data?.length])


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
