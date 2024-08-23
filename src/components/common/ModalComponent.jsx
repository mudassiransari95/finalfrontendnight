// import React, { useState } from 'react';
// import { Modal, Button } from 'antd';

// const ModalComponent = ({ isOpen, handleCancel, handleOk, type }) => {
//   const [accHolderName, setAccHolderName] = useState('');
//   const [bankName, setBankName] = useState('');
//   const [accNo, setAccNo] = useState('');
//   const [branchName, setBranchName] = useState('');
//   const [routingSwiftNo, setRoutingSwiftNo] = useState('');
//   const [openBalance, setOpenBalance] = useState('');
//   const [bankFrom, setBankFrom] = useState('');
//   const [bankTo, setBankTo] = useState('');
//   const [amount, setAmount] = useState('');
//   const [note, setNote] = useState('');

//   const handleAddNewBank = async () => {
//     const payload = {
//       accHolderName,
//       bankName,
//       accNo,
//       branchName,
//       routingSwiftNo,
//       openBalance,
//     };

//     try {
//       const response = await fetch('http://localhost:8080/acc/bank/create', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Bank added successfully:', data);
//         handleOk(); // Close the modal on success
//       } else {
//         console.error('Failed to add bank:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error adding bank:', error);
//     }
//   };

//   const handleDeposit = async () => {
//     const payload = {
//       bankFrom,
//       bankTo,
//       amount,
//       note,
//     };

//     try {
//       const response = await fetch('http://localhost:8080/acc/bank/deposit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Deposit successful:', data);
//         handleOk(); // Close the modal on success
//       } else {
//         console.error('Failed to process deposit:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error processing deposit:', error);
//     }
//   };

//   return (
//     <Modal
//       open={isOpen}
//       width={"80vw"}
//       title={type === 'add' ? 'Add New Bank' : 'Deposit/Withdraw'}
//       onOk={type === 'add' ? handleAddNewBank : handleDeposit}
//       onCancel={handleCancel}
//       footer={(_, { OkBtn, CancelBtn }) => (
//         <div style={{ textAlign: "center" }}>
//           <CancelBtn />
//           <OkBtn />
//         </div>
//       )}
//     >
//       {type === 'add' ? (
//         <div>
//           <form>
//             <div className="row my-4">
//               <div className="col input-wrapper">
//                 <label htmlFor="accHolderName">Account Holder Name</label>
//                 <input
//                   type="text"
//                   className="form-control input-wrapper"
//                   placeholder="Enter Account Holder Name"
//                   value={accHolderName}
//                   onChange={(e) => setAccHolderName(e.target.value)}
//                 />
//               </div>
//               <div className="col input-wrapper">
//                 <label htmlFor="bankName">Bank Name</label>
//                 <input
//                   type="text"
//                   className="form-control input-wrapper"
//                   placeholder="Enter Bank Name"
//                   value={bankName}
//                   onChange={(e) => setBankName(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div className="row my-4">
//               <div className="col input-wrapper">
//                 <label htmlFor="accNo">Account Number</label>
//                 <input
//                   type="text"
//                   className="form-control input-wrapper"
//                   placeholder="Enter Account Number"
//                   value={accNo}
//                   onChange={(e) => setAccNo(e.target.value)}
//                 />
//               </div>
//               <div className="col input-wrapper">
//                 <label htmlFor="branch">Branch Name</label>
//                 <input
//                   type="text"
//                   className="form-control input-wrapper"
//                   placeholder="Enter Branch Name"
//                   value={branchName}
//                   onChange={(e) => setBranchName(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div className="row my-4">
//               <div className="col input-wrapper">
//                 <label htmlFor="routingNo">Routing/Swift Number</label>
//                 <input
//                   type="text"
//                   className="form-control input-wrapper"
//                   placeholder="Enter routing number"
//                   value={routingSwiftNo}
//                   onChange={(e) => setRoutingSwiftNo(e.target.value)}
//                 />
//               </div>
//               <div className="col input-wrapper">
//                 <label htmlFor="balance">Opening Balance</label>
//                 <input
//                   type="text"
//                   className="form-control input-wrapper"
//                   placeholder="Enter balance"
//                   value={openBalance}
//                   onChange={(e) => setOpenBalance(e.target.value)}
//                 />
//               </div>
//             </div>
//           </form>
//         </div>
//       ) : (
//         <div>
//           <form>
//             <div className="row my-4">
//               <div className="col input-wrapper">
//                 <label htmlFor="transferType">Transfer Type</label>
//                 <input
//                   type="text"
//                   className="form-control input-wrapper"
//                   value="Bank to Bank Transfer"
//                   readOnly
//                 />
//               </div>
//               <div className="col input-wrapper">
//                 <label htmlFor="date">Date</label>
//                 <input
//                   type="text"
//                   className="form-control input-wrapper"
//                   value="18-08-2024"
//                   readOnly
//                 />
//               </div>
//             </div>
//             <div className="row my-4">
//               <div className="col input-wrapper">
//                 <label htmlFor="bankFrom">Bank From</label>
//                 <select
//                   className="form-control"
//                   value={bankFrom}
//                   onChange={(e) => setBankFrom(e.target.value)}
//                 >
//                   <option value="">-Select Bank-</option>
//                   <option value="bank1">Bank 1</option>
//                   <option value="bank2">Bank 2</option>
//                 </select>
//               </div>
//               <div className="col input-wrapper">
//                 <label htmlFor="bankTo">Bank To</label>
//                 <select
//                   className="form-control"
//                   value={bankTo}
//                   onChange={(e) => setBankTo(e.target.value)}
//                 >
//                   <option value="">-Select Bank-</option>
//                   <option value="bank1">Bank 1</option>
//                   <option value="bank2">Bank 2</option>
//                 </select>
//               </div>
//             </div>
//             <div className="row my-4">
//               <div className="col-md-6 input-wrapper">
//                 <label htmlFor="amount">Amount</label>
//                 <input
//                   type="text"
//                   className="form-control input-wrapper"
//                   placeholder="$5000"
//                   value={amount}
//                   onChange={(e) => setAmount(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div className="row my-4">
//               <div className="col input-wrapper">
//                 <label htmlFor="note">Note</label>
//                 <textarea
//                   className="form-control input-wrapper"
//                   placeholder="Enter note here..."
//                   value={note}
//                   onChange={(e) => setNote(e.target.value)}
//                 />
//               </div>
//             </div>
//           </form>
//         </div>
//       )}
//     </Modal>
//   );
// };

