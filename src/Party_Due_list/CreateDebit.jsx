// import React from 'react'
// import { Link } from 'react-router-dom'

// const Createdebit = () => {
//   return (
//     <div className='w-75 pl-5 mt-4 ' style={{height:"100%"}}>
//          <div className='w-auto mt-3 h-10 flex flex-row justify-between '> 
// <h1 className='fw-bold'>Create Voucher</h1>
// <div className='sub-div w-96 h-10'>
// <button className='w-28  text-white ms-3 h-10 bg-purple-700 ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Credit List</button>
// <Link to='/debitlist' className='w-40 h-10 ms-8 ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Debit  Voucher</Link>

// </div>
//       </div>
//       <hr className='bg-slate-700  w-100 mt-3'/>

//         {/* main div */}
//         <div className='w-auto flex flex-row  mt-4 gap-5'>

// {/* sub-div */}

// <div className='w-auto  h-96 gap-8' >
// <div class="collecion-input flex flex-col gap-10 w-96">
// <div className='w-auto    flex flex-row'>
// <select className="select h-11 w-80 "style={{border:"1px solid  grey" ,outline:"none"}}>
//     <option selected>Select a  Party
//     </option>
//     <option>Others</option>
//     <option >000-B2 (01752220026)</option>
//     <option >NR(4234242342)</option>
//     <option >GB Textiles()</option>
//     <option >COATA()</option>
//     <option >Line-2()</option>
//     <option >Line-1()</option>
//     <option >LC Waikiki()</option>

// </select>
// <div className='w-16 h-11 pl-6 pt-2 text-white bg-purple-900' style={{}}>+</div>
// </div>
// <div className='w-auto    flex flex-row'>
// <select className="select h-11 w-80 "style={{border:"1px solid  grey" }}>
//     <option selected>Select 
//     </option>
//     <option>Debit Voucher No</option>
   
// </select>
// <div className='w-16 h-11 pl-6 pt-2 text-white bg-purple-900' >+</div>
// </div>
// <div className='w-auto h-15   flex flex-row '>
//   <input type='number' placeholder='Debit Voucher No' className='w-80 h-10 '  style={{outline:"none",width:"400px"}}/>
//   </div>
//   <div className='w-auto h-15   flex flex-row ' style={{width:"405px"}}>
//   <input type='text' placeholder='Particular' className=' h-12 '  style={{width:"385px"}}/>
//   </div>

// </div>

// </div>
// {/* second-col */}
// <div className='w-auto h-96 gap-8' >
// <div class="collecion-input flex flex-col gap-10 w-96">
// <div className='w-auto h-12  bg-white   flex flex-row 'style={{border:"1px solid grey"}}>
//     <p className='mt-3 ms-3'>
//     Bill Date

//     </p>
//     {/* <label className='w-60 bg-white ms-5 mt-1 text-gray-400 pt-2' style={{fontSize:"13px"}}>Contact Date</label> */}
//   <input type='date' placeholder='Enter Payment Mode' className='w-48 text-center h-8 ms-3' style={{border:"2px solid white"}} />
//   </div>

// <div className='w-auto    flex flex-row'>
// <select className="select h-11 w-80 "style={{border:"1px solid  grey" }}>
//     <option selected>Select a Payment Method
//     </option>
//     <option>Cash</option>
//     <option >Bank</option>
//     <option >Cheque</option>

   
// </select>
// <div className='w-16 h-11 pl-6 pt-2 text-white bg-purple-900' style={{}}>
//     <Link to='/Createaddbuyer'>+</Link>
// </div>
// </div>

// <div className=' h-17    flex flex-row ' style={{width:"385px"}}>
//   <input type='text' placeholder='Debit Amount' className='h-10 ' style={{width:"410px"}}  />
//   </div>
  
//   <div className=' h-17    flex flex-row ' style={{width:"385px"}}>
//   <input type='text' placeholder='Remark' className='h-10 ' style={{width:"410px"}}  />
//   </div>
// </div>

// </div>

//         </div>

  
// <div className=' w-96 mt-3 flex flex-row gap-3 ms-96  '>
//     <button className=' btn btn-join w-48 h-11 bg-white' style={{borderRadius:"5px",border:"1px solid black"}}>Cancel</button>
//     <button className='w-48 h-11 text-white bg-purple-500' style={{borderRadius:"5px"}}>Save</button>

// </div>

//     </div>
//   )
// }

