import React from 'react';
import { message } from 'antd';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import DynamicList from '../common/DynamicList';

const ProductionList = () => {
  const apiEndpoint = 'http://localhost:8080/user/prod/getAllProduction';

  const tableFields = [
    { label: 'Name', key: 'name' },
    { label: 'Phone', key: 'phone' },
    { label: 'Username', key: 'userName' },
    
    { 
      label: 'Status', 
      key: 'status',
      render: (item) => (
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            defaultChecked={true}
          />
        </div>
      ),
    }
  ];

  const onEdit = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/user/prod/update/${id}`, {
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
      const response = await fetch(`http://localhost:8080/user/prod/delete/${id}`, {
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
                <h4 className="card-title">PRODUCTION LIST</h4>
                <div
                  style={{ flexDirection: 'row', alignItems: 'baseline' }}
                  id="groupBtn"
                  className="btn-group"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button type="button" className="btn btn-outline-primary">
                    <Link to="/productionlist">Production list</Link>
                  </button>
                  <button type="button" className="btn btn-outline-primary">
                    <Link to="/addproduction">Add New Production</Link>
                  </button>
                </div>
              </div>
              <hr />
              <div style={{ display: 'flex' }}>
                <div style={{ marginLeft: '10px', alignSelf: 'center' }} className="dropdown mx-4">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
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
                navigateTo={"addproduction"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionList;