// export default ModalComponent;
// import React, { useState } from 'react';
// import { Modal, Button } from 'antd';

// const ModalComponent = ({ isOpen, handleCancel, handleOk, type }) => {
//   const [accHolderName, setAccHolderName] = useState('');
//   const [bankName, setBankName] = useState('');
//   const [accNo, setAccNo] = useState('');
//   const [branchName, setBranchName] = useState('');
//   const [routingSwiftNo, setRoutingSwiftNo] = useState('');
//   const [openBalance, setOpenBalance] = useState('');
//   const [bankFrom, setBankFrom] = useState('');
//   const [bankTo, setBankTo] = useState('');
//   const [amount, setAmount] = useState('');
//   const [note, setNote] = useState('');

//   const handleAddNewBank = async () => {
//     const payload = {
//       accHolderName,
//       bankName,
//       accNo,
//       branchName,
//       routingSwiftNo,
//       openBalance,
//     };

//     try {
//       const response = await fetch('http://localhost:8080/acc/bank/create', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Bank added successfully:', data);
//         handleOk(); // Close the modal on success
//       } else {
//         console.error('Failed to add bank:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error adding bank:', error);
//     }
//   };

//   const handleDeposit = async () => {
//     const payload = {
//       bankFrom,
//       bankTo,
//       amount,
//       note,
//     };

//     try {
//       const response = await fetch('http://localhost:8080/acc/bank/deposit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Deposit successful:', data);
//         handleOk(); // Close the modal on success
//       } else {
//         console.error('Failed to process deposit:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error processing deposit:', error);
//     }
//   };