// export default Createdebit
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Createdebit = () => {
  const [select, setSelect] = useState("");
  const [selectParty, setSelectParty] = useState("");
  const [payMethod, setPayMethod] = useState("");
  const [debitVoucherNo, setDebitVoucherNo] = useState("");
  const [remark, setRemark] = useState("");
  const [billDate, setBillDate] = useState("");
  const [debitAmt, setDebitAmt] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchDebitById = async () => {
        try {
          const response = await fetch(`http://localhost:8080/acc/debit/${id}`);
          const data = await response.json();
          setSelect(data.select);
          setSelectParty(data.selectParty);
          setPayMethod(data.payMethod);
          setDebitVoucherNo(data.debitVoucherNo);
          setRemark(data.remark);
          setBillDate(data.billDate);
          setDebitAmt(data.debitAmt);
        } catch (error) {
          console.error("Error fetching debit:", error);
        }
      };

      fetchDebitById();
    }
  }, [id]);

  const handleDebitSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      select,
      selectParty,
      payMethod,
      debitVoucherNo,
      remark,
      billDate,
      debitAmt,
    };

    const url = id
      ? `http://localhost:8080/acc/debit/update/${id}`
      : "http://localhost:8080/acc/debit/create";

    const method = id ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        navigate("/debitlist"); 
      } else {
        console.error("Error saving debit:", res.statusText);
      }
    } catch (error) {
      console.error("Error saving debit:", error);
    }
  };

  return (
    <div className="w-75 pl-5 mt-4" style={{ height: "100%" }}>
      <div className="w-auto mt-3 h-10 flex flex-row justify-between">
        <h1 className="fw-bold">{id ? "Edit Voucher" : "Create Voucher"}</h1>
        <div className="sub-div w-96 h-10">
          <Link to="/debitlist">
            <button
              className="w-28 text-white ms-3 h-10 bg-purple-700"
              style={{
                border: "1px solid purple",
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none",
              }}
            >
              Debit List
            </button>
          </Link>
          <Link to="/create-debit">
            <button
              className="w-40 h-10 ms-8"
              style={{
                border: "1px solid purple",
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none",
              }}
            >
              Debit Voucher
            </button>
          </Link>
        </div>
      </div>
      <hr className="bg-slate-700 w-100 mt-3" />

      <form onSubmit={handleDebitSubmit}>
        {/* Main form content */}
        <div className="w-auto flex flex-row mt-4 gap-5">
          <div className="w-auto h-96 gap-8">
            <div className="collecion-input flex flex-col gap-10 w-96">
              <div className="w-auto flex flex-row">
                <select
                  className="select h-11 w-80"
                  style={{ border: "1px solid grey" }}
                  value={selectParty}
                  onChange={(e) => setSelectParty(e.target.value)}
                >
                  <option value="" disabled>
                    Select a Party
                  </option>
                  <option value="Others">Others</option>
                  <option value="000-B2 (01752220026)">000-B2 (01752220026)</option>
                  <option value="NR(Buyer:4234242342)">NR(Buyer:4234242342)</option>
                  <option value="GB Textiles(Customer:)">GB Textiles(Customer:)</option>
                  <option value="COATA(Supplier:)">COATA(Supplier:)</option>
                  <option value="Line-2(Customer:)">Line-2(Customer:)</option>
                  <option value="Line-1(Customer:)">Line-1(Customer:)</option>
                  <option value="LC Waikiki(Buyer)">LC Waikiki(Buyer)</option>
                </select>
                <div className="w-16 h-11 pl-6 pt-2 text-white bg-purple-900">+</div>
              </div>
              <div className="w-auto flex flex-row">
                <select
                  className="select h-11 w-80"
                  style={{ border: "1px solid grey" }}
                  value={select}
                  onChange={(e) => setSelect(e.target.value)}
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="Debit Voucher No">Debit Voucher No</option>
                </select>
                <div className="w-16 h-11 pl-6 pt-2 text-white bg-purple-900">+</div>
              </div>
              <div className="w-auto h-15 flex flex-row">
                <input
                  type="number"
                  placeholder="Debit Voucher No"
                  className="w-80 h-10"
                  style={{ outline: "none", width: "400px" }}
                  value={debitVoucherNo}
                  onChange={(e) => setDebitVoucherNo(e.target.value)}
                />
              </div>
              <div className="w-auto h-15 flex flex-row" style={{ width: "405px" }}>
                <input
                  type="text"
                  placeholder="Remark"
                  className="h-12"
                  style={{ outline: "none", width: "385px" }}
                  value={remark}
                  onChange={(e) => setRemark(e.target.value)}
                />
              </div>
            </div>
          </div>
          {/* Second Column */}
          <div className="w-auto h-96 gap-8">
            <div className="collecion-input flex flex-col gap-10 w-96">
              <div
                className="w-auto h-12 bg-white flex flex-row"
                style={{ border: "1px solid grey" }}
              >
                <p className="mt-3 ms-3">Bill Date</p>
                <input
                  type="date"
                  className="w-48 text-center h-8 ms-3"
                  style={{ border: "2px solid white" }}
                  value={billDate}
                  onChange={(e) => setBillDate(e.target.value)}
                />
              </div>

              <div className="w-auto flex flex-row">
                <select
                  className="select h-11 w-80"
                  style={{ border: "1px solid grey" }}
                  value={payMethod}
                  onChange={(e) => setPayMethod(e.target.value)}
                >
                  <option value="" disabled>
                    Select a Payment Method
                  </option>
                  <option value="Cash">Cash</option>
                  <option value="Bank">Bank</option>
                  <option value="Cheque">Cheque</option>
                </select>
                <div className="w-16 h-11 pl-6 pt-2 text-white bg-purple-900">
                  <Link to="/Createaddbuyer">+</Link>
                </div>
              </div>

              <div className="h-17 flex flex-row" style={{ width: "385px" }}>
                <input
                  type="text"
                  placeholder="Debit Amount"
                  className="h-10"
                  style={{ width: "410px" }}
                  value={debitAmt}
                  onChange={(e) => setDebitAmt(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-96 mt-3 flex flex-row gap-3 ms-96">
          <button
            type="button"
            className="btn btn-join w-48 h-11 bg-white"
            style={{ borderRadius: "5px", border: "1px solid black" }}
            onClick={() => navigate("/debitlist")}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-48 h-11 text-white bg-purple-500"
            style={{ borderRadius: "5px" }}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Createdebit;
