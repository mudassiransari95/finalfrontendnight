import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import { message } from 'antd';
import DynamicList from '../common/DynamicList'; 



const CommercialList = () => {
    // const data = [
    //     {
    //       id: 1,
    //       name: 'rr',
    //       phone:'PESO',
    //       userName:'$12.00',
    //       action: <MoreVertIcon/>,
    //      }]

    const apiEndpoint = 'http://localhost:8080/user/comm/getAllComm';

    const tableFields = [
      { label: 'Name', key: 'name' },
      { label: 'Phone', key: 'phone' },
      { label: 'User Name', key: 'userName' },
      
    ];
  
    const onEdit = async (id) => {
      try {
        let response = await fetch(`http://localhost:8080/user/comm/update/${id}`, {
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
        let response = await fetch(`http://localhost:8080/user/comm/delete/${id}`, {
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
      {/* <div className="row" >
        <div style={{marginLeft:"50px",marginTop:"100px"}} className="col-11">
          <div className="card">
            <div className="card-content">
             
                    <div style={{display:"flex"}} className="card-body titleHead">
                <h4  className="card-title">
                COMMERCIAL LIST                  
                </h4>
                <div style={{flexDirection: "row",
    alignItems: "baseline"}} id='groupBtn' class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary"><Link to="/commercial">Commercial list</Link></button>
  <button type="button" class="btn btn-outline-primary"><Link to="/addComm">Add New Commercial</Link></button>
 
</div>
              </div>
              <hr />
              <div style={{display:"flex"}}>
              <div style={{marginLeft:"10px",alignSelf:"center"}} class="dropdown mx-4">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    All result
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<div>
  <input type="text" class="form-control" placeholder="search"/>
</div>
              </div>
        <div className="table-responsive">
          <table className="table mb-0">
            <thead>
              <tr>
                <th>SL.</th>
                <th>Name</th>
                <th>Phone</th>
                <th>User Name</th>
                <th>Action</th>
                
                
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.userName}</td>
                  <td>{item.action}</td>
              
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
          </div>
        </div>
      </div> */}
    
    <div className="row">
        <div style={{ marginLeft: '50px', marginTop: '100px' }} className="col-11">
          <div className="card">
            <div className="card-content">
              <div style={{ display: 'flex' }} className="card-body titleHead">
                <h4 className="card-title">COMMERCIAL LIST</h4>
                <div
                  style={{ flexDirection: 'row', alignItems: 'baseline' }}
                  id="groupBtn"
                  className="btn-group"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button type="button" className="btn btn-outline-primary">
                    <Link to="/commercial">Commercial list</Link>
                  </button>
                  <button type="button" className="btn btn-outline-primary">
                    <Link to="/addComm">Add New Commercial</Link>
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
                navigateTo={"addComm"}
              />
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default CommercialList
