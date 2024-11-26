import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFirebaseContext } from '../context/FirebaseContext';

function EmployeeDetails() {
  const {data} = useFirebaseContext();
  const [detail, setDetail ] = useState({});
  const {id} = useParams();


  useEffect(() => {

    data.forEach(element => {
      if (element.id === Number(id)) {
      //  console.log(element)
        setDetail(element)
      }
      
    });
  }, [id])
  return (
    <div className='detail-page'>

      <div className="btns">
        <span>Employee Details</span>
        <Link to={-1} className='go-back'>&larr; Go back</Link>

      </div>
        <p>Name : {detail?.fname} {detail?.lname} </p>
        <p>ID : {detail?.id} </p>
        <p>Email : {detail?.email} </p>
        <p>Phone : {detail?.phone}</p>
        <p>Department : {detail?.department} </p>
        <p>Gender : {detail?.gender}</p>
        <p>Address : {detail?.address}</p>
    </div>
  )
}

export default EmployeeDetails