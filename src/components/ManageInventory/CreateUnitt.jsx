// import React, { useEffect, useRef, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import "./createunit.scss";

// const CreateUnitt = ({ onUnitCreated }) => {
//   const [clicked, setClicked] = useState(false);
//   const [unit, setUnit] = useState([]);
//   const nameRef = useRef();

// let navigate= useNavigate() 
  

//   const handleUnitSubmit = async (e) => {
//     e.preventDefault();

//     let obj = {
//       name: nameRef.current.value,
//       status:true,
//     };

//     let res = await fetch('http://localhost:8080/api/unit/create', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(obj),
//     });

//     let data = await res.json();

//     if (onUnitCreated) {
//       onUnitCreated(data);
//       // navigate('/unit')
//     }

//     setClicked(false);
// } 

//   return (
//     <div>
       
       
//       <div
//         className="card border-primary col-11 "
//         style={{ marginLeft: '100px', marginTop: '50px' }}
//       >
//         <div className="card-header">
//           <h5 className="card-title">CREATE NEW UNIT LIST</h5>
//           <div
//             style={{ marginLeft: '600px' }}
//             className="btn-group"
//             role="group"
//             aria-label="Basic outlined example"
//           >
//             <button type="button" className="btn btn-outline-primary">
//               <Link to="/unit">Unit list</Link>
//             </button>
//             <button type="button" className="btn btn-outline-primary">
//               Create New Unit
//             </button>
//           </div>
//         </div>
//         <div className="card-body ">
//           <div className="container">
//             <form>
//               <div className="input-wrapper">
//                 <label htmlFor="first">Unit Name</label>
//                 <input ref={nameRef} type="text" />
//               </div>

//               <div style={{ padding: '10px' }}>
//                 <button
//                   onClick={handleUnitSubmit}
//                   style={{ width: '150px', marginRight: '5px' }}
//                   type="button"
//                   className="btn btn-primary btn-lg"
//                 >
//                   Save
//                 </button>
//                 <button
//                   style={{ width: '150px', marginRight: '5px' }}
//                   type="button"
//                   className="btn btn-outline-secondary btn-lg"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
      
    
//     </div>
//   )
// }

// export default CreateUnitt

import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './createunit.scss';

const CreateUnit = ({ onUnitCreated }) => {
  const [unit, setUnit] = useState(null);
  const nameRef = useRef();

  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Fetch the unit by ID if an ID is provided
      const fetchUnitList = async () => {
        try {
          let response = await fetch('http://localhost:8080/api/unit/getAllUnit');
          let data = await response.json();
          const foundUnit = data.allList.find((item) => item._id === id);
          setUnit(foundUnit);

          if (foundUnit) {
            // Pre-fill the form fields with the fetched data
            nameRef.current.value = foundUnit.name;
          }
        } catch (error) {
          console.error('Error fetching unit:', error);
        }
      };

      fetchUnitList();
    }
  }, [id]);

  const handleUnitSubmit = async (e) => {
    e.preventDefault();

    let obj = {
      name: nameRef.current.value,
    };

    let url = id
      ? `http://localhost:8080/api/unit/edit/${id}`
      : 'http://localhost:8080/api/unit/create';

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
        navigate('/unit'); // Navigate back to the unit list
      } else {
        console.error('Error saving unit:', res.statusText);
      }
    } catch (error) {
      console.error('Error saving unit:', error);
    }
  };

  return (
    <div>
      <div className="card border-primary col-11 " style={{ marginLeft: '50px', marginTop: '50px' }}>
        <div className="card-header">
          <h5 className="card-title">{id ? 'EDIT UNIT' : 'CREATE NEW UNIT LIST'}</h5>
          <div style={{ marginLeft: '600px' }} className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-primary">
              <Link to="/unit">Unit list</Link>
            </button>
            <button type="button" className="btn btn-outline-primary">
              Create New Unit
            </button>
          </div>
        </div>
        <div className="card-body ">
          <div className="container">
            <form onSubmit={handleUnitSubmit}>
              <div className="input-wrapper">
                <label htmlFor="first">Unit Name</label>
                <input ref={nameRef} type="text" className="form-control" placeholder="Name" />
              </div>

              <div style={{ padding: '10px' }}>
                <button
                  style={{ width: '150px', marginRight: '5px' }}
                  type="button"
                  className="btn btn-outline-secondary btn-lg"
                  onClick={() => navigate('/unit')}
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
    </div>
  );
};

export default CreateUnit;
