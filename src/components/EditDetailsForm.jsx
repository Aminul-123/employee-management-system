import React, { useEffect, useState } from "react";
import { useFirebaseContext } from "../context/FirebaseContext";
import { Link, useParams } from "react-router-dom";
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";

function EditDetailsForm() {
  const [empDetails, setEmpDetails] = useState({})
 
  const [submissionErrors, setSubmissionErrors] = useState(null)
  const { firestore, data} = useFirebaseContext()
  
  
  const {id} = useParams()
  //console.log(id) // string
  useEffect(() => {
    async function getDetailsById () {
      const collectionRef = collection(firestore, 'add-employee');
      const q = query(collectionRef , where('id', '==', Number(id)));
      const snap = await getDocs(q)
     // console.log(snap)
      const {fname, lname, phone, email, address, gender} =   (snap.docs.map((elem) => elem.data()))?.[0]
      setEmpDetails({
        fname, lname, phone, email, address, gender
      })
    

      data.forEach((elem) => {
        if (elem.id === Number(id)) {
          localStorage.setItem('employee-ID', elem.ID);
        }
      })

    }
    getDetailsById()
  }, [id])

  //console.log(empDetails?.ID);  undefined
  
  const errors = {}

  async function handleSubmit (e) {
    e.preventDefault()

 //   console.log(empDetails.fname, empDetails.lname, empDetails.address, empDetails.email)
    if (!empDetails?.fname) errors.fnameError = 'First Name is required';
    if (!empDetails?.lname) errors.lnameError = 'Last Name is required';

    if (!empDetails?.phone ){
     errors.phoneError = 'Phone no is required';
     //we can also use toString method below
    } else if (`${empDetails.phone}`.length > 10 || empDetails?.phone?.toString().length < 10) errors.phoneError = 'Phone no must be 10 digits long'
   

    if (!empDetails?.email  ) {
      errors.emailError = 'Email is required';
    } else if (!empDetails?.email?.endsWith('@gmail.com')) {
      //this returns true or false
      errors.emailError = 'Please Enter a valid email'
    }
    if (!empDetails?.address) errors.addressError = 'Address is required';

    setSubmissionErrors(errors)

  //  console.log(errors)
   

  if (Object.keys(errors).length === 0) {

    const updatedEmp = {
    ...empDetails, id : Number(id)
    }
    console.log(updatedEmp?.id)
    const docRef = doc(firestore, 'add-employee', localStorage.getItem('employee-ID'));
    await updateDoc(docRef, updatedEmp
  
  );

  alert('successfull updation' )
 }
}
  function handleCheck (name) {
   setEmpDetails({...empDetails, gender : name})
  }
  return (
    <div className="add-emp-cont">
      <h2>Edit Employee  </h2>

      <form>
        <div>
          <label htmlFor="f_name">First Name : </label>
          <input
            type="text"
            id="f_name"
            placeholder="first name"
            className="input"
            value={empDetails?.fname}
            required
            onChange={(e) => setEmpDetails({...empDetails, fname : e.target.value})}
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
            value={empDetails?.lname}
            required
            onChange={(e) => setEmpDetails({ ...empDetails, lname : e.target.value})}
          />
        {submissionErrors?.lnameError && <p className="submissionErrors">{submissionErrors?.lnameError}</p>}

        </div>

        <div>
          <label htmlFor="department">Department : </label>
          <select id="department" value={empDetails?.department}             
          onChange={(e) => setEmpDetails({  ...empDetails, department : e.target.value})}
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
            value={empDetails?.phone}
            required
            onChange={(e) => setEmpDetails({
              ...empDetails,
               phone : e.target.value
            })}
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
            value={empDetails?.email}
            required
            onChange={(e) => setEmpDetails({...empDetails, email : e.target.value})}
          />
          {submissionErrors?.emailError && <p className="submissionErrors">{submissionErrors?.emailError}</p>}

        </div>

        <div className="gender-select-cont">
          <label htmlFor="gender">Gender : </label>
          <div className="select-gender">
            <div onClick={() => handleCheck('Female')} >
              <label htmlFor="female">Female</label>
              <input type="checkbox" name="" id="female"  checked={empDetails?.gender === 'Female'}  readOnly  />
            </div>
            <div onClick={() => handleCheck('Male')}>
              <label htmlFor="male">Male</label>
              <input type="checkbox" name="" id="male" checked={empDetails?.gender === 'Male'} readOnly />
            </div>
            <div onClick={() => handleCheck('Other')}>
              <label htmlFor="other">Other</label>
              <input type="checkbox" name="" id="other" checked={empDetails?.gender === 'Other'} readOnly />
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
            value={empDetails?.address}
            required
            onChange={(e) => setEmpDetails({...empDetails, address : e.target.value})}
          ></textarea>
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
}

export default EditDetailsForm;
