// import React from 'react'
// // import React from 'react'
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { Link } from 'react-router-dom';

// const AccorderList = () => {
//     const data = [
//         {
//           id: 1,
//           invoice: 'rr',
//           partyName:'PESO',
//           acc:'$12.00',
//           unit:'silk',
//           qty:'$12.00',
//           price:'$12.00',
//           ttl: "$"+"",
//           action: <MoreVertIcon/>,
//          }]
//   return (
//     <div>
//       <div className="row">
//         <div style={{ marginLeft: '50px', marginTop: '100px' }} className="col-11">
//           <div className="card">
//             <div className="card-content">
//               <div style={{ display: 'flex' }} className="card-body titleHead">
//                 <h4 className="card-title">ACCESSORY LIST</h4>
//                 <div
//                   style={{ flexDirection: 'row', alignItems: 'baseline' }}
//                   id="groupBtn"
//                   className="btn-group"
//                   role="group"
//                   aria-label="Basic outlined example"
//                 >
//                   <button type="button" className="btn btn-outline-primary">Accessory Order list</button>
//                   <button type="button" className="btn btn-outline-primary">
//                     <Link to="/createAccorder">Add New Accessory Order</Link>
//                   </button>
//                 </div>
//               </div>
//               <hr />
//               <div style={{ display: 'flex' }}>
//                 <div style={{ marginLeft: '10px', alignSelf: 'center' }} className="dropdown mx-4">
//                   <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     All result
//                   </button>
//                   <ul className="dropdown-menu">
//                     <li><a className="dropdown-item" href="#">Action</a></li>
//                     <li><a className="dropdown-item" href="#">Another action</a></li>
//                     <li><a className="dropdown-item" href="#">Something else here</a></li>
//                   </ul>
//                 </div>
//                 <div>
//                   <input type="text" className="form-control" placeholder="search" />
//                 </div>
//               </div>   
               
//               </div>
//         <div className="table-responsive">
//           <table className="table mb-0">
//             <thead>
//               <tr>
//                 <th>SL.</th>
//                 <th>Invoice</th>
//                 <th>Party name</th>
//                 <th>Accessories</th>
//                 <th>Unit</th>
//                 <th>QTY</th>
//                 <th>Unit Price</th>
//                 <th>TTL Amount</th>
//                 <th>Action</th>
                
                
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((item) => (
//                 <tr key={item.id}>
//                   <td>{item.id}</td>
//                   <td>{item.invoice}</td>
//                   <td>{item.partyName}</td>
//                   <td>{item.acc}</td>
//                   <td>{item.unit}</td>
//                   <td>{item.qty}</td>
//                   <td>{item.price}</td>
//                   <td>{item.ttl}</td>
//                   <td>{item.action}</td>
//                   {/* <td>{item.perDeliveryCharge}</td> */}
                  
                
               
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         </div> 
//           </div>
//         </div>
//       </div>
    
//   )
// }

// export default AccorderList
import React from 'react';
import { message } from 'antd';
import DynamicList from '../common/DynamicList'; 
import { Link } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const AccorderList = () => {
  const apiEndpoint = 'http://localhost:8080/inv/accOrderList/getAllAccOrder';

  const tableFields = [
    { label: 'Invoice', key: 'invoice' },
    { label: 'Party name', key: 'partyName' },
    { label: 'Accessories', key: 'accessories' },
    { label: 'Unit', key: 'unit' },
    { label: 'QTY', key: 'qty' },
    { label: 'Unit Price', key: 'unitPrice' },
    { label: 'TTL Amount', key: 'ttl' },
   
  ];

  const onEdit = async (id) => {
    try {
      let response = await fetch(`http://localhost:8080/inv/accOrderList/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ /* Add your edit data here */ }),
      });
      if (response.ok) {
        message.success('Item edited successfully');
      } else {
        message.error('Failed to edit item');
      }
    } catch (error) {
      message.error('Error occurred while editing item');
    }
  }; 

  const onDelete = async (id) => {
    try {
      let response = await fetch(`http://localhost:8080/inv/accOrderList/delete/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        message.success('Item deleted successfully');
      } else {
        message.error('Failed to delete item');
      }
    } catch (error) {
      message.error('Error occurred while deleting item');
    }
  };

  return (
    <div>
      <div className="row">
        <div style={{ marginLeft: '50px', marginTop: '100px' }} className="col-11">
          <div className="card">
            <div className="card-content">
              <div style={{ display: 'flex' }} className="card-body titleHead">
                <h4 className="card-title">ACCESSORY ORDER LIST</h4>
                <div
                  style={{ flexDirection: 'row', alignItems: 'baseline' }}
                  id="groupBtn"
                  className="btn-group"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button type="button" className="btn btn-outline-primary">Accessory Order list</button>
                  <button type="button" className="btn btn-outline-primary">
                    <Link to="/createAccorder">Add New Accessory Order</Link>
                  </button>
                </div>
              </div>
              <hr />
              <div style={{ display: 'flex' }}>
                <div style={{ marginLeft: '10px', alignSelf: 'center' }} className="dropdown mx-4">
                  <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    All result
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
                <div>
                  <input type="text" className="form-control" placeholder="search" />
                </div>
              </div>
              <DynamicList
                apiEndpoint={apiEndpoint}
                tableFields={tableFields}
                onEdit={onEdit}
                onDelete={onDelete}
                navigateTo={"createAccorder"}
              />
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccorderList;
