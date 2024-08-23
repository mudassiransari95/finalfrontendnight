import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaUserAlt } from 'react-icons/fa';
import { GrDocumentPdf } from 'react-icons/gr';
import { BsFiletypeScss } from 'react-icons/bs';
import { FiPrinter } from 'react-icons/fi';
import { PiArrowCounterClockwise } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
const SupplierDue = () => {

    const [showProfile, setshowProfile] = useState(false);

    const [alldata, setalldata] = useState([]);

    const getallsupplier=async()=>{
      const res=await fetch('http://localhost:8080/api/getallSupplierDue')
      const getdata=await res.json()
      console.log('supplierrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',getdata)
      setalldata(getdata.data)
    }
    useEffect(()=>{
      getallsupplier()
    },[])
    
  return (
    <div>
      
      {/* inner divjnfdvjkdshfjv */}

      <div className='w-full px-4'>

      <div className='w-full h-20 flex items-center text-lg'>
<p>Supplier Due List</p>
      </div>
      <hr className='bg-slate-700  w-full px4' />





      <div className='w-52 h-28 bg-red-200 mt-4 mb-20 rounded-lg flex flex-col justify-center text-black text-lg'>
        <p className='ms-3 font-bold  '>&2664.00</p>
        <p className='ms-3'>Due Amount</p>

      </div>




      <div className=' flex justify-between items-center gap-4 mt-7 px-4 h-10'>
    <div className='flex gap-4'>
      <div className='flex items-center gap-3'>
    
      <select className=" h-8 w-36 " style={{ border: "1px solid  grey", outline: "none", borderRadius: "5px" }}>
        <option>Per Page-10</option>
        <option>Per Page-30</option>
        <option>Per Page-50</option>
        <option>Per Page-100</option>
      </select>
      </div>
      <div className='flex items-center gap-3'>
    
      <input type='text' className=' h-8 w-36 text-start px-2' placeholder='Search...' style={{ border: "1px solid grey", borderRadius: "5px" }} />
       
      </div>
    </div>
    
    <div className='flex gap-2'>
      <p className='w-6 h-6 bg-green-200 flex justify-center items-center'>

        <GrDocumentPdf />
      </p>
      <p  className='w-6 h-6 bg-green-200 flex justify-center items-center'>

        <BsFiletypeScss />
      </p>
      <p  className='w-6 h-6 bg-red-200 flex justify-center items-center'>
        <FiPrinter/>
      </p>

        </div>
      </div>



    

      <table className='w-full mt-4 table'>
      <thead>
        <tr className='w-full h-12'>
       
        <th>SL.</th>
      
        <th>Party Name</th>
       
        <th>Party Type</th>
        <th>Phone</th>
        <th>Address</th>
        <th>Due Amount</th>
        <th>Remarks</th>
       
    
        </tr>
      </thead>
      <tbody>

        {
          alldata.map((ele,index)=>{
            return(
              <tr>
<td>{index+1}</td>
<td>{ele.PartyName}</td>

<td>{ele.PartyType}</td>
<td>{ele.Category}</td>
<td>{ele.TotalBill}</td>
<td>{ele.TotalPaid}</td>
<td>{ele.TotalDue}</td>



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

export default SupplierDue