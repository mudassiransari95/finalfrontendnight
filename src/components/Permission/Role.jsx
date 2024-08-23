import React, { useState } from 'react'
import { PiArrowCounterClockwise } from 'react-icons/pi';
import { FaUser } from 'react-icons/fa';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { FaBars } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaUserAlt } from 'react-icons/fa';


const Role = () => {

    const [showProfile, setshowProfile] = useState(false);
  return (
    <div>
            
      {/* inner divjnfdvjkdshfjv */}

      <div className='w-full px-4'>

      <div className='w-full h-20 flex items-center text-lg'>
<p>Roles List</p>
      </div>
      <hr className='bg-slate-700  w-full px4' />

    </div>
    <div className='w-full flex flex-wrap  gap-6 mt-10 px-4'>

        <div className='w-80 h-28 flex items-center justify-between shadow-lg rounded-lg px-1'>
            <div className='w-28 '>
              <img className='h-24' src="https://erpsoftware.acnoo.com/assets/images/icons/user-roles.svg" alt="" />
            </div>
            <div className='w-52 h-full text-end'>
                <p className='bg-purple-600  ml-14 text-white w-32 flex items-center rounded justify-center mt-3'>ADD NEW ROLE</p>
                <p className='whitespace-nowrap mt-2 mr-4 text-sm '>Add role, if it does not exist</p>
            </div>

        </div>


       
        <div className='w-80 h-28 flex flex-col gap-1 shadow-lg rounded-lg p-3'>
          
           <p>Total 1 users </p>
           <p className='text-black font-bold text-lg'>Admin</p>
           <p className='text-xs text-blue-500'>Edit Role</p>
        </div>



        <div className='w-80 h-28 flex flex-col gap-1 shadow-lg rounded-lg p-3'>
          
           <p>Total 1 users </p>
           <p className='text-black font-bold text-lg'>Manager</p>
           <p className='text-xs text-blue-500'>Edit Role</p>
        </div>

        
        <div className='w-80 h-28 flex flex-col gap-1 shadow-lg rounded-lg p-3'>
          
           <p>Total 1 users </p>
           <p className='text-black font-bold text-lg'>Buyer</p>
           <p className='text-xs text-blue-500'>Edit Role</p>
        </div>


        
        <div className='w-80 h-28 flex flex-col gap-1 shadow-lg rounded-lg p-3'>
          
           <p>Total 1 users </p>
           <p className='text-black font-bold text-lg'>Customer</p>
           <p className='text-xs text-blue-500'>Edit Role</p>
        </div>
      

        <div className='w-80 h-28 flex flex-col gap-1 shadow-lg rounded-lg p-3'>
          
          <p>Total 1 users </p>
          <p className='text-black font-bold text-lg'>Supplier</p>
          <p className='text-xs text-blue-500'>Edit Role</p>
       </div>
        <div className='w-80 h-28 flex flex-col gap-1 shadow-lg rounded-lg p-3'>
          
          <p>Total 1 users </p>
          <p className='text-black font-bold text-lg'>Merchandiser</p>
          <p className='text-xs text-blue-500'>Edit Role</p>
       </div>
        <div className='w-80 h-28 flex flex-col gap-1 shadow-lg rounded-lg p-3'>
          
          <p>Total 1 users </p>
          <p className='text-black font-bold text-lg'>Commercial</p>
          <p className='text-xs text-blue-500'>Edit Role</p>
       </div>
        <div className='w-80 h-28 flex flex-col gap-1 shadow-lg rounded-lg p-3'>
          
          <p>Total 1 users </p>
          <p className='text-black font-bold text-lg'>Accountant</p>
          <p className='text-xs text-blue-500'>Edit Role</p>
       </div>
        <div className='w-80 h-28 flex flex-col gap-1 shadow-lg rounded-lg p-3'>
          
          <p>Total 1 users </p>
          <p className='text-black font-bold text-lg'>Production</p>
          <p className='text-xs text-blue-500'>Edit Role</p>
       </div>
        <div className='w-80 h-28 flex flex-col gap-1 shadow-lg rounded-lg p-3'>
          
          <p>Total 1 users </p>
          <p className='text-black font-bold text-lg'>Smartplant</p>
          <p className='text-xs text-blue-500'>Edit Role</p>
       </div>

       


    </div>
    </div>
  )
}

export default Role