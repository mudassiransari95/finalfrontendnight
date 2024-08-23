
import React, { useEffect, useState } from 'react'
import createcontext from './CreateStore';

const Context = (props) => {
  const [accountant, setaccountant] = useState(false);
  const [production, setproduction] = useState(false);
  const [marchendiser, setmarchendiser] = useState(false);
  const [superadmin, setsuperadmin] = useState(false);
  const [admin, setadmin] = useState(false);
  const [superadminid, setsuperadminid] = useState('');
  const [error, setError] = useState(null); // State to track errors

  const SuperAdminData = async () => {
    try {
      const res = await fetch('http://localhost:8080/api/adminprofile');

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log('SuperAdmin ID:', data.data[0]._id);
      setsuperadminid(data.data[0]._id); // Update the state with the correct value

    } catch (error) {
      console.error('Error fetching SuperAdmin data:', error);
      setError(error.message); // Update the error state
    }
  }

  useEffect(() => {
    SuperAdminData();
  }, []);

  return (
    <createcontext.Provider value={{ SuperAdminData, superadminid,superadmin,setsuperadmin,setadmin,admin,setmarchendiser,marchendiser,accountant, setaccountant,production, setproduction}}>
      {props.children}
     
    </createcontext.Provider>
  );
}

export default Context;
