import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddEmployee = ({onUnitCreated}) => {

  const [Employee, setEmployee] = useState(null);
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const genderRef = useRef();
  const empTypeRef = useRef();
  const birthRef = useRef();
  const joinRef = useRef();
  const desRef = useRef();
  const salaryRef = useRef();
  const nidPassRef = useRef();
  const nidPassBackRef = useRef();

  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the entire list and filter the Employee by ID
    const fetchEmployeeList = async () => {
      try {
        let response = await fetch('http://localhost:8080/hrm/emp/getAllEmp');
        let data = await response.json();
        const foundEmployee = data.allList.find((item) => item._id === id);
        setEmployee(foundEmployee);

        if (foundEmployee) {
          // Pre-fill the form fields with the fetched data
          nameRef.current.value = foundEmployee.name;
          emailRef.current.value = foundEmployee.email;
          addressRef.current.value = foundEmployee.address;
          genderRef.current.value = foundEmployee.gender;
          birthRef.current.value = foundEmployee.birthDate;
          empTypeRef.current.value = foundEmployee.employmentType;
          joinRef.current.value = foundEmployee.joiningDate;
          desRef.current.value = foundEmployee.designation;
          nidPassBackRef.current.value = foundEmployee.nidPassportBack;
          nidPassRef.current.value = foundEmployee.nidPassport;
          salaryRef.current.value = foundEmployee.salary;
          phoneRef.current.value = foundEmployee.phone;
        }
      } catch (error) {
        console.error('Error fetching employee:', error);
      }
    };

    fetchEmployeeList();
  }, [id]);

  const handleEmpSubmit = async (e) => {
    e.preventDefault();

    let obj = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      address: addressRef.current.value,
      gender: desRef.current.value,
      employmentType: desRef.current.value,
      birthDate: birthRef.current.value,
      joiningDate: joinRef.current.value,
      designation: desRef.current.value,
      salary: salaryRef.current.value,
      nidPassport: nidPassRef.current.value,
      nidPassportBack: nidPassBackRef.current.value,
      status: true,
    };

    let url = id
      ? `http://localhost:8080/hrm/emp/update/${id}`
      : 'http://localhost:8080/hrm/emp/create';

    let method = id ? 'PUT' : 'POST';

    try {
      let res = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      });

      if (res.ok) {
        let data = await res.json();
        if (onUnitCreated) {
          onUnitCreated(data);
        }
        navigate('/employee'); // Navigate back to the Employee list
      } else {
        console.error('Error saving Employee:', res.statusText);
      }
    } catch (error) {
      console.error('Error saving Employee:', error);
    }
  };

  
  return (
    <div>
      {/* <div className="card border-primary col-11" style={{ marginLeft: "50px", marginTop: "50px" }}>
        <div className="card-header">
          <h5 className="card-title">ADD EMPLOYEE</h5>
          <div style={{ marginLeft: "800px", marginBottom: "20px" }} className="btn-group" role="group" aria-label="Basic outlined example">
          <Link to="/employee">
  <button type="button" class="btn btn-outline-primary">Employee list</button>
  </Link>
          </div>
        </div>
        <div className="card-body">
          <form>
            <div className="row mb-3">
              <div className="col">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Phone number" />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Email" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <input type="text" className="form-control" placeholder="Address" />
              </div>
              <div className="col">
                <select className="form-control">
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="col">
                <select className="form-control">
                  <option value="">Employment Type</option>
                  <option value="part_time">Part Time</option>
                  <option value="full_time">Full Time</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <input type="date" className="form-control" placeholder="Birth Date" />
              </div>
              <div className="col">
                <input type="date" className="form-control" placeholder="Joining Date" />
              </div>
              <div className="col">
                <select className="form-control">
                  <option value="">Designation</option>
                  <option value="sublimacion">Sublimacion</option>
                  <option value="manager">Manager</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <input type="text" className="form-control" placeholder="Salary" />
              </div>
              <div className="col">
                <input type="file" className="form-control" placeholder="NID/Passport" />
              </div>
              <div className="col">
                <input type="file" className="form-control" placeholder="NID/Passport Back" />
              </div>
            </div>
          </form>
          <div style={{padding:"10px", marginLeft:"300px",marginTop:"10px"}}>
<button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-outline-secondary btn-lg">Reset</button>
<button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-primary btn-lg">Save</button>
</div>
        </div>
      </div> */}
    
    <div className="card border-primary col-11 " style={{ marginLeft: '50px', marginTop: '50px' }}>
        <div className="card-header">
          <h5 className="card-title">
            {id ? 'EDIT Employee' : 'CREATE NEW EMPLOYEE LIST'}
          </h5>
          <div style={{ marginLeft: '600px' }} className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-primary">
              <Link to="/employee">Employee list</Link>
            </button>
            <button type="button" className="btn btn-outline-primary"> <Link to="/addEmp">Create Employee</Link></button>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleEmpSubmit}>
            <div className="row mb-3">
              <div className="col input-wrapper">
                <label htmlFor="first">Name</label>
                <input ref={nameRef} type="text" className="form-control input-wrapper" placeholder="Name" />
              </div>
              <div className="col input-wrapper">
                <label htmlFor="first">Phone number</label>
                <input ref={phoneRef} type="text" className="form-control input-wrapper" placeholder="phone" />
              </div>
       
              <div className="col input-wrapper">
                <label htmlFor="first">Email</label>
                <input ref={emailRef} type="text" className="form-control input-wrapper" placeholder="Email" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col input-wrapper">
                <label htmlFor="Address">Address</label>
                <input ref={addressRef} type="text" className="form-control" placeholder="Price" />
              </div>
            
  <div className="col input-group mb-3">
    <select ref={genderRef} style={{width:"300px",border:"0.5px solid black",borderRadius:"4px",height:"40px"}} className="custom-select" id="inputGroupSelect02">
      <option selected>Gender...</option>
      <option value={1}>One</option>
      <option value={2}>Two</option>
      <option value={3}>Three</option>
    </select>
  </div>
  <div className="col input-group mb-3">
    <select ref={empTypeRef}  style={{width:"300px",border:"0.5px solid black",borderRadius:"4px",height:"40px"}} className="custom-select" id="inputGroupSelect02">
      <option selected>Employment Type...</option>
      <option value={1}>One</option>
      <option value={2}>Two</option>
      <option value={3}>Three</option>
    </select>
  </div>
 </div>

 <div className="row mb-3">
              <div className="col input-wrapper">
                <label htmlFor="Address">Birth Date</label>
                <input ref={birthRef} type="date" className="form-control" placeholder="Price" />
              </div>
            
              <div className="col input-wrapper">
                <label htmlFor="Address">Joining Date</label>
                <input ref={joinRef} type="date" className="form-control" placeholder="Price" />
              </div>
  
  <div className="col input-group mb-3">
    <select ref={desRef} style={{width:"300px",border:"0.5px solid black",borderRadius:"4px",height:"40px"}} className="custom-select" id="inputGroupSelect02">
      <option selected>Designation...</option>
      <option value={1}>One</option>
      <option value={2}>Two</option>
      <option value={3}>Three</option>
    </select>
  </div>
 </div>
 <div className="row mb-3">
              <div className="col input-wrapper">
                <label htmlFor="first">Salary</label>
                <input ref={salaryRef} type="text" className="form-control input-wrapper" placeholder="salary" />
              </div>
              <div className="col input-wrapper">
                <label htmlFor="first">NID/Passport</label>
                <input ref={nidPassRef} type="file" className="form-control input-wrapper" placeholder="nid passport" />
              </div>
              <div className="col input-wrapper">
                <label htmlFor="first">NID/Passport back(optional)</label>
                <input ref={nidPassBackRef} type="file" className="form-control input-wrapper" placeholder="Nid passport back" />
              </div>
            </div>

            <div style={{ padding: '10px', marginLeft: '300px', marginTop: '10px' }}>
              <button
                style={{ width: '150px', marginRight: '5px' }}
                type="button"
                className="btn btn-outline-secondary btn-lg"
                onClick={() => navigate('/employee')}
              >
                Cancel
              </button>
              <button
                style={{ width: '150px', marginRight: '5px' }}
                type="submit"
                className="btn btn-primary btn-lg"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    
    </div>
  );
}

export default AddEmployee;
