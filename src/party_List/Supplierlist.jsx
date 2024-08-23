import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { HiDotsVertical } from 'react-icons/hi';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { FaFileCsv, FaFilePdf } from 'react-icons/fa6';
import { LuPrinter } from "react-icons/lu";
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
const Supplierlist = () => {
const [alldata, setalldata] = useState([]);

const componentRef = useRef();
const handlePrint = useReactToPrint({
  content: () => componentRef.current,
});
// print tablenmfnjidsgdf

const handlePdf=async()=>{

  const doc = new jsPDF()
  doc.autoTable({ html: '.tableone' })
  doc.save('table.pdf')
}
  const handledata=async()=>{
 
  
  
    const res=await fetch('http://localhost:8080/api/getallSupplierdata')
    const resdata=await res.json()
    console.log('get all adata supplier data',resdata.data)
setalldata(resdata.data)
      }


      
  const handledelete=async(id)=>{
    console.log('id',id)

  
    const res=await fetch(`http://localhost:8080/api/deletesupplierdata/${id}`,{
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
    <div className='w-100 px-3 bg-white' style={{height:"100vh"}}>
            <div className='w-auto pt-4 mt-10 h-10 flex flex-row justify-between '> 
<h1 className='fw-bold' style={{fontSize:"20px"}}>Supplier List</h1>
<div className='sub-div w-80 h-10'>
<button className='w-28  text-white ms-3 h-10 bg-purple-700 ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Shipment List</button>
<Link to='/addnewsupplierone' className='w-40 h-10 ms-8 ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Add New Supplier </Link>

</div>
      </div>
      <hr className=' mt-5 w-100 '/>
      
      <div className=' w-auto doller-container flex flex-row gap-5 mt-5 '>
<div className='w-60 bg-black h-20  doller-buyer pl-14 pt-3' style={{borderRadius:"1rem"}} >
  <span className='text-orange-400' style={{fontSize:"22px",fontWeight:"bold"}}>$2,664.00
  </span><br/>
  <span className='text-orange-400 pl-1 ' style={{fontWeight:"bold"}} >
  Total Bill

  </span>
</div>

{/* second-box */}
<div className='w-60 bg-black h-20  doller-buyer pl-9 pt-3' style={{borderRadius:"1rem"}} >
  <span className='text-orange-400' style={{fontSize:"22px",fontWeight:"bold"}}>$0.00
  </span><br/>
  <span className='text-orange-400 ' style={{fontWeight:"bold"}} >
 Advance Amount

  </span>
</div>
{/* Third-box */}
<div className='w-60 bg-white h-20  doller-buyer pl-12 pt-3' style={{borderRadius:"1rem"}} >
  <span className='' style={{fontSize:"22px",fontWeight:"bold"}}>$0.00
  </span><br/>
  <span className='text-orange-400 pr-4' style={{fontWeight:"bold"}} >
Pay Amount
  </span>
</div>
<div className='w-60 bg-green-300 h-20  doller-buyer pl-9 pt-3' style={{borderRadius:"1rem"}} >
  <span className='pl-5' style={{fontSize:"22px",fontWeight:"bold"}}>$2,664.00
  </span><br/>
  <span className='text-orange-400  pl-5' style={{fontWeight:"bold"}} >
 Due Amount

  </span>
</div>

      </div>
      {/* form */}
      <div className=' w-100  mt-14 h-20 flex items-center justify-between' >
      <div className='flex gap-2'>
{/* search per page data  */}


      <select className=" h-8 w-36 rounded border outline-blue-300 ">
    <option selected className=''>    Select Per Page
    </option>
    <option>Per Page-10</option>
    <option >Per Page-30</option>
    <option>Per Page-50</option>
    <option>Per Page-100</option>
</select>

{/* dngvkufsdhjklbnklgfhb */}

{/* seracvjdsfuifv */}
<input className=' h-8 px-2 w-36 rounded border outline-blue-300 '  type='text' placeholder='Search.' />

</div>

<div className='w-80 flex justify-end'>
<div className='w-40 flex  justify-center gap-2 items-center'>
<LuPrinter onClick={handlePrint}  className='text-red-400' style={{fontSize:"20px"}} />
<LuPrinter onClick={handlePrint} className='text-green-4 00'  style={{fontSize:"20px "}} />
<FaFilePdf onClick={handlePdf}  className='text-purple-500' style={{fontSize:"20px"}} />
<FaFileCsv  className='text-pink-400' style={{fontSize:"20px"}}/>
</div>

</div>

      </div>
       {/* table */}
       <table ref={componentRef} className="table tableone mt-10  p-2" style={{fontFamily:"monospace",fontSize:"15px"}}>
  <thead>
    <tr className='bg-slate-300' style={{border:"2px solid grey"}}>
      <th scope="col">SL.</th>
      <th scope="col">Party Name</th>
      <th scope="col"> Phone Number</th>
      <th scope="col">Country</th>
      <th scope="col">Advance Amount</th>
      <th scope="col">Pay Amount</th>
      <th scope="col">Due Amount</th>
      <th scope="col">Balance</th>
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
      <td  className='flex items-center h-12 gap-1'>  
                            <Link state={ele._id} to={`/editsupplierlist`} className='w-6 hover:bg-green-200 h-6 flex justify-center items-center bg-green-100'>
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

export default Supplierlist