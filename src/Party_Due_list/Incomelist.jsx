import React, { useRef, useState } from 'react'
import { message } from "antd";
// import DynamicList from '../common/DynamicList';
import { Link } from "react-router-dom";
import DynamicList from "../components/common/DynamicList";
import OnOffButton from "../../src/OnOffbutton";
import ToggleButton from '../../src/OnOffbutton';


const Incomelist = () => {
  






  const apiEndpoint = 'http://localhost:8080/acc/inc/getAllIncome';

  const tableFields = [
    { label: 'Category Name', key: 'categoryName' },
    { label: 'Description', key: 'description' },
    { label: 'Status', key: ToggleButton },
    // { label: 'Transaction By', key: 'transactionBy' },
    // { label: 'Party', key: 'selectParty' },
    // { label: 'Payment Type', key: 'paymentType' },
    // { label: 'Payment Method', key: 'payMethod' },
    // { label: 'Amount', key: 'IncomeAmt' },
  ];

  const onEdit = async (id) => {
    try {
      let response = await fetch(`http://localhost:8080/acc/inc/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ /* Add your edit data here */ }),
      });
      if (response.ok) {
        message.success('Income  edited successfully');
      } else {
        message.error('Failed to edit Income ');
      }
    } catch (error) {
      message.error('Error occurred while editing Income ');
    }
  };

  const onDelete = async (id) => {
    try {
      let response = await fetch(`http://localhost:8080/acc/inc/delete/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        message.success('Income  deleted successfully');
      } else {
        message.error('Failed to delete Income ');
      }
    } catch (error) {
      message.error('Error occurred while deleting Income ');
    }
  };

  return (
    <div className="w-full px-3 bg-white pl-4" style={{ height: "100vh" }}>
    <div className="w-auto pt-4 mt-10 h-10 flex flex-row justify-between ">
      <h1 className="fw-bold">Income list</h1>
      <div className="sub-div w-auto h-10">
        <Link to="/accIncList">
          <button
            className="w-40 h-10 ms-8 bg-purple-500  text-white"
            style={{
              fontWeight: "bold",
              border: "1px solid purple",
              borderTop: "none",
              borderRight: "none",
              borderLeft: "none",
              borderRadius: "10px",
            }}
          >
            Income List
          </button>
        </Link>
        <Link className="btn btn-outline-secondary" to="/accAddIncList">
          Create Income
        </Link>
      </div>
    </div>
    <hr className="bg-red-400 mt-5 w-100 " />


    <DynamicList
      apiEndpoint={apiEndpoint}
      tableFields={tableFields}
      onEdit={onEdit}
      onDelete={onDelete}
      navigateTo={"accAddIncList"}
    />
  </div>
  )
}

export default Incomelist