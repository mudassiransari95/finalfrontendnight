import React, { useEffect, useRef, useState } from 'react'
import { LuPrinter } from "react-icons/lu";
import { GrDocumentText } from "react-icons/gr";


import { FaFilePdf } from "react-icons/fa6";
import { FaFileCsv } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { HiDotsVertical } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from "react-icons/fa";
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf'
import 'jspdf-autotable'

const Shipmentslist = () => {
 
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
  // updateshipmentdata
const [alldata, setalldata] = useState([]);
  const handlegetdata=async()=>{
      const res=await fetch('http://localhost:8080/api/getallshipmentdata')
   const response=await res.json()
      console.log('shipment dataaaaaaaaaaaaaaaaaa',response)
      setalldata(response.data)
        }
        const handledelete=async(id)=>{
          console.log('id',id)
        
          const res=await fetch(`http://localhost:8080/api/deleteshipmentdata/${id}`,{
            method:'delete',
          })
          const response=await res.json()
          console.log('response',response)
          handlegetdata()
        }

       



useEffect(()=>{
  handlegetdata()
 
},[])

      
 


  return (
    <div className='w-100 px-3 h-screen bg-white pt-3 d-flex flex-col'>
        
      <div className='w-100 h-10 flex flex-row justify-between '> 
<h1 className='fw-bold ms-3' style={{fontSize:"20px"}}>Shipment List</h1>
<div className='sub-div w-80 h-10'>
<button className='w-28  text-white ms-3 h-10 bg-purple-700 ' style={{borderRadius:"5px"}}>Shipment List</button>
<Link to='/addnewshipment' className='w-40 h-10 ms-8 ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Add New Shipment </Link>

</div>
      </div>
      <hr className='bg-slate-700  w-100 mt-3'/>
      <div className=' w-100    bg-white mt-14 h-20 flex items-center justify-between' style={{}}>

{/* search per page data  */}

<div className='flex gap-2'>
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

<LuPrinter onClick={handlePrint} className='text-green-400'  style={{fontSize:"20px "}} />
<FaFilePdf onClick={handlePdf}  className='text-purple-500' style={{fontSize:"20px"}} />
<FaFileCsv  className='text-pink-400' style={{fontSize:"20px"}}/>


</div>

</div>

      </div>
<div className=' mt-3 ' style={{background:"whitesmoke"}}>
<table className="w-full  mt-4 bg-white">
  <thead>
    <tr className='w-full border h-10'>
      <th scope="col">SL.</th>
      <th scope="col">Invoice No.</th>
      <th scope="col">Order No.</th>
      <th scope="col">Creater</th>
      <th scope="col">Total QTY</th>
      <th scope="col">Total CM</th>
      <th scope="col">Created AT</th>
      <th scope="col">Action</th>




    </tr>
  </thead>
  <tbody>
    {
      alldata.map((ele,index)=>{
        return(
          <tr className='h-10 border'>
          <th scope="row">{index+1}</th>
          <td>{ele.InvoiceNo}</td>
          <td>{ele.OrderNo}</td>
          <td>Admin</td>
          <td>{ele.TotalQty}</td>
          <td>{ele.TotalCM}</td>
          <td>{ele.createdAt}</td>
<td  className='flex items-center h-12 gap-1'>  
                            <Link state={ele._id}  to={'/Editshipmentlist'} className='w-6 hover:bg-green-200 h-6 flex justify-center items-center bg-green-100'>
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
    </div>
  )
}

export default Shipmentslist