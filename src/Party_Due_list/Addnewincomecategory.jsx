import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
// import "../../../frontend-one/src/components/ManageInventory/createAccess.scss";

const Addnewincomecategory = ({onIncomeCreated}) => {

  const [Income, setIncome] = useState(null);
  const categoryNameRef = useRef();
  const descriptionRef = useRef();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchIncomeById = async () => {
        try {
          const response = await fetch(`http://localhost:8080/acc/inc/${id}`);
          const data = await response.json();
          setIncome(data);

          if (data) {
            categoryNameRef.current.value = data.categoryName;
            descriptionRef.current.value = data.description;
          }
        } catch (error) {
          console.error("Error fetching Income:", error);
        }
      };

      fetchIncomeById();
    }
  }, [id]);

  const handleIncomeSubmit = async (e) => {
    e.preventDefault();

    const obj = {
      categoryName: categoryNameRef.current.value,
      description: descriptionRef.current.value,
    };

    const url = id
      ? `http://localhost:8080/acc/inc/update/${id}`
      : "http://localhost:8080/acc/inc/create";

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
        if (onIncomeCreated) {
          onIncomeCreated(data);
        }
        navigate("/accIncList");
      } else {
        console.error("Error saving Income:", res.statusText);
      }
    } catch (error) {
      console.error("Error saving Income:", error);
    }
  };

  return (
    <div className="card border-primary col-11" style={{ marginLeft: "50px" }}>
    <div className="card-header">
      <h5 className="card-title">{id ? "EDIT INCOME" : "CREATE NEW INCOME"}</h5>
      <div
        style={{ marginLeft: "600px" }}
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        <Link to="/accIncList">
          <button type="button" className="btn btn-outline-primary">
            Income List
          </button>
        </Link>
        <Link >
          <button type="button" className="btn btn-outline-primary">
            Add New Income
          </button>
        </Link>
      </div>
    </div>
    <div className="card-body">
      <form onSubmit={handleIncomeSubmit}>
        <div className="container" style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div className="col-md-8">
            <div className="row mb-3">
              <div className="col">
                <div className="input-wrapper">
                  <input
                    ref={categoryNameRef}
                    className="form-control"
                    placeholder="Category Name"
                    type="text"
                  />
                  <label htmlFor="categoryName">Category Name</label>
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col">
                <div className="input-wrapper">
                  <textarea
                    ref={descriptionRef}
                    className="form-control"
                    placeholder="Description"
                    rows="4"
                  />
                  <label htmlFor="description">Description</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: "10px", textAlign: "center" }}>
          <button
            style={{ width: "150px", marginRight: "5px" }}
            type="button"
            className="btn btn-outline-secondary btn-lg"
            onClick={() => navigate("/accIncList")}
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
  )
}

export default Addnewincomecategory