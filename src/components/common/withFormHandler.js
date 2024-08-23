import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const withFormHandler = (WrappedComponent, { fetchUrl, createUrl, updateUrl }) => {
  return (props) => {
    const [item, setItem] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
      if (id) {
        const fetchItem = async () => {
          try {
            const response = await fetch(fetchUrl);
            const data = await response.json();
            const foundItem = data.allList.find((i) => i._id === id);
            setItem(foundItem);
          } catch (error) {
            console.error('Error fetching item:', error);
          }
        };

        fetchItem();
      }
    }, [id, fetchUrl]);

    const handleSubmit = async (e, formData) => {
      e.preventDefault();

      const url = id ? `${updateUrl}/${id}` : createUrl;
      const method = id ? 'PUT' : 'POST';

      try {
        const res = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          navigate(id ? `/units/${id}` : '/units');
        } else {
          console.error('Error saving item:', res.statusText);
        }
      } catch (error) {
        console.error('Error saving item:', error);
      }
    };

    return <WrappedComponent {...props} item={item} handleSubmit={handleSubmit} />;
  };
};

export default withFormHandler;
