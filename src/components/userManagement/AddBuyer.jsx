import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../sidebar/Sidebar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import "../ManageInventory/createAccess.scss";


const AddBuyer = ({onBuyerCreated}) => {

  const [Buyer, setBuyer] = useState(null);
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
      const fetchBuyerById = async () => {
        try {
          const response = await fetch("http://localhost:8080/user/buy/getAllBuyer");
          const data = await response.json();
          const foundBuyer = data.allList.find((item) => item._id === id);
          setBuyer(foundBuyer);

          if (foundBuyer) {
            fullNameRef.current.value = foundBuyer.name;
            roleRef.current.value = foundBuyer.role;
            // emailRef.current.value = foundBuyer.email;
            passwordRef.current.value = foundBuyer.password;
            phoneRef.current.value = foundBuyer.phone;
            userNameRef.current.value = foundBuyer.userName;
            imageRef.current.value = foundBuyer.image;
            confirmPasswordRef.current.value = foundBuyer.confirmPassword;
          }
        } catch (error) {
          console.error("Error fetching Buyer:", error);
        }
      };

      fetchBuyerById();
    }
  }, [id]);

  const handleBuyerSubmit = async (e) => {
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
      ? `http://localhost:8080/user/buy/update/${id}`
      : "http://localhost:8080/user/buy/register";

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
        if (onBuyerCreated) {
          onBuyerCreated(data);
        }
        navigate("/buyer");
      } else {
        console.error("Error saving Buyer:", res.statusText);
      }
    } catch (error) {
      console.error("Error saving Buyer:", error);
    }
  };

  return (
//     <div style={{marginLeft:"50px"}}>
//         {/* <Sidebar/> */}
//          <div className="card border-primary col-11 " >
//   <div  className="card-header">  
//   <h5 className="card-title">ADD BUYER</h5>
//   <div style={{marginLeft:"600px"}} class="btn-group" role="group" aria-label="Basic outlined example">
//     <Link to={"/buyer"}>
//   <button type="button" class="btn btn-outline-primary">Buyers list</button>
//     </Link >
//     <Link to={"/addBuyer"}>
//   <button type="button" class="btn btn-outline-primary">Create Buyers</button>
//     </Link>
 
// </div>
// </div>
// <div className="card-body ">
    
    
//     <div style={{display:"flex" , justifyContent:"space-evenly"}} className="container">
//     <div>
//     <div  className="input-wrapper " >
//       <label htmlFor="first">Full Name</label>
//       <input style={{width:"300px"}}  placeholder="first Name" type="text" />
//     </div>
//     <div  className="my-2 ">
//       {/* <label htmlFor="first">Role</label> */}
//       <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
//         <option selected>Role</option>
//         <option value="1">Buyer</option>
//         <option value="2">Buyer</option>
//         <option value="3">Manager</option>
//       </select>
//       {/* <input style={{width:"300px"}}  placeholder="phone" type="text" /> */}
//     </div>
//     <div  className="input-wrapper ">
//       <label htmlFor="first">Password</label>
//       <input style={{width:"300px"}}  placeholder="password" type="text" />
//     </div>
    
//     </div>
//     <div>
//     <div  className="input-wrapper ">
      
//       <label htmlFor="first">Phone</label>
//       <input style={{width:"300px"}}  placeholder="phone" type="text" />
//     </div>
//     <div  className="input-wrapper " >
//       <label htmlFor="first">Buyer Name</label>
//       <input style={{width:"300px"}}  placeholder="Buyer Name" type="text" />
//     </div>
//     <div  className="input-wrapper ">
//       <label htmlFor="first">confirm password</label>
//       <input style={{width:"300px"}}  placeholder="confirm password" type="text" />
//     </div>
//     </div>
//     <div style={{display:"flex",flexDirection:"column"}}>
//     <img style={{borderRadius:"100%",border:"1px solid black",height:"150px",width:"150px"}} src="https://i.pinimg.com/474x/d8/0d/d2/d80dd2f38a99249677afa2cb58757992.jpg" alt="" />
//     {/* <label  htmlFor="">Upload Image</label> */}
//     <input type="file" />
//     </div>
       
//     </div>
    
//       </div>
//       <div style={{padding:"10px" , textAlign:"center"}}>
// <button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-primary btn-lg">Save</button>
// <button style={{width:"150px",marginRight:"5px"}} type="button" class="btn btn-outline-secondary btn-lg">Cancel</button>
// </div>
// </div>
      
//     </div>
  
<div>
<div className="card border-primary col-11 " style={{ marginLeft: "50px" }}>
        <div className="card-header">
          <h5 className="card-title">{id ? "EDIT BUYER" : "CREATE NEW BUYER"}</h5>
          <div
            style={{ marginLeft: "600px" }}
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <Link to={"/buyer"}>
              <button type="button" className="btn btn-outline-primary">
                Buyer list
              </button>
            </Link>
            <Link to={"/addBuyer"}>
              <button type="button" className="btn btn-outline-primary">
                Add New Buyer
              </button>
            </Link>
          </div>
        </div>
        <div className="card-body">
  <form onSubmit={handleBuyerSubmit}>
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
          <div className="col input-wrapper">
            <select
              ref={roleRef}
              className="form-select"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
            >
              <option value="">Role</option>
              <option value="Admin">Admin</option>
              <option value="Buyer">Buyer</option>
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
        onClick={() => navigate("/buyer")}
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

export default AddBuyer
