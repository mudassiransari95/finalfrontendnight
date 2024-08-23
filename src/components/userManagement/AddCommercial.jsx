import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import "../ManageInventory/createAccess.scss";

const AddCommercial = ({onCommercialCreated}) => {

  const [Commercial, setCommercial] = useState(null);
  const fullNameRef = useRef();
  const roleRef = useRef();
  // const emailRef  = useRef();
  const passwordRef = useRef();
  const phoneRef = useRef();
  const userNameRef = useRef();
  const imageRef = useRef();
  const confirmPasswordRef = useRef();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchCommercialById = async () => {
        try {
          const response = await fetch("http://localhost:8080/user/comm/getAllComm");
          const data = await response.json();
          const foundCommercial = data.allList.find((item) => item._id === id);
          setCommercial(foundCommercial);

          if (foundCommercial) {
            fullNameRef.current.value = foundCommercial.name;
            roleRef.current.value = foundCommercial.role;
            // emailRef.current.value = foundCommercial.email;
            passwordRef.current.value = foundCommercial.password;
            phoneRef.current.value = foundCommercial.phone;
            userNameRef.current.value = foundCommercial.userName;
            imageRef.current.value = foundCommercial.image;
            confirmPasswordRef.current.value = foundCommercial.confirmPassword;
          }
        } catch (error) {
          console.error("Error fetching Commercial:", error);
        }
      };

      fetchCommercialById();
    }
  }, [id]);

  const handleCommercialSubmit = async (e) => {
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
      ? `http://localhost:8080/user/comm/update/${id}`
      : "http://localhost:8080/user/comm/register";

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
        if (onCommercialCreated) {
          onCommercialCreated(data);
        }
        navigate("/commercial");
      } else {
        console.error("Error saving Commercial:", res.statusText);
      }
    } catch (error) {
      console.error("Error saving Commercial:", error);
    }
  };


  return (
    <div>
       <div className="card border-primary col-11 " style={{ marginLeft: "50px" }}>
        <div className="card-header">
          <h5 className="card-title">{id ? "EDIT COMMERCIAL" : "CREATE NEW COMMERCIAL"}</h5>
          <div
            style={{ marginLeft: "600px" }}
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <Link to={"/commercial"}>
              <button type="button" className="btn btn-outline-primary">
                Commercial list
              </button>
            </Link>
            <Link to={"/addComm"}>
              <button type="button" className="btn btn-outline-primary">
                Add New Commercial
              </button>
            </Link>
          </div>
        </div>
        <div className="card-body">
  <form onSubmit={handleCommercialSubmit}>
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
              <option value="Commercial">Commercial</option>
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
        onClick={() => navigate("/commercial")}
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

export default AddCommercial
