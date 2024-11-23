import { Link } from "react-router-dom"

function Card ({elem}) {
  const {fname, lname, id, phone, email, department, gender} = elem

  const firstname = fname[0].toUpperCase() + fname.slice(1, fname.length);
  const lastname = lname[0].toUpperCase() + lname.slice(1, lname.length);
    return (
      <>
       <div  className='card-cont'  >
                 

                     <img src="https://cdn-icons-png.freepik.com/512/1870/1870038.png" alt="img" className='emp-img' />
                    <p>Name : {`${firstname} ${lastname}`} </p>
                    <p>ID: {id} </p>
                    <p>Department : {department} </p>
                    <p>Phone No : {phone} </p>
                    <p>Email: {email} </p>
                    <p>Gender : {gender} </p>
                    <div className='btns'>
                      <Link to={`/employee-details/${id}`} className="btn " >View details</Link>
                      <Link to={`/edit-details/${id}`} className="btn edit-btn">Edit</Link>
                      <button className="btn del-btn">Delete</button>

                    </div>
                    </div>
      </>
    )
  }
  export default Card