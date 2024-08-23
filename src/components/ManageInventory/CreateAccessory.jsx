
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const CreateAccessory = ({ onUnitCreated }) => {
  const [accessory, setAccessory] = useState(null);
  const nameRef = useRef();
  const unitPriceRef = useRef();
  const unitNameRef = useRef();
  const desRef = useRef();

  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the entire list and filter the accessory by ID
    const fetchAccessoryList = async () => {
      try {
        let response = await fetch('http://localhost:8080/inv/accList/getAllAccessory');
        let data = await response.json();
        const foundAccessory = data.allList.find((item) => item._id === id);
        setAccessory(foundAccessory);

        if (foundAccessory) {
          // Pre-fill the form fields with the fetched data
          nameRef.current.value = foundAccessory.name;
          unitPriceRef.current.value = foundAccessory.price;
          unitNameRef.current.value = foundAccessory.unit;
          desRef.current.value = foundAccessory.description;
        }
      } catch (error) {
        console.error('Error fetching accessory:', error);
      }
    };

    fetchAccessoryList();
  }, [id]);

  const handleAccessSubmit = async (e) => {
    e.preventDefault();

    let obj = {
      name: nameRef.current.value,
      price: unitPriceRef.current.value,
      unit: unitNameRef.current.value,
      description: desRef.current.value,
      status: true,
    };

    let url = id
      ? `http://localhost:8080/inv/accList/update/${id}`
      : 'http://localhost:8080/inv/accList/create';

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
        navigate('/accessory'); // Navigate back to the accessory list
      } else {
        console.error('Error saving accessory:', res.statusText);
      }
    } catch (error) {
      console.error('Error saving accessory:', error);
    }
  };

  return (
    <div>
      <div className="card border-primary col-11 " style={{ marginLeft: '50px', marginTop: '50px' }}>
        <div className="card-header">
          <h5 className="card-title">
            {id ? 'EDIT ACCESSORY' : 'CREATE NEW ACCESSORY LIST'}
          </h5>
          <div style={{ marginLeft: '600px' }} className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-primary">
              <Link to="/accessory">Accessory list</Link>
            </button>
            <button type="button" className="btn btn-outline-primary">Create Accessory</button>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleAccessSubmit}>
            <div className="row mb-2">
              <div className="col input-wrapper">
                <label htmlFor="first">Accessory Name</label>
                <input ref={nameRef} type="text" className="form-control input-wrapper" placeholder="Name" />
              </div>
              <div className="col input-wrapper">
                <select ref={unitNameRef} className="form-control">
                  <option value="">Unit name</option>
                  <option value="abac">abac</option>
                  <option value="baba">babab</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col input-wrapper">
                <label htmlFor="Address">Unit Price</label>
                <input ref={unitPriceRef} type="text" className="form-control" placeholder="Price" />
              </div>
              <div className="col input-wrapper">
                <label htmlFor="phone">Description</label>
                <input ref={desRef} type="text" className="form-control" placeholder="Description" />
              </div>
            </div>
            <div style={{ padding: '10px', marginLeft: '300px', marginTop: '10px' }}>
              <button
                style={{ width: '150px', marginRight: '5px' }}
                type="button"
                className="btn btn-outline-secondary btn-lg"
                onClick={() => navigate('/accessory')}
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
};

export default CreateAccessory;
