import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { GrDocumentText } from "react-icons/gr";


import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { FaFileCsv, FaFilePdf } from 'react-icons/fa6';
import { LuPrinter } from "react-icons/lu";
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
const Booklist = () => {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  // print tablenmfnjidsgdf
 
  const handlePdf=async()=>{

    const doc = new jsPDF()
    doc.autoTable({ html: '.table' })
    doc.save('table.pdf')
  }


    // prinst documeent bjfjhbdfjgvdfbgfdb
 
  
    
    // download pdf jbhdfjkdg


  const [data, setdata] = useState([]);

 
const getalldata=async()=>{


  const res=await fetch('http://localhost:8080/booking/getAllBooking')
  
  const resdata=await res.json()
  setdata(resdata.allList)
  console.log('bookingalldata',resdata)


}

const handledelete=async(id)=>{
  console.log('id',id)

  const res=await fetch(`http://localhost:8080/booking/delete/${id}`,{
    method:'delete',
  })
  const response=await res.json()
  console.log('response',response)
  getalldata()
}
useEffect(()=>{
  getalldata()
},[])




  return (
    <div className='w-auto bg-white  pl-2'>
      
      <div className='head-box w-auto pt-2  flex flex-row justify-between mt-3'>
        <h2 className='  ms-3' style={{fontWeight:"bold",fontSize:"20px"}}>
Booking List        </h2>

<div className='link-box w-80 h-10 flex flex-row  me-5 gap-5'style={{border:"1px solid purple",borderLeft:"none",borderRight:"none",borderTop:"none"}}> 
<Link to='/Booking_List' className='ordersummary h-10 w-40 pl-7 pt-2 text-white bg-purple-500'>Booking List
</Link>
<Link to='/add_new_booking'className='ordersummary h-10 w-40 pl-3 pt-2 text-white bg-purple-500'> Add New Booking 
</Link>
{/* <Link to='/addNewbooklist'className='ordersummary h-10 w-40 pl-3 pt-2 text-white bg-purple-500'> Add New Booking 
</Link> */}
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
      <table ref={componentRef} class="table  w-full    mt-2"  >
                  <thead class="bg-gray-50 w-auto " style={{fontWeight:"bold"}}>
                    <tr className=' bg-slate-100 h-12'>
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
                        Booking date
                      </th>
                      <th
                        scope="col                                      "               
                      >
                        Party Name
                      </th>
                      <th
                        scope="col"
                 
                      >
                        Type
                      </th>
                      <th
                        scope="col"
               
                      >
                     Composition
                      </th>
                      <th
                        scope="col"
                    
                      >
                    Order Image
                    </th>
                    <th
                        scope="col"
                  
                      >
                    Pocess Loss 
                    </th>
                        <th
                        scope="col"
                  
                      >
              Prepared By
                    </th>
                    <th
                        scope="col"
              
                      >
                      Rib 
                    </th>
                    <th
                        scope="col"
                   
                      >
              Collar
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
                  <tbody class="divide-y divide-gray-200 bg-white">
                    {
                      data.map((ele,index)=>{
                        return(
                          <tr className='h-12'>
                            <td>{index+1}</td>
                            <td>{ele.orderNo}</td>
                            <td>{ele.bookingDate}</td>
                            <td>{ele.partyName}</td>
                            <td>{ele.type}</td>
                            <td>{ele.composition}</td>
                            <td>{ele.orderImage}</td>
                            <td>{ele.processLoss}</td>
                            <td>{ele.preparedBy}</td>
                            <td>{ele.rib}</td>
                            <td>{ele.collar}</td>
                            <td>{ele.status}</td>
                            <td  className='flex items-center h-12 gap-1'>  
                            <Link  className='w-6 hover:bg-green-200 h-6 flex justify-center items-center bg-green-100'>
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
                </table>    </div>
  )
}

export default Booklist