//   return (
//     <Modal
//       open={isOpen}
//       width={"80vw"}
//       title={type === 'add' ? 'Add New Bank' : 'Deposit/Withdraw'}
//       onOk={type === 'add' ? handleAddNewBank : handleDeposit}
//       onCancel={handleCancel}
//       footer={(_, { OkBtn, CancelBtn }) => (
//         <div style={{ textAlign: "center" }}>
//           <CancelBtn />
//           <OkBtn />
//         </div>
//       )}
//     >
//       {type === 'add' ? (
//         <div>
//           <form>
//             <div className="row my-4">
//               <div className="col input-wrapper">
//                 <label htmlFor="accHolderName">Account Holder Name</label>
//                 <input
//                   type="text"
//                   className="form-control input-wrapper"
//                   placeholder="Enter Account Holder Name"
//                   value={accHolderName}
//                   onChange={(e) => setAccHolderName(e.target.value)}
//                 />
//               </div>
//               <div className="col input-wrapper">
//                 <label htmlFor="bankName">Bank Name</label>
//                 <input
//                   type="text"
//                   className="form-control input-wrapper"
//                   placeholder="Enter Bank Name"
//                   value={bankName}
//                   onChange={(e) => setBankName(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div className="row my-4">
//               <div className="col input-wrapper">
//                 <label htmlFor="accNo">Account Number</label>
//                 <input
//                   type="text"
//                   className="form-control input-wrapper"
//                   placeholder="Enter Account Number"
//                   value={accNo}
//                   onChange={(e) => setAccNo(e.target.value)}
//                 />
//               </div>
//               <div className="col input-wrapper">
//                 <label htmlFor="branch">Branch Name</label>
//                 <input
//                   type="text"
//                   className="form-control input-wrapper"
//                   placeholder="Enter Branch Name"
//                   value={branchName}
//                   onChange={(e) => setBranchName(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div className="row my-4">
//               <div className="col input-wrapper">
//                 <label htmlFor="routingNo">Routing/Swift Number</label>
//                 <input
//                   type="text"
//                   className="form-control input-wrapper"
//                   placeholder="Enter routing number"
//                   value={routingSwiftNo}
//                   onChange={(e) => setRoutingSwiftNo(e.target.value)}
//                 />
//               </div>
//               <div className="col input-wrapper">
//                 <label htmlFor="balance">Opening Balance</label>
//                 <input
//                   type="text"
//                   className="form-control input-wrapper"
//                   placeholder="Enter balance"
//                   value={openBalance}
//                   onChange={(e) => setOpenBalance(e.target.value)}
//                 />
//               </div>
//             </div>
//           </form>
//         </div>
//       ) : (
//         <div>
//           <form>
//             <div className="row my-4">
//               <div className="col input-wrapper">
//                 <label htmlFor="transferType">Transfer Type</label>
//                 <input
//                   type="text"
//                   className="form-control input-wrapper"
//                   value="Bank to Bank Transfer"
//                   readOnly
//                 />
//               </div>
//               <div className="col input-wrapper">
//                 <label htmlFor="date">Date</label>
//                 <input
//                   type="text"
//                   className="form-control input-wrapper"
//                   value="18-08-2024"
//                   readOnly
//                 />
//               </div>
//             </div>
//             <div className="row my-4">
//               <div className="col input-wrapper">
//                 <label htmlFor="bankFrom">Bank From</label>
//                 <select
//                   className="form-control"
//                   value={bankFrom}
//                   onChange={(e) => setBankFrom(e.target.value)}
//                 >
//                   <option value="">-Select Bank-</option>
//                   <option value="bank1">Bank 1</option>
//                   <option value="bank2">Bank 2</option>
//                 </select>
//               </div>
//               <div className="col input-wrapper">
//                 <label htmlFor="bankTo">Bank To</label>
//                 <select
//                   className="form-control"
//                   value={bankTo}
//                   onChange={(e) => setBankTo(e.target.value)}
//                 >
//                   <option value="">-Select Bank-</option>
//                   <option value="bank1">Bank 1</option>
//                   <option value="bank2">Bank 2</option>
//                 </select>
//               </div>
//             </div>
//             <div className="row my-4">
//               <div className="col-md-6 input-wrapper">
//                 <label htmlFor="amount">Amount</label>
//                 <input
//                   type="text"
//                   className="form-control input-wrapper"
//                   placeholder="$5000"
//                   value={amount}
//                   onChange={(e) => setAmount(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div className="row my-4">
//               <div className="col input-wrapper">
//                 <label htmlFor="note">Note</label>
//                 <textarea
//                   className="form-control input-wrapper"
//                   placeholder="Enter note here..."
//                   value={note}
//                   onChange={(e) => setNote(e.target.value)}
//                 />
//               </div>
//             </div>
//           </form>
//         </div>
//       )}
//     </Modal>
//   );
// };

