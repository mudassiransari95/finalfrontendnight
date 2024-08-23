import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { GrDocumentText } from "react-icons/gr";
import { FaFileCsv, FaFilePdf } from 'react-icons/fa6';
import { LuPrinter } from "react-icons/lu";
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { BsThreeDotsVertical } from 'react-icons/bs';

import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Debitvoucher from './../../Party_Due_list/Debitvoucher';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const OrderSummary = () => {
  const [editdata, seteditdata] = useState(false);
const [passid, setpassid] = useState('');

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

  const [alldata, setalldata] = useState([]);
  console.log('alldata',alldata)
  const [deletebutton, setdeletebutton] = useState(false);

  const handleedit=(id)=>{
 console.log('lllllll',id)
    setpassid(id)
    
  }
  const allorderdata=async()=>{
    const res=await fetch('http://localhost:8080/order/getAllOrder',{
      method:'get',
      headers:{
        'content-type':'application/json'
      },
 
    })
    const resdata=await res.json()

    setalldata(resdata.allList)
  }

  const handledelete=async(id)=>{
    console.log('id',id)

  
    const res=await fetch(`http://localhost:8080/order/delete/${id}`,{
      method:'delete',
    })
    const response=await res.json()
    console.log('response',response)
    allorderdata()
  }
 
 useEffect(()=>{
  allorderdata()
 },[])
  return (
    <>
  {!editdata && <div className='w-full bg-white  px-3'>
      
      <div className='w-full   flex  justify-between items-center mt-5'>
        <h2 className='' style={{fontWeight:"bold",fontSize:"20px"}}>
          Order Summary
        </h2>


        <div className=' w-80 flex justify-between h-9' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>
<Link to={'/orderlist'}  className='w-36  pl-3 pt-2 font-semibold  h-9 text-white rounded-t-md bg-purple-700' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Order Summary</Link>
<Link to='/addneworder' className='w-64 h-9 text-md text-black  pt-2 pl-3' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}> Add New Order  </Link>

</div>

      </div>
      {/* form */}
      <div className=' w-100    bg-white mt-14 h-20 flex items-center gap-2 ' style={{}}>

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

  <div className='w-60 h-8  bg-white   flex items-center gap-2'>
                        <p className='w-16 whitespace-nowrap ' >From Date</p>
                        <input type='date' placeholder='Enter Payment Mode ' className=' h-8 px-2 w-36 rounded border outline-blue-300 ' />
                    </div>
                  <div className='w-60 h-8  bg-white   flex items-center gap-2'>
                        <p className='w-12 whitespace-nowrap ' >To Date</p>
                        <input type='date' placeholder='Enter Payment Mode ' className=' h-8 px-2 w-36 rounded border outline-blue-300 ' />
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
      <table ref={componentRef} class="tableone w-full    mt-1"  >
                  <thead class="bg-gray-50  " style={{fontWeight:"bold"}}>
                    <tr className=' bg-slate-100  h-12 w-full'>
                      <th
                        scope="col"
                
                      >
                        <span>Sl.</span>
                      </th>
                      <th
                        scope="col"
                     >
                    Order No.
                      </th>
                      <th
                        scope="col"
                   
                      >
                        Image
                      </th>
                      <th
                        scope="col"
                       
                      >
                        Party Name
                      </th>
                      <th
                        scope="col"
                      
                      >
                       Merchandiser
                      </th>
                      <th
                        scope="col"
                 
                      >
                 GSM
                      </th>
                      <th
                        scope="col"
                
                      >
                 Shipment Mode
                    </th>
                    <th
                        scope="col"
                  
                      >
             payment mode
                    </th>
                    <th
                        scope="col"
              
                      >
                     Year
                    </th>
                    <th
                        scope="col"
       
                      >
           Season
                    </th>
                    
                    <th
                        scope="col"
              
                      >
              Total Qty
                    </th>
                    <th
                        scope="col"
                
                      >
            	Total Unit Price
                    </th>
                    <th
                        scope="col"
                
                      >
              status
                    </th>
                    <th
                        scope="col"
                 
                      >
            Action
                    </th>
                    </tr>
                  </thead>
                  <tbody class="  bg-white">
                                   {
                                      alldata.map((ele,index)=>{
                        return (
                          <tr key={index} className='h-12 w-full border'>
                          <td >{index+1}</td>              
                          <td >{ele.orderNo}</td>              
                          <td >{ele.image}</td>              
                          <td >{ele.party}</td>              
                          <td >{ele.merchandiser}</td>              
                          <td >{ele.gsm}</td>              
                          <td >{ele.shipMode}</td>              
                          <td ></td>              
                          <td >{ele.year}</td>              
                          <td ></td>              
                          <td >{ele.totalQty}</td>              
                          <td >{ele.totalUnitPrice}</td>              
                          <td >{ele.status}</td> 
                          <td  className='flex items-center h-12 gap-1'>  
                            <Link state={ele._id} to={`/editorderlist`} className='w-6 hover:bg-green-200 h-6 flex justify-center items-center bg-green-100'>
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
                 </div>}

       
                 </>
  )
}

export default OrderSummary









