import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../ManageInventory/createAccess.scss";

const AddNewAdmin = ({ onAdminCreated }) => {
  const [admin, setAdmin] = useState(null);
  const fullNameRef = useRef();
  const roleRef = useRef();
  const passwordRef = useRef();
  const phoneRef = useRef();
  const adminNameRef = useRef();
  const confirmPasswordRef = useRef();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchAdminById = async () => {
        try {
          const response = await fetch("http://localhost:8080/user/admin/getAllAdmin");
          const data = await response.json();
          const foundAdmin = data.allList.find((item) => item._id === id);
          setAdmin(foundAdmin);

          if (foundAdmin) {
            fullNameRef.current.value = foundAdmin.name;
            roleRef.current.value = foundAdmin.role;
            passwordRef.current.value = foundAdmin.password;
            phoneRef.current.value = foundAdmin.phone;
            adminNameRef.current.value = foundAdmin.userName;
            confirmPasswordRef.current.value = foundAdmin.confirmPassword;
          }
        } catch (error) {
          console.error("Error fetching admin:", error);
        }
      };

      fetchAdminById();
    }
  }, [id]);

  const handleAdminSubmit = async (e) => {
    e.preventDefault();

    const obj = {
      name: fullNameRef.current.value,
      role: roleRef.current.value,
      password: passwordRef.current.value,
      phone: phoneRef.current.value,
      userName: adminNameRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
    };

    const url = id
      ? `http://localhost:8080/user/admin/update/${id}`
      : "http://localhost:8080/user/admin/register";

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
        if (onAdminCreated) {
          onAdminCreated(data);
        }
        navigate("/admin");
      } else {
        console.error("Error saving admin:", res.statusText);
      }
    } catch (error) {
      console.error("Error saving admin:", error);
    }
  };

  return (
    <div>
      <div className="card border-primary col-11 " style={{ marginLeft: "50px" }}>
        <div className="card-header">
          <h5 className="card-title">{id ? "EDIT ADMIN" : "CREATE NEW ADMIN"}</h5>
          <div
            style={{ marginLeft: "600px" }}
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <Link to={"/admin"}>
              <button type="button" className="btn btn-outline-primary">
                Admin list
              </button>
            </Link>
            <Link to={"/newAdmin"}>
              <button type="button" className="btn btn-outline-primary">
                Add New Admin
              </button>
            </Link>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleAdminSubmit}>
          <div className="container" style={{ display: "flex", justifyContent: "space-evenly" }}>
  <div className="col-md-8">
    <div className="row mb-3">
      <div className="col">
        <div className="input-wrapper">
          <label htmlFor="fullName">Full Name</label>
          <input
            ref={fullNameRef}
            className="form-control"
            placeholder="Full Name"
            type="text"
          />
        </div>
      </div>
      <div className="col">
        <div className="input-wrapper">
          <label htmlFor="phone">Phone</label>
          <input
            ref={phoneRef}
            className="form-control"
            placeholder="Phone"
            type="text"
          />
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
          <option value="Buyer">Buyer</option>
          <option value="Manager">Manager</option>
        </select>
      </div>
      <div className="col">
        <div className="input-wrapper">
          <label htmlFor="adminName">Admin Name</label>
          <input
            ref={adminNameRef}
            className="form-control"
            placeholder="Admin Name"
            type="text"
          />
        </div>
      </div>
    </div>

    <div className="row mb-3">
      <div className="col">
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            ref={passwordRef}
            className="form-control"
            placeholder="Password"
            type="password"
          />
        </div>
      </div>
      <div className="col">
        <div className="input-wrapper">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            ref={confirmPasswordRef}
            className="form-control"
            placeholder="Confirm Password"
            type="password"
          />
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
    <input type="file" className="mt-3" />
  </div>
</div>

            <div style={{ padding: "10px", textAlign: "center" }}>
              <button
                style={{ width: "150px", marginRight: "5px" }}
                type="button"
                className="btn btn-outline-secondary btn-lg"
                onClick={() => navigate("/admin")}
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

export default AddNewAdmin;