// export default ModalComponent;
import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'antd';

const ModalComponent = ({ isOpen, handleCancel, handleOk, type, selectedAccount }) => {
  const [accHolderName, setAccHolderName] = useState('');
  const [bankName, setBankName] = useState('');
  const [accNo, setAccNo] = useState('');
  const [branchName, setBranchName] = useState('');
  const [routingSwiftNo, setRoutingSwiftNo] = useState('');
  const [openBalance, setOpenBalance] = useState('');

  useEffect(() => {
    if (type === 'edit' && selectedAccount) {
      setAccHolderName(selectedAccount.accHolderName);
      setBankName(selectedAccount.bankName);
      setAccNo(selectedAccount.accNo);
      setBranchName(selectedAccount.branch);
      setRoutingSwiftNo(selectedAccount.routingSwiftNo);
      setOpenBalance(selectedAccount.amount); // Assuming amount is the opening balance
    }
  }, [type, selectedAccount]);

  const handleSave = async () => {
    const payload = {
      accHolderName,
      bankName,
      accNo,
      branchName,
      routingSwiftNo,
      openBalance,
    };

    try {
      const response = await fetch(
        type === 'add'
          ? 'http://localhost:8080/acc/bank/create'
          : `http://localhost:8080/acc/bank/update/${selectedAccount._id}`,
        {
          method: type === 'add' ? 'POST' : 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(`${type === 'add' ? 'Bank added' : 'Bank updated'} successfully:`, data);
        handleOk(); // Close the modal on success
      } else {
        console.error('Failed to save bank:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving bank:', error);
    }
  };

  return (
    <Modal
      open={isOpen}
      width={"80vw"}
      title={type === 'add' ? 'Add New Bank' : 'Edit Bank'}
      onOk={handleSave}
      onCancel={handleCancel}
      footer={(_, { OkBtn, CancelBtn }) => (
        <div style={{ textAlign: "center" }}>
          <CancelBtn />
          <OkBtn />
        </div>
      )}
    >
      <div>
        <form>
          <div className="row my-4">
            <div className="col input-wrapper">
              <label htmlFor="accHolderName">Account Holder Name</label>
              <input
                type="text"
                className="form-control input-wrapper"
                placeholder="Enter Account Holder Name"
                value={accHolderName}
                onChange={(e) => setAccHolderName(e.target.value)}
              />
            </div>
            <div className="col input-wrapper">
              <label htmlFor="bankName">Bank Name</label>
              <input
                type="text"
                className="form-control input-wrapper"
                placeholder="Enter Bank Name"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
            </div>
          </div>
          <div className="row my-4">
            <div className="col input-wrapper">
              <label htmlFor="accNo">Account Number</label>
              <input
                type="text"
                className="form-control input-wrapper"
                placeholder="Enter Account Number"
                value={accNo}
                onChange={(e) => setAccNo(e.target.value)}
              />
            </div>
            <div className="col input-wrapper">
              <label htmlFor="branch">Branch Name</label>
              <input
                type="text"
                className="form-control input-wrapper"
                placeholder="Enter Branch Name"
                value={branchName}
                onChange={(e) => setBranchName(e.target.value)}
              />
            </div>
          </div>
          <div className="row my-4">
            <div className="col input-wrapper">
              <label htmlFor="routingNo">Routing/Swift Number</label>
              <input
                type="text"
                className="form-control input-wrapper"
                placeholder="Enter routing number"
                value={routingSwiftNo}
                onChange={(e) => setRoutingSwiftNo(e.target.value)}
              />
            </div>
            <div className="col input-wrapper">
              <label htmlFor="balance">Opening Balance</label>
              <input
                type="text"
                className="form-control input-wrapper"
                placeholder="Enter balance"
                value={openBalance}
                onChange={(e) => setOpenBalance(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalComponent;
