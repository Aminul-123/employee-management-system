import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom';
import Card from './Card';
import { useFirebaseContext } from '../context/FirebaseContext';
import {MoonLoader} from 'react-spinners'
function Home() {
  const {data} = useFirebaseContext()
  const [name, setName] = useState('')
// console.log(err)
   const cssLoader = {
    marginLeft : '9rem'
   }
   
  
      
  return (
    <div className="home">
      <div className='employee-heading'>
        <h2>🎑ALL EMPLOYEES CARDS🎑</h2>
        <Link to={'/add-employee'} className='add-employee-link' >Add Employee</Link>
        <form>
        <input type="text" className='search' placeholder='search Employee '
       onChange={(e) => setName(e.target.value)}
       />
        </form>
      </div>
      <div className='all-cards'>

        {
          data.length === 0 ? (
            <>
            <MoonLoader color='brown' cssOverride={cssLoader} />
            </>
          ) : (
            <>
            
        {
         data && data.filter((elem) => {
          return name.toLowerCase() === '' ?  elem : elem.fname.toLowerCase().includes(name)
         }  ).map((elem) => {
            return (
                <Card elem={elem} key={elem?.id} />
             
            )
          })
        }
            </>
          )
        }

      </div>
    </div>
  )
}

export default Home
