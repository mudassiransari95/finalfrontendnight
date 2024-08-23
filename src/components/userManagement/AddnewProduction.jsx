import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../sidebar/Sidebar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import "../ManageInventory/createAccess.scss";

const AddProd = ({onProductionCreated}) => {
  const [Production, setProduction] = useState(null);
  const fullNameRef = useRef();
  const roleRef = useRef();
  // const emailRef = useRef();
  const passwordRef = useRef();
  const phoneRef = useRef();
  const userNameRef = useRef();
  const imageRef = useRef();
  const confirmPasswordRef = useRef();
 
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchProductionById = async () => {
        try {
          const response = await fetch("http://localhost:8080/user/prod/getAllProduction");
          const data = await response.json();
          const foundProduction = data.allList.find((item) => item._id === id);
          setProduction(foundProduction);

          if (foundProduction) {
            fullNameRef.current.value = foundProduction.name;
            roleRef.current.value = foundProduction.role;
            // emailRef.current.value = foundProduction.email;
            passwordRef.current.value = foundProduction.password;
            phoneRef.current.value = foundProduction.phone;
            userNameRef.current.value = foundProduction.userName;
            imageRef.current.value = foundProduction.image;
            confirmPasswordRef.current.value = foundProduction.confirmPassword;
          
          }
        } catch (error) {
          console.error("Error fetching Production:", error);
        }
      };

      fetchProductionById();
    }
  }, [id]);

  const handleProductionSubmit = async (e) => {
    e.preventDefault();

    const obj = {
      name: fullNameRef.current.value,
      role: roleRef.current.value,
      // email: emailRef.current.value,
      password: passwordRef.current.value,
      phone: phoneRef.current.value,
      userName: userNameRef.current.value,
      image: imageRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
   
    };

    const url = id
      ? `http://localhost:8080/user/prod/update/${id}`
      : "http://localhost:8080/user/prod/register";

    const method = id ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      if (res.ok) {
        const data = await res.json();
        if (onProductionCreated) {
          onProductionCreated(data);
        }
        navigate("/productionlist");
      } else {
        console.error("Error saving Production:", res.statusText);
      }
    } catch (error) {
      console.error("Error saving Production:", error);
    }
  };
  return (
    <div>
           <div className="card border-primary col-11 " style={{marginLeft:"50px"}}>
  <div  className="card-header">  
  <h5 className="card-title">ADD PRODUCTION</h5>
  <div style={{marginLeft:"600px"}} class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary"><Link to="/accountant">Production list</Link></button>
  <button type="button" class="btn btn-outline-primary">Create Production</button>
 
</div>
</div>
  {/* <div className="card-body ">
    
    
<div style={{display:"flex"}} className="container">
<div>
<form>
  <div style={{display:"flex",gap:"10px"}}>
    
  <div  className="input-wrapper col-md-4" >
  <label htmlFor="first">Full Name</label>
  <input style={{width:"50px"}} placeholder="Accessory Name" type="text" />
</div>
<div  className="input-wrapper col-md-4">
  <label htmlFor="first">Phone</label>
  <input style={{width:"50px"}} placeholder="phone" type="text" />
</div>
  </div>

  <div style={{display:"flex"}}>

  <div style={{height:"50px",marginLeft:"10px",marginTop:"10px",width:"50px"}} class="input-group">
  <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
    <option selected>Role</option>
    <option value="1">Admin</option>
    <option value="2">Production</option>
    <option value="3">Manager</option>
  </select>
  <button class="btn btn-outline-secondary" type="button">+</button>
</div>
    
  <div  className="input-wrapper col-md-6 " >
  <label htmlFor="first">User Name</label>
  <input placeholder="User name" type="text" />
</div>
  </div>

  <div style={{display:"flex"}}>
    
  <div  className="input-wrapper col-md-4" >
  <label htmlFor="first">Password</label>
  <input placeholder="Password" type="text" />
</div>
<div  className="input-wrapper col-md-4">
  <label htmlFor="first">Confirm Password</label>
  <input placeholder="Description" type="text" />
</div>
  </div>

<div style={{padding:"10px"}}>
<button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-primary btn-lg">Save</button>
<button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-outline-secondary btn-lg">Cancel</button>
</div>
</form>
</div>

<div>
<img style={{borderRadius:"100%",border:"1px solid black",height:"200px",width:"200px"}} src="https://i.pinimg.com/474x/d8/0d/d2/d80dd2f38a99249677afa2cb58757992.jpg" alt="" />
<label style={{marginLeft:"680px",marginTop:"310px"}} htmlFor="">Upload Image</label>
<input type="file" />
</div>
   
</div>

  </div> */}
 <div className="card-body">
  <form onSubmit={handleProductionSubmit}>
    <div className="container" style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div className="col-md-8">
        <div className="row mb-3">
          <div className="col">
            <div className="input-wrapper">
              <input
                ref={fullNameRef}
                className="form-control"
                placeholder="Full Name"
                type="text"
              />
              <label htmlFor="fullName">Full Name</label>
            </div>
          </div>
          <div className="col">
            <div className="input-wrapper">
              <input
                ref={phoneRef}
                className="form-control"
                placeholder="Phone"
                type="text"
              />
              <label htmlFor="phone">Phone</label>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <select
              ref={roleRef}
              className="form-select"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
            >
              <option value="">Role</option>
              <option value="Admin">Admin</option>
              <option value="Production">Production</option>
              <option value="Manager">Manager</option>
            </select>
            <label htmlFor="inputGroupSelect04">Role</label>
          </div>
          <div className="col">
            <div className="input-wrapper">
              <input
                ref={userNameRef}
                className="form-control"
                placeholder="User Name"
                type="text"
              />
              <label htmlFor="userName">User Name</label>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <div className="input-wrapper">
              <input
                ref={passwordRef}
                className="form-control"
                placeholder="Password"
                type="password"
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="col">
            <div className="input-wrapper">
              <input
                ref={confirmPasswordRef}
                className="form-control"
                placeholder="Confirm Password"
                type="password"
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img
          style={{
            borderRadius: "100%",
            border: "1px solid black",
            height: "150px",
            width: "150px",
          }}
          src="https://i.pinimg.com/474x/d8/0d/d2/d80dd2f38a99249677afa2cb58757992.jpg"
          alt=""
        />
        <input type="file" ref={imageRef} className="mt-3" />
      </div>
    </div>

    <div style={{ padding: "10px", textAlign: "center" }}>
      <button
        style={{ width: "150px", marginRight: "5px" }}
        type="button"
        className="btn btn-outline-secondary btn-lg"
        onClick={() => navigate("/production")}
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
  )
}

export default AddProd