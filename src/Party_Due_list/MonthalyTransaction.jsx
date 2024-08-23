import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { HiDotsVertical } from 'react-icons/hi';
const MonthalyTransaction = () => {
const [alldata, setalldata] = useState([]);
  const handledata=async()=>{
 
  
  
    const res=await fetch('http://localhost:8080/api/getallsupplierdata')
    const resdata=await res.json()
    console.log('get all adata supplier data',resdata.data)
setalldata(resdata.data)
      }
   useEffect(()=>{
    handledata()
   },[]) 
  return (
    <div className='w-100 bg-white px-3' style={{height:"100vh"}}>
            <div className='w-auto pt-4 mt-10 h-10 flex flex-row justify-between '> 
<h1 className='fw-bold' style={{fontSize:"20px"}}>Monthly Transaction</h1>

      </div>
      <hr className='bg-red-400 mt-5 w-100 '/>
      
      <div className=' w-auto  flex  gap-5 mt-3 '>
<div className='w-60 bg-blue-200 h-20 rounded text-black pl-14 pt-3'  >
  <span className='' style={{fontSize:"22px",fontWeight:"bold"}}>RM18000.00
  </span><br/>
  <span className=' pl-1 ' style={{fontWeight:"bold"}} >
  Total Amount

  </span>
</div>

{/* second-box */}
<div className='w-60 bg-blue-200 h-20 rounded text-black pl-14 pt-3'  >
  <span className='' style={{fontSize:"22px",fontWeight:"bold"}}>RM18000.00
  </span><br/>
  <span className=' pl-1 ' style={{fontWeight:"bold"}} >
  Credit Amount

  </span>
</div>
{/* Third-box */}
<div className='w-60 bg-red-100 h-20 rounded text-black pl-14 pt-3'  >
  <span className='' style={{fontSize:"22px",fontWeight:"bold"}}>RM0.00
  </span><br/>
  <span className=' pl-1 ' style={{fontWeight:"bold"}} >
  Debit Amount

  </span>
</div>


      </div>
      <p className='text-lg my-3'>Month Of August</p>
      <hr className='bg-red-400  w-100 '/>
      {/* form */}
      <div className='form w-100    flex  gap-6  mt-4'>
      <div className='w-80 h-10 bg-black   flex  ' style={{borderRadius:"10px"}}>
<select className="select h-11 w-80 p-2 pl-3 "style={{border:"1px solid  grey",outline:"none",borderRadius:"10px" }}>
    <option selected>All Result
    </option>
    <option>Per Page-30</option>
    <option>Per Page-50</option>
    <option>Per Page-100</option>
    </select>
</div>
<input type='text' className='w-80 h-11 font-bold' placeholder='Search...' style={{ border: "1px solid grey", borderRadius: "10px" }} />

      </div>

       {/* table */}
       <table className="table mt-10  p-2" style={{fontFamily:"monospace",fontSize:"15px"}}>
  <thead>
    <tr className='bg-slate-300' style={{border:"2px solid grey"}}>
      <th scope="col">Date</th>
      <th scope="col">Total Transaction</th>
  
      <th scope="col">Total Amount</th>
      <th scope="col">Type</th>
   
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
      <td>{ele.PartyName}</td>
      <td>{ele.Phone}</td>
      <td>{ele.Country}</td>
      <td></td>
      <td>{ele.OpeningBalance}</td>
      <td>{ele.BalanceType}</td>
      <td>NR</td>
      <td>{ele.Remarks}</td>
      <td className='relative '>
        <p className='ml-3'>   <HiDotsVertical/></p>
       
     
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

export default MonthalyTransaction