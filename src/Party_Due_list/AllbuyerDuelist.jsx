import React, { useEffect, useState } from 'react'
import { HiDotsVertical } from 'react-icons/hi';
import { Link } from 'react-router-dom'
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const Allbuyerduelist = () => {
  const [alldata, setalldata] = useState([]);
  const handledata=async()=>{
 
  
    // "PartyName":"mudassir",
    // "PartyType":"abc",
    // "Phone":"9999999",
    // "Address":"abc nagar",
    // "DueAmount":"2000",
    // "Remarks":"200",
    // "orderNo
  
    const res=await fetch('http://localhost:8080/api/getallbuyerlist')
    const resdata=await res.json()
    console.log('get all adata buyer due data',resdata.data)
setalldata(resdata.data)
      }
      
  const handledelete=async(id)=>{
    console.log('id',id)

  
    const res=await fetch(`http://localhost:8080/api/deletebuyerduedata/${id}`,{
      method:'delete',
    })
    const response=await res.json()
    console.log('response',response)
    handledata()
  }
   useEffect(()=>{
    handledata()
   },[]) 

  return (
    <div className='w-100 bg-white' style={{height:"100vh"}}>
            <div className='w-auto pt-4 mt-10 h-10 flex flex-row justify-between '> 
<h1 className='fw-bold ms-3'style={{fontSize:"20px"}}>All Buyer Due List</h1>
<div className='sub-div w-auto h-10'>
<button className='w-28  text-white ms-3 h-10 bg-purple-700 ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Buyer Due List</button>
<Link to='/suppliers' className='w-40 h-10 ms-8 ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Supplier List</Link>
<Link to='/creditvoucher' className='w-40 h-10 ms-8 ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Credit Voucher</Link>
<button className='w-40 h-10 ms-8 ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}> Debit Voucher </button>

</div>
      </div>
      <hr className='bg-red-400 mt-5 w-100 '/>
      
      <div className=' w-auto doller-container flex flex-row gap-5 mt-5 ms-3'>
<div className='w-60 bg-black h-20  doller-buyer pl-14 pt-3' style={{borderRadius:"1rem"}} >
  <span className='text-orange-400' style={{fontSize:"22px",fontWeight:"bold"}}>$110,000.00
  </span><br/>
  <span className='text-orange-400 pl-1 ' style={{fontWeight:"bold"}} >
  Total Bill

  </span>
</div>

{/* second-box */}
<div className='w-60 bg-black h-20  doller-buyer pl-9 pt-3' style={{borderRadius:"1rem"}} >
  <span className='text-orange-400' style={{fontSize:"22px",fontWeight:"bold"}}>$10,000.00
  </span><br/>
  <span className='text-orange-400 ' style={{fontWeight:"bold"}} >
 Advance Amount

  </span>
</div>
{/* Third-box */}
<div className='w-60 bg-white h-20  doller-buyer pl-12 pt-3' style={{borderRadius:"1rem"}} >
  <span className='' style={{fontSize:"22px",fontWeight:"bold"}}>$0.00
  </span><br/>
  <span className='text-gray-500 pr-4' style={{fontWeight:"bold"}} >
Pay Amount
  </span>
</div>
<div className='w-60 bg-green-300 h-20  doller-buyer pl-9 pt-3' style={{borderRadius:"1rem"}} >
  <span className='' style={{fontSize:"22px",fontWeight:"bold"}}>$111,000.00
  </span><br/>
  <span className='text-gray-500 ' style={{fontWeight:"bold"}} >
  Due Amount

  </span>
  
</div>

      </div>
      {/* form */}
      <div className='form w-100    flex fle-row gap-6 pl-3 mt-20'>
      <div className='w-80 h-10 bg-black   flex flex-row ' style={{borderRadius:"10px"}}>
<select className="select h-11 w-80 p-2 pl-3 "style={{border:"1px solid  grey",outline:"none",borderRadius:"10px" }}>
    <option selected>Transfer Type
    </option>
    <option>-Select Bank-</option>
    <option >Per Page-10</option>
    <option >Per Page-30</option>
    <option >Per Page-50</option>
    <option >Per Page-100</option>
</select>
</div>
<input type='text' className='w-80 text-center h-11 font-bold' placeholder='Search...' style={{ border: "1px solid grey", borderRadius: "10px" }} />

      </div>

       {/* table */}
       <table className="table mt-10 ms-3 p-2" style={{fontFamily:"monospace",fontSize:"15px"}}>
  <thead>
    <tr className='bg-slate-300' style={{border:"2px solid grey"}}>
      <th scope="col">SL.</th>
      <th scope="col">Order No.</th>
      <th scope="col">Phone</th>
      <th scope="col">Total Bill</th>
      <th scope="col">Advance Amount</th>
      <th scope="col">Pay Amount</th>
      <th scope="col">Due Amount</th>
      <th scope="col">Remarks</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      alldata.map((ele,index)=>{
        return(
          <tr>
          <th scope="row">{index+1}</th>
          <td>{ele.orderNo}</td>
          <td>{ele.Phone}</td>
          <td>{ele.TotalBill}</td>
          <td>{ele.AdvanceAmount}</td>
          <td>{ele.PayAmount}</td>
          <td>{ele.DueAmount}</td>
          <td>{ele.Remarks}</td>
          <td  className='flex items-center h-12 gap-1'>  
                            <Link state={ele._id}  className='w-6 hover:bg-green-200 h-6 flex justify-center items-center bg-green-100'>
                            <FaEdit/>
                            </Link>
                            <div onClick={()=>handledelete(ele._id)} className='w-6 hover:bg-red-200 h-6 flex justify-center items-center bg-red-100'>

                            <MdDelete/>
                  
       </div>
                          </td>  
        </tr>
        )
      })
    }

   
  
  </tbody>
</table>
    </div>
  )
}

export default Allbuyerduelist