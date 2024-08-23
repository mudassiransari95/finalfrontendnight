import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { message } from 'antd';

const CommonEditComponent = ({ getApiEndpoint, updateApiEndpoint, fields, redirectPath, onItemSaved }) => {
  const [itemData, setItemData] = useState({});
  const refs = useRef({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the item data based on the ID
    const fetchData = async () => {
      try {
        const response = await fetch(`${getApiEndpoint}`);
        const data = await response.json();
        const foundItem = data.allList.find((item) => item._id === id);

        setItemData(foundItem);

        // Pre-fill the form fields
        if (foundItem) {
          fields.forEach(field => {
            refs.current[field.key].current.value = foundItem[field.key] || '';
          });
        }
      } catch (error) {
        message.error('Error fetching data');
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [getApiEndpoint, id, fields]);

  const handleSave = async (e) => {
    e.preventDefault();
    const updatedData = fields.reduce((acc, field) => {
      acc[field.key] = refs.current[field.key].current.value;
      return acc;
    }, {});

    const method = id ? 'PUT' : 'POST';
    const url = id ? `${updateApiEndpoint}/${id}` : updateApiEndpoint;

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        message.success('Item saved successfully');
        if (onItemSaved) onItemSaved();
        navigate(redirectPath);
      } else {
        message.error('Error saving item');
        console.error('Error saving item:', response.statusText);
      }
    } catch (error) {
      message.error('Error occurred while saving item');
      console.error('Error occurred while saving item:', error);
    }
  };

  return (
    <div className="card-body">
      <form onSubmit={handleSave}>
        {fields.map((field) => (
          <div key={field.key} className="input-wrapper">
            <label>{field.label}</label>
            <input
              ref={(el) => refs.current[field.key] = el}
              type="text"
              className="form-control"
              placeholder={field.label}
            />
          </div>
        ))}
        <div style={{padding:"10px", marginLeft:"300px",marginTop:"10px"}}>
          <button type="button" className="btn btn-outline-secondary btn-lg" onClick={() => navigate(redirectPath)}>Cancel</button>
          <button type="submit" className="btn btn-primary btn-lg">Save</button>
        </div>
      </form>
    </div>
  );
};

export default CommonEditComponent;
