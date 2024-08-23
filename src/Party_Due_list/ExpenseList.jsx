import React, { useState } from 'react'
import { message } from "antd";
// import DynamicList from '../common/DynamicList';
import { Link } from "react-router-dom";
import DynamicList from "../components/common/DynamicList";

const ExpenseList = () => {

    const apiEndpoint = 'http://localhost:8080/acc/exp/getAllExpense';

    const tableFields = [
      { label: 'Category Name', key: 'categoryName' },
      { label: 'Description', key: 'description' },
      { label: 'Status', key: '' },
      // { label: 'Transaction By', key: 'transactionBy' },
      // { label: 'Party', key: 'selectParty' },
      // { label: 'Payment Type', key: 'paymentType' },
      // { label: 'Payment Method', key: 'payMethod' },
      // { label: 'Amount', key: 'ExpenseAmt' },
    ];
  
    const onEdit = async (id) => {
      try {
        let response = await fetch(`http://localhost:8080/acc/exp/update/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ /* Add your edit data here */ }),
        });
        if (response.ok) {
          message.success('Expense  edited successfully');
        } else {
          message.error('Failed to edit Expense ');
        }
      } catch (error) {
        message.error('Error occurred while editing Expense ');
      }
    };
  
    const onDelete = async (id) => {
      try {
        let response = await fetch(`http://localhost:8080/acc/exp/delete/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          message.success('Expense  deleted successfully');
        } else {
          message.error('Failed to delete Expense ');
        }
      } catch (error) {
        message.error('Error occurred while deleting Expense ');
      }
    };

  return (
    <div>
         <div className="w-full px-3 bg-white pl-4" style={{ height: "100vh" }}>
    <div className="w-auto pt-4 mt-10 h-10 flex flex-row justify-between ">
      <h1 className="fw-bold">Expense list</h1>
      <div className="sub-div w-auto h-10">
        <Link to="/accExpList">
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
            Expense List
          </button>
        </Link>
        <Link className="btn btn-outline-secondary" to="/accAddExpList">
          Create Expense
        </Link>
      </div>
    </div>
    <hr className="bg-red-400 mt-5 w-100 " />

    <div className="form w-100 flex flex-row gap-6 pl-3 mt-20">
      <input
        type="text"
        className="w-80 h-11 font-bold"
        placeholder="Search..."
        style={{ border: "1px solid grey", borderRadius: "10px" }}
      />
    </div>

    <DynamicList
      apiEndpoint={apiEndpoint}
      tableFields={tableFields}
      onEdit={onEdit}
      onDelete={onDelete}
      navigateTo={"accAddExpList"}
    />
  </div>
    </div>
  )
}

export default ExpenseList
