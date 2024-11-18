import React, { useState } from "react";

function AddDetails() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [department, setDepartment] = useState("Staff");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState({
    genderName : 'Not specified',
    isCheck : null
  })
  const [submissionErrors, setSubmissionErrors] = useState(null)

  const errors = {}


  
  async function handleSubmit (e) {
    e.preventDefault()

    if (!fname) errors.fnameError = 'First Name is required';
    if (!lname) errors.lnameError = 'Last Name is required';
    if (!phone ) errors.phoneError = 'Phone no is required';
    if (!email) errors.emailError = 'Email is required';
    if (!address) errors.addressError = 'Address is required';

    setSubmissionErrors(errors)
    
    // if (!fname) setErrors({fnameError : 'First Name is required'})
    //       if (!lname) setErrors({lnameError : 'Last Name is required'});

      
      // console.log( typeof errors, errors, Object.keys(errors).length)

  if (Object.keys(errors).length === 0) {

    
    const newEmployee = {
      id : Math.trunc(Math.random() * 100) + 1,
      fname,
      lname,
      department,
      phone,
      email,
      gender : gender.genderName,
      address
    }
    console.log(newEmployee)
    alert('submission successfull')
  }
}
  function handleCheck (name) {
    setGender({genderName : name, isCheck : name})
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
            value={fname}
            required
            onChange={(e) => setFname(e.target.value)}
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
            value={lname}
            required
            onChange={(e) => setLname(e.target.value)}
          />
        {submissionErrors?.lnameError && <p className="submissionErrors">{submissionErrors?.lnameError}</p>}

        </div>

        <div>
          <label htmlFor="department">Department : </label>
          <select id="department" value={department} onChange={(e) => setDepartment(e.target.value)}>
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
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
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
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          {submissionErrors?.emailError && <p className="submissionErrors">{submissionErrors?.emailError}</p>}

        </div>

        <div className="gender-select-cont">
          <label htmlFor="gender">Gender : </label>
          <div className="select-gender">
            <div onClick={() => handleCheck('Female')} >
              <label htmlFor="female">Female</label>
              <input type="checkbox" name="" id="female"  checked={gender.isCheck === 'Female'}  readOnly  />
            </div>
            <div onClick={() => handleCheck('Male')}>
              <label htmlFor="male">Male</label>
              <input type="checkbox" name="" id="male" checked={gender.isCheck === 'Male'} readOnly />
            </div>
            <div onClick={() => handleCheck('Other')}>
              <label htmlFor="other">Other</label>
              <input type="checkbox" name="" id="other" checked={gender.isCheck === 'Other'} readOnly />
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
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
          {submissionErrors?.addressError && <p className="submissionErrors address-err" >{submissionErrors?.addressError}</p>}

        </div>

        <div>
          <button type="submit" className="btn btn-submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddDetails;
