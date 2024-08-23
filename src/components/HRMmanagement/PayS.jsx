import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const PayS = ({ onUnitCreated }) => {
  const [Salary, setSalary] = useState(null);
  // const employeeRef = useRef();
  const employeeRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();
  const salaryAmtRef = useRef();
  // const paidAmtRef = useRef();
  // const dueSalaryRef = useRef();
  const payMethodRef = useRef();
  // const payDateRef = useRef();
  const notesRef = useRef();

  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the entire list and filter the Salary by ID
    const fetchSalaryList = async () => {
      try {
        let response = await fetch("http://localhost:8080/hrm/sal/getAllSal");
        let data = await response.json();
        const foundSalary = data?.allList?.find((item) => item._id === id);
        setSalary(foundSalary);

        if (foundSalary) {
          // Pre-fill the form fields with the fetched data
          employeeRef.current.value = foundSalary.employee;
          monthRef.current.value = foundSalary.month;
          yearRef.current.value = foundSalary.year;
          salaryAmtRef.current.value = foundSalary.salaryAmt;
          // paidAmtRef.current.value = foundSalary.paidAmt;
          // dueSalaryRef.current.value = foundSalary.dueSalary;
          payMethodRef.current.value = foundSalary.payMethod;
          // payDateRef.current.value = foundSalary.payDate;
          notesRef.current.value = foundSalary.notes;
        }
      } catch (error) {
        console.error("Error fetching Salary:", error);
      }
    };

    fetchSalaryList();
  }, [id]);

  const handleEmpSubmit = async (e) => {
    e.preventDefault();

    let obj = {
      employee: employeeRef?.current.value,
      month: monthRef?.current.value,
      year: yearRef?.current.value,
      salaryAmt: salaryAmtRef?.current.value,
      // paidAmt: paidAmtRef?.current.value,
      // dueSalary: dueSalaryRef?.current.value,
      payMethod: payMethodRef?.current.value,
      // payDate: payDateRef?.current.value,
      notes: notesRef?.current.value,

      status: true,
    };

    let url = id
      ? `http://localhost:8080/hrm/sal/update/${id}`
      : "http://localhost:8080/hrm/sal/create";

    let method = id ? "PUT" : "POST";

    try {
      let res = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      if (res.ok) {
        let data = await res.json();
        if (onUnitCreated) {
          onUnitCreated(data);
        }
        navigate("/salarylist"); // Navigate back to the Salary list
      } else {
        console.error("Error saving Salary:", res.statusText);
      }
    } catch (error) {
      console.error("Error saving Salary:", error);
    }
  };

  return (
    <div>
      {/* <div className="card border-primary col-11 " style={{marginLeft:"50px",marginTop:"50px"}}>
      <div  className="card-header">  
  <h5 className="card-title">PAY SALARY</h5>
  <div style={{marginLeft:"800px",marginBottom:"20px"}} class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary"><Link to="/salarylist">Salary list</Link></button>
  
</div>
</div>
<div  className="card-body ">
<form>
  <div className="container" style={{display:"flex",gap:"10px"}}>
    
  <div style={{height: "50px",marginLeft:"20px",marginTop:"10px",width:"400px"}} className="input-group">
  <select className="form-select" id="inputGroupSelect04" >
    <option selected>Select Salary</option>
    <option value={1}>Test</option>
    <option value={2}>...</option>
   
  </select>
</div>
<div  className="input-wrapper col-md-6">
  <label htmlFor="first">Salary Amount</label>
  <input style={{width:"400px"}} placeholder="phone" type="text" />
</div>
  </div>

  <div style={{display:"flex"}}>
  <div style={{height: "50px",marginLeft:"30px",marginTop:"10px",width:"400px"}} className="input-group">
  <select className="form-select" id="inputGroupSelect04" >
    <option selected>Salary Year</option>
    <option value={1}>Test</option>
    <option value={2}>...</option>
   
  </select>

</div>
<div style={{height: "50px",marginLeft:"20px",marginTop:"10px",width:"400px"}} className="input-group">
  <select className="form-select" id="inputGroupSelect04" >
    <option selected>Salary Month</option>
    <option value={1}>Test</option>
    <option value={2}>...</option>
   
  </select>

</div>
 
  </div>

  <div style={{display:"flex"}}>
    
  <div style={{height: "50px",marginLeft:"20px",marginTop:"10px",width:"400px"}} className="input-wrapper col-md-6">
  <label htmlFor="first">Payment Method</label>
  <input style={{width:"400px"}} placeholder="Payment method" type="text" />
</div>
<div style={{height: "50px",marginLeft:"20px",marginTop:"10px",width:"400px"}} className="input-wrapper col-md-6">
  <label htmlFor="first">Notes</label>
  <input style={{width:"400px"}} placeholder="Notes" type="text" />
</div>
  </div>

<div style={{padding:"10px", marginLeft:"250px",marginTop:"10px"}}>
<button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-primary btn-lg">Save</button>
<button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-outline-secondary btn-lg">Cancel</button>
</div>
</form>
</div>
     
      </div> */}

      <div
        className="card border-primary col-11 "
        style={{ marginLeft: "50px", marginTop: "50px" }}
      >
        <div className="card-header">
          <h5 className="card-title">
            {id ? "EDIT Salary" : "CREATE NEW Salary LIST"}
          </h5>
          <div
            style={{ marginLeft: "600px" }}
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button type="button" className="btn btn-outline-primary">
              <Link to="/salarylist">Salary list</Link>
            </button>
            <button type="button" className="btn btn-outline-primary">
              {" "}
              <Link to="/">Create Salary</Link>
            </button>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleEmpSubmit}>
            <div className="row mb-2">
              <div className="col input-group mb-3">
                <select
                  ref={employeeRef}
                  className="form-control"
                  id="inputGroupSelect02"
                >
                  <option selected>Select Employee...</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>

              <div className="col input-wrapper">
                <label htmlFor="first">Salary Amount</label>
                <input
                  ref={salaryAmtRef}
                  type="text"
                  className="form-control "
                  placeholder="salary"
                />
              </div>
            </div>

            <div className="row mb-2">
              <div className="col input-group mb-3">
                <select
                  ref={yearRef}
                  // style={{
                  //   width: "300px",
                  //   border: "0.5px solid black",
                  //   borderRadius: "4px",
                  //   height: "40px",
                  // }}
                  className="form-control"
                  id="inputGroupSelect02"
                >
                  <option selected>Select Year...</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
              <div className="col input-group mb-3">
                <select
                  ref={monthRef}
                  // style={{
                  //   width: "300px",
                  //   border: "0.5px solid black",
                  //   borderRadius: "4px",
                  //   height: "40px",
                  // }}
                  className="form-control"
                  id="inputGroupSelect02" 
                >
                  <option selected>Salary Month...</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
            </div>

            <div className="row mb-2">
              <div className="col input-group mb-3">
                <select
                  ref={payMethodRef}
                  // style={{
                  //   width: "300px",
                  //   border: "0.5px solid black",
                  //   borderRadius: "4px",
                  //   height: "40px",
                  // }}
                  className="form-control"
                  id="inputGroupSelect02"
                >
                  <option selected>Payment Method...</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>

              <div className="col input-wrapper">
                <label htmlFor="first">Notes</label>
                <input
                  ref={notesRef}
                  type="text"
                  className="form-control input-wrapper"
                  placeholder="salary"
                />
              </div>
            </div>

            <div
              style={{
                padding: "10px",
                marginLeft: "300px",
                marginTop: "10px",
              }}
            >
              <button
                style={{ width: "150px", marginRight: "5px" }}
                type="button"
                className="btn btn-outline-secondary btn-lg"
                onClick={() => navigate("/salarylist")} 
              >
                Cancel
              </button>
              <button
                style={{ width: "150px", marginRight: "5px" }}
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
};

export default PayS;
