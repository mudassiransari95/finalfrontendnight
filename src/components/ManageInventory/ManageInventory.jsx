import React from 'react'
import { Link } from "react-router-dom";
import "./inventory.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ManageInventory = () => {

    const data = [
        {
          id: 1,
          name: 'PESO',
          status: <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
</div>
,
          action: <MoreVertIcon/>,
         
        }
        
      ];

    //   const handleDelete = (id) => {
    //     const confirmUrl = `https://newpos.7yug.com/delivery/delete/${id}`;
    //     if (window.confirm('Are you sure you want to delete this item?')) {
         
    //       console.log(`Deleting item with ID ${id}`);
    //     }
    //   };

  return (
    <div >  

<div className="row" >
        <div style={{marginLeft:"50px",marginTop:"100px"}} className="col-11">
          <div className="card">
            <div className="card-content">
              <div className="card-body titleHead">
                <h4 className="card-title">
                  UNIT LIST 
                  
                </h4>
                
                <div id='groupBtn' class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary">Unit list</button>
  <button type="button" class="btn btn-outline-primary">Create list</button>
 
</div>
              </div>
        <div className="table-responsive">
          <table className="table mb-0">
            <thead>
              <tr>
                <th>SL.</th>
                <th>Name</th>
                <th>Status</th>
                <th>Action</th>
                
                
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.status}</td>
                  <td>{item.action}</td>
                  {/* <td>{item.perDeliveryCharge}</td> */}
                  
                
               
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
          </div>
        </div>
      </div>

       {/* <table id='tablecss' className="table">
  <thead>
    <tr>
      <th scope="col">Sno.</th>
      <th scope="col">Name</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <hr />
  <tbody style={{backgroundColor:"white"}}>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  
  </tbody>
</table> */}


      
    </div>
  )
}

export default ManageInventory
