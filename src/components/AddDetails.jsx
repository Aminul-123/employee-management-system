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

  function handleSubmit (e) {
    e.preventDefault()

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
            onChange={(e) => setFname(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="l_name">Last Name : </label>
          <input
            type="text"
            id="l_name"
            placeholder="Last name"
            className="input"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
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
            onChange={(e) => setPhone(e.target.value)}
          />
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
            onChange={(e) => setEmail(e.target.value)}
          />
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
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
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
