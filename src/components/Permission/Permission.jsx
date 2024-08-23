import React, { useState } from 'react'
import { FaBars, FaUser } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaUserAlt } from 'react-icons/fa';
import { PiArrowCounterClockwise } from 'react-icons/pi';
import { FaSave } from "react-icons/fa";
import { FaArrowRightFromBracket } from 'react-icons/fa6';

const Permission = () => {

    const [showProfile, setshowProfile] = useState(false);
  return (
    <div className='w-full'>
            
      {/* inner divjnfdvjkdshfjv */}

      <div className='w-full px-4'>

      <div className='w-full h-20 flex items-center text-lg'>
<p>Roles List</p>
      </div>
      <hr className='bg-slate-700  w-full px4' />

    </div>
    <div className='widthRole rounded-lg px-3  bg-white shadow-lg m-auto pt-3 '>
        <p className='text-center text-2xl '>Assign Role To User</p>
        <p className='mt-2 h-5' htmlFor="">User</p><br />
        <select className='w-full h-10 px-2 border rounded-md outline-blue-200' name="" id="">
            <option value="">Select user</option>
            <option value="">Admin</option>
            <option value="">Manager</option>
            <option value="">Buyer</option>
            <option value="">Supplier</option>
            <option value="">Marchendiser</option>
            <option value="">Commercial</option>
            <option value="">Accountant</option>
            <option value="">Production</option>
            <option value="">LC Waikiki</option>
            <option value="">Line-1</option>
            <option value="">Line-2</option>
            <option value="">COATS</option>
            <option value="">Marlon Marlon Morals</option>
        </select>

        <p className='mt-3' htmlFor="">Role</p><br />
        <select className='w-full h-10 px-2 border rounded-md outline-blue-200' name="" id="">
        <option value="">Select user</option>
            <option value="">Admin</option>
            <option value="">Manager</option>
            <option value="">Buyer</option>
            <option value="">Supplier</option>
            <option value="">Marchendiser</option>
            <option value="">Commercial</option>
            <option value="">Accountant</option>
            <option value="">Production</option>
            <option value="">SmartPlant</option>
        </select>


        <div className='w-full h-8  mt-12 mb-2'>
          <div className='w-40 m-auto h-full flex gap-2'>
          <button  className='flex justify-center  items-center borderrole text-purple-500  h-full  w-20 rounded-lg'>
          <PiArrowCounterClockwise  className='font-bold'/>
          <p>Reset</p>
          </button>
          <button className='flex justify-center items-center text-white bg-purple-600 w-16 rounded-lg'>
          <FaSave/>
          <p>Save</p>
          </button>
          </div>
        
            
        </div>

    </div>
    </div>
  )
}

export default Permission