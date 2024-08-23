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

const Production = () => {

  
    const [showProfile, setshowProfile] = useState(false);
  return (
    <div className='overflow-hidden'>
       
      {/* inner divjnfdvjkdshfjv */}

      <div className='w-full px-4'>

      <div className='w-full h-20 flex items-center text-lg'>
<p>Production Report</p>
      </div>
      <hr className='bg-slate-700  w-full px4' />




      <div className=' flex justify-between items-center gap-4 mt-7 px-4 h-10 '>
    <div className='flex gap-4'>
      <div className='flex items-center gap-3'>
      
      <select  className=" h-8 w-36 " style={{ border: "1px solid  grey",  borderRadius: "5px" }}>
        <option>Daily</option>
        <option>Weekly</option>
        <option>Monthly</option>
        <option>Yearly</option>
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
        <FiPrinter/>
      </p>

        </div>
      </div>


<div className='overflow-x-scroll widthoverflow  h-96'>

     <table  className='mt-10 border  w-full'>
      <tr className=''>
        <td  rowSpan={'2'} className='border widthtable h-16 border-black'>hello</td>
        <td  rowSpan={'2'} className='border w-20 h-16 border-black'>gvmflk</td>
        <td  rowSpan={'2'} className='border w-20 h-16 border-black'>gvmflk</td>
        <td  rowSpan={'2'} className='border w-20 h-16 border-black'>gvmflk</td>
        <td  rowSpan={'2'} className='border w-20 h-16 border-black'>gvmflk</td>
        <td  rowSpan={'2'} className='border w-20 h-16 border-black'>gvmflk</td>
        <td colSpan={'2'} className='border w-44 h-3  text-xs  border-black'></td>
        <td  rowSpan={'2'} className='border w-20 h-16 border-black'>gvmflk</td>
        <td colSpan={'4'} className='border w-44 h-3  border-black text-xs'></td>
        <td colSpan={'3'} className='border w-44 h-3  border-black text-xs'></td>
        <td  rowSpan={'2'} className='border w-20 h-16 border-black'>gvmflk</td>
        <td  colSpan={'2'} className='border w-20 h-3 border-black'></td>
        <td  rowSpan={'2'} className='border w-20 h-16 border-black'>gvmflk</td>
        <td  colSpan={'2'} className='border w-20 h-3 border-black'></td>
        <td  rowSpan={'2'} className='border w-20 h-16 border-black'>gvmflk</td>
        <td  colSpan={'2'} className='border w-20 h-3 border-black'></td>
        <td  rowSpan={'2'} className='border w-20 h-16 border-black'>gvmflk</td>
        <td  rowSpan={'2'} className='border w-20 h-16 border-black'>gvmflk</td>
        <td  rowSpan={'2'} className='border w-20 h-16 border-black'>gvmflk</td>
 

    
      </tr>
      <tr className='h-8'>
     
    
       
        
   
        
        
       
   

     
       
  
       
    
      
   
       
        <td  className='border  border-black widthtable'>gvmflk</td>
        <td  className='border  border-black'>gvmflk</td>
        <td  className='border  border-black'>gvmflk</td>
        <td  className='border  border-black'>gvmflk</td>
        <td  className='border  border-black'>gvmflk</td>
        <td  className='border  border-black'>gvmflk</td>
        <td  className='border  border-black'>gvmflk</td>
        <td  className='border  border-black'>gvmflk</td>
        <td  className='border  border-black'>gvmflk</td>
        <td  className='border  border-black'>gvmflk</td>
        <td  className='border  border-black'>gvmflk</td>
        <td  className='border  border-black'>gvmflk</td>
        <td  className='border    border-black'>gvmflk</td>
        <td  className='border  border-black'>gvmflk</td>
      </tr>
     </table>
</div>
      </div>
    </div>
  )
}


export default Production