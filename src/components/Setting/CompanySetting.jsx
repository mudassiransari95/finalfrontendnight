import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaUserAlt } from 'react-icons/fa';
import { PiArrowCounterClockwise } from 'react-icons/pi';
import { FaUser } from 'react-icons/fa';
import { FaArrowRightFromBracket } from 'react-icons/fa6';

const CompanySetting = () => {


    const [showProfile, setshowProfile] = useState(false);
  return (
    <div>



      <div className='w-full px-5 mt-8'>
            <div className='w-full border p-3'>
            <p>Company Settings</p>
            <hr className='w-full mt-3'/>

            <p className='mt-3' htmlFor="">Company Name</p><br />
            <input className='w-full mt-1 h-12 border text-start' type="text" />


            <div className='flex w-full gap-10'>

            <div className='w-full'>
            <p className='mt-3' htmlFor="">Company Email</p><br />
            <input className='w-full h-12 mt-1 border text-start' type="text" />
            </div>
            <div className='w-full'>

            <p className='mt-3' htmlFor="">Remarks</p><br />
            <input className='w-full mt-1 h-12 border text-start' type="text" />
            </div>
         
            
         
            </div>
            <div className='flex w-full gap-10'>

<div className='w-full'>
<p className='mt-3' htmlFor="">Address</p><br />
<input className='w-full h-12 mt-1 border text-start' type="text" />
</div>
<div className='w-full'>

<p className='mt-3' htmlFor="">Website</p><br />
<input className='w-full mt-1 h-12 border text-start' type="text" />
</div>



</div>




<div className='flex w-full gap-10'>

<div className='w-full'>
<p className='mt-3' htmlFor="">Logo</p><br />
<div id='file' className='w-full h-12 mt-1 border text-start'>

<input className='w-full h-12  border text-start' type="file" id='file'  />
</div>
</div>
<div className='w-full'>

<p className='mt-3' htmlFor="">Favicon</p><br />
<input className='w-full mt-1 h-12 border text-start' type="file" />


</div>



</div>
          
            </div>


            <div className='w-full my-7'>
                <div className='w-52 text-white rounded-lg h-12 bg-purple-600 flex justify-center items-center m-auto '>

                <p>Update</p>
                </div>
            </div>

      </div>
    </div>
  )
}

export default CompanySetting