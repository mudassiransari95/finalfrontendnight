import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Createaddsupplier = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    PartyName: '',
    PartyEmail: '',
    Phone: '',
    Password: '',
    Address: '',
    BalanceType: '',
    OpeningBalance: '',
    Country: '',
    Remarks: '',
    Image: ''
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitData = async () => {
    const res = await fetch('http://localhost:8080/api/createsupplier', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await res.json();
    console.log('Supplier data:', resData);
    navigate('/suppliers');
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-xl font-bold">Add Supplier</h4>
        <div className="flex space-x-3">
          <Link to="/suppliers" className="px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800">
            Supplier List
          </Link>
          <Link to="/addnewsupplierone" className="px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800">
            Add New Supplier
          </Link>
        </div>
      </div>
      <hr className="mb-6 border-gray-400" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First Column */}
        <div className="space-y-4">
          <input
            onChange={handleOnChange}
            name="PartyName"
            value={data.PartyName}
            type="text"
            placeholder="Enter Party Name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
          />
          <select
            onChange={handleOnChange}
            name="Country"
            value={data.Country}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="America">America</option>
            <option value="Italy">Italy</option>
            <option value="Russia">Russia</option>
          </select>
          <input
            onChange={handleOnChange}
            name="Address"
            value={data.Address}
            type="text"
            placeholder="Enter Address"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
          />
          <input
            onChange={handleOnChange}
            name="OpeningBalance"
            value={data.OpeningBalance}
            type="number"
            placeholder="Enter Opening Balance"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
          />
          <input
            onChange={handleOnChange}
            name="Remarks"
            value={data.Remarks}
            type="text"
            placeholder="Enter Remarks"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
          />
        </div>

        {/* Second Column */}
        <div className="space-y-4">
          <input
            onChange={handleOnChange}
            name="PartyEmail"
            value={data.PartyEmail}
            type="email"
            placeholder="Enter Party Email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
          />
          <input
            onChange={handleOnChange}
            name="Phone"
            value={data.Phone}
            type="number"
            placeholder="Enter Phone Number"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
          />
          <input
            onChange={handleOnChange}
            name="Password"
            value={data.Password}
            type="password"
            placeholder="Enter Password"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
          />
          <select
            onChange={handleOnChange}
            name="BalanceType"
            value={data.BalanceType}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
          >
            <option value="">Select Opening Balance Type</option>
            <option value="Advance Payment">Advance Payment</option>
            <option value="Due Bill">Due Bill</option>
          </select>
        </div>

        {/* Third Column */}
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-36 h-36">
            <img
              className="w-full h-full rounded-full object-cover"
              src="https://erpsoftware.acnoo.com/assets/images/profile/avatar.jpg"
              alt="Avatar"
            />
            <FaCamera className="absolute bottom-0 right-0 text-xl text-gray-600 bg-white rounded-full p-2" />
          </div>
          <p className="text-gray-600">Upload Image</p>
        </div>
      </div>

      <div className="mt-8 flex justify-center space-x-4">
        <button
          className="w-48 h-11 bg-white border border-black rounded-md hover:bg-gray-100"
          onClick={() => setData({
            PartyName: '',
            PartyEmail: '',
            Phone: '',
            Password: '',
            Address: '',
            BalanceType: '',
            OpeningBalance: '',
            Country: '',
            Remarks: '',
            Image: ''
          })}
        >
          Reset
        </button>
        <button
          onClick={handleSubmitData}
          className="w-48 h-11 bg-purple-500 text-white rounded-md hover:bg-purple-600"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Createaddsupplier;
