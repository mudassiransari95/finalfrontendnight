import React from 'react';
import { message } from 'antd';
import DynamicList from '../common/DynamicList'; 
import { Link } from 'react-router-dom';

const AccessoryList = () => {
  const apiEndpoint = 'http://localhost:8080/inv/accList/getAllAccessory';

  const tableFields = [
    { label: 'Name', key: 'name' },
    { label: 'Unit', key: 'unit' },
    { label: 'Price', key: 'price' },
    { label: 'Description', key: 'description' },
    {
      label: 'Status',
      key: 'status',
      render: (status) => (
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" checked={status} />
        </div>
      ),
    },
  ];

  const onEdit = async (id) => {
    try {
      let response = await fetch(`http://localhost:8080/inv/accList/update/${id}`, {
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
      console.log(id)
      let response = await fetch(`http://localhost:8080/inv/accList/delete/${id}`, {
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
                <h4 className="card-title">ACCESSORY LIST</h4>
                <div
                  style={{ flexDirection: 'row', alignItems: 'baseline' }}
                  id="groupBtn"
                  className="btn-group"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button type="button" className="btn btn-outline-primary">Accessory list</button>
                  <button type="button" className="btn btn-outline-primary">
                    <Link to="/createAccess">Add New Accessory</Link>
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
                navigateTo={"createAccess"}
            />
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoryList;
