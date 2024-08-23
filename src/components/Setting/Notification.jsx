import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaUserAlt } from 'react-icons/fa';
import { GrDocumentPdf } from 'react-icons/gr';
import { BsFiletypeScss } from 'react-icons/bs';
import { FiPrinter } from 'react-icons/fi';
import { PiArrowCounterClockwise } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";



const Notification = () => {

    // const downloadpdf=()=>{
       
        
    //     const doc = new jsPDF('p','mm','a4')
    //    doc.autoTable({ html: '#download', })
    //    doc.internal.pageSize.getWidth()
    //    doc.internal.pageSize.getHeight()

    
    //     doc.save('table.pdf')
    // }
 
    const [showProfile, setshowProfile] = useState(false);
  return (
    <div>
       
      {/* inner divjnfdvjkdshfjv */}

      <div className='w-full px-4'>

      <div className='w-full h-20 flex items-center text-lg'>
<p>Notifications list</p>
      </div>
      <hr className='bg-slate-700  w-full px4' />




      <div className=' flex justify-between items-center gap-4 mt-7 px-4 h-10'>
    <div className='flex gap-4'>
      <div className='flex items-center gap-3'>
    <select name="" id="" className=" h-8 w-36 " style={{ border: "1px solid  grey", outline: "none", borderRadius: "5px" }}>
<option value="">Today</option>
<option value="">Last 7 Days</option>
<option value="">Last 15 Days</option>
<option value="">Last Month</option>
<option value="">Last Year</option>
    </select>
  
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
        <FiPrinter />
      </p>

        </div>
      </div>



      <div className='w-full flex justify-around items-center bg-slate-200 h-10 mt-6 ' id='download'>
    
        <p>SL.</p>
        <p>Message</p>
        
       
        <p>Type</p>
        <p>CreatedAt</p>
        <p>ReadAt</p>
        <p>Action</p>
       
       
      
      </div>
      </div>
    </div>
  )
}

export default Notification