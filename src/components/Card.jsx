import { Link } from "react-router-dom"

function Card ({elem}) {
    return (
      <>
       <div  className='card-cont' >
                 

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
                    </div>
      </>
    )
  }
  export default Card