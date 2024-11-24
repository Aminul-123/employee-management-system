import React, { memo, useState } from "react";
import { useFirebaseContext } from "../context/FirebaseContext";
import { Link } from "react-router-dom";

 const AddDetails =  memo(function AddDetails() {
  const [addData, setAddData] = useState({
    fname : '',
    lname : '',
    department : 'Staff',
    phone : '',
    email : "",
    address : "",
    gender : ''
  })
  const [submissionErrors, setSubmissionErrors] = useState(null)
  const {addEmployee} = useFirebaseContext()

  const errors = {}
  
  async function handleSubmit (e) {
    e.preventDefault()

    if (!addData.fname) errors.fnameError = 'First Name is required';
    if (!addData.lname) errors.lnameError = 'Last Name is required';

    if (!addData.phone ){
     errors.phoneError = 'Phone no is required';
    } else if (addData.phone.length > 10 || addData.phone.length < 10) errors.phoneError = 'Phone no must be 10 digits long'
   

    if (!addData.email) errors.emailError = 'Email is required';
    if (!addData.address) errors.addressError = 'Address is required';

    setSubmissionErrors(errors)
   
  if (Object.keys(errors).length === 0) {

    
    const newEmployee = {
      ...addData,
      id : Math.trunc(Math.random() * 100000) + 1,
    }
    // console.log(newEmployee)
      await  addEmployee(newEmployee)
   alert('submission successfull')
    
  setAddData({})
  }
}
  function handleCheck (name) {
    setAddData({ ...addData,  gender : name})
  }
  return (
    <div className="add-emp-cont">
      <h2>Add Employee</h2>

      <form>
        <div>
          <label htmlFor="f_name">First Name : </label>
          <input
            type="text"
            id="f_name"
            placeholder="first name"
            className="input"
            value={addData.fname}
            required
            onChange={(e) => setAddData({...addData, fname : e.target.value})}
          />
          {submissionErrors?.fnameError && <p className="submissionErrors">{submissionErrors?.fnameError}</p>}
        </div>

        <div>
          <label htmlFor="l_name">Last Name : </label>
          <input
            type="text"
            id="l_name"
            placeholder="Last name"
            className="input"
            value={addData.lname}
            required
            onChange={(e) => setAddData({ ...addData, lname : e.target.value})}
          />
        {submissionErrors?.lnameError && <p className="submissionErrors">{submissionErrors?.lnameError}</p>}

        </div>

        <div>
          <label htmlFor="department">Department : </label>
          <select id="department" value={addData.department} onChange={(e) => setAddData({ ...addData,
           department : e.target.value})}
          >
            <option value="Staff">Staff</option>
            <option value="Front End Engineer">Front End Engineer</option>
            <option value="Backend Engineer">Backend Engineer</option>
            <option value="Mechanical Engineer">Mechanical Engineer</option>
          </select>
        </div>

        <div className="phone-details">
          <label htmlFor="phone-no">Phone : </label>
          <input
            type="number"
            className="input"
            name="phone-no"
            id="phone-no"
            placeholder="Enter phone no"
            required
            value={addData.phone}
            onChange={(e) => setAddData({...addData, phone : e.target.value})}
          />
          {submissionErrors?.phoneError && <p className="submissionErrors">{submissionErrors?.phoneError}</p>}

        </div>

        <div className="email-details">
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter email"
            className="input"
            required
            value={addData.email}
            onChange={(e) => setAddData({...addData, email : e.target.value})}
          />
          {submissionErrors?.emailError && <p className="submissionErrors">{submissionErrors?.emailError}</p>}

        </div>

        <div className="gender-select-cont">
          <label htmlFor="gender">Gender : </label>
          <div className="select-gender">
            <div onClick={() => handleCheck('Female')} >
              <label htmlFor="female">Female</label>
              <input type="checkbox" name="" id="female"  checked={addData.gender === 'Female'}  readOnly  />
            </div>
            <div onClick={() => handleCheck('Male')}>
              <label htmlFor="male">Male</label>
              <input type="checkbox" name="" id="male" checked={addData.gender === 'Male'} readOnly />
            </div>
            <div onClick={() => handleCheck('Other')}>
              <label htmlFor="other">Other</label>
              <input type="checkbox" name="" id="other" checked={addData.gender=== 'Other'} readOnly />
            </div> 
          </div>
        </div>

        <div className="address-area">
          <label htmlFor="address" id="address">
            Address :{" "}
          </label>
          <textarea
            name=""
            id="address"
            placeholder="write your address"
            value={addData.address}
            required
            onChange={(e) => setAddData({...addData, address : e.target.value})}></textarea>
          {submissionErrors?.addressError && <p className="submissionErrors address-err" >{submissionErrors?.addressError}</p>}

        </div>

        <div>
          <button type="submit" className="btn btn-submit" onClick={handleSubmit}>
            Submit
          </button>
          <Link to={'/'} className="btn btn-submit link-btn">
          Go to Home
          </Link>
          
        </div>
      </form>
    </div>
  );
})

export default AddDetails;
