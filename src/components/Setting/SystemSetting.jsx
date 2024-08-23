import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaUserAlt } from 'react-icons/fa';
import { PiArrowCounterClockwise } from 'react-icons/pi';
import { FaUser } from 'react-icons/fa';
import { FaArrowRightFromBracket } from 'react-icons/fa6';

const SystemSetting = () => {
    const [showProfile, setshowProfile] = useState(false);


    const [app, setapp] = useState(false);
    const [driver, setdriver] = useState(false);
    const [storage, setstorage] = useState(false);
const [mail, setmail] = useState(false);
const [Others, setOthers] = useState(false);
    const handleClick=()=>{
setapp(false)
setdriver(false)
setstorage(false)
setOthers(false)
setmail(false)
    }
   const handleDriver=()=>{
    setapp(true)
    setdriver(true)
    setstorage(false)
    setOthers(false)
    setmail(false)
   }
   const handleStorage=()=>{
    setapp(true)
    setdriver(false)
    setstorage(true)
    setOthers(false)
    setmail(false)
   }
   const handleMail=()=>{
    setapp(true)
    setdriver(false)
    setstorage(false)
    setmail(true)
    setOthers(false)
   }
   const handleOthers=()=>{
    setapp(true)
    setdriver(false)
    setstorage(false)
    setmail(false)
    
    setOthers(true)
   }
  return (
    <div>
       
      {/* inner divjnfdvjkdshfjv */}

      <div className='w-full px-4'>

      <div className='w-full h-20 flex items-center text-lg'>
<p>
Note : Dont Use Any Kind Of Space In The Input Fields</p>
      </div>
      <hr className='bg-slate-700  w-full px4' />
      <div className='flex gap-10 mt-10 min-w-[40rem] mb-24'>
        <div className='w-80 h-64 bg-white shadow-lg  flex flex-col gap-1 items-center justify-center ms-28'>
            <p onClick={handleClick} className={`w-72 h-9 rounded-md p-1 ${!app ? 'bg-blue-700 text-white':'bg-white'}`}>App</p>
            <p onClick={handleDriver} className={`w-72 h-9 rounded-md p-1 ${driver ? 'bg-blue-700 text-white':'bg-white'}`}>Drivers</p>
            <p onClick={handleStorage}  className={`w-72 h-9 rounded-md p-1 ${storage ? 'bg-blue-700 text-white':'bg-white'}`}>Storage Setting</p>
            <p onClick={handleMail}  className={`w-72 h-9 rounded-md p-1 ${mail ? 'bg-blue-700 text-white':'bg-white'}`}>Mail Configuration</p>
            <p onClick={handleOthers}  className={`w-72 h-9 rounded-md p-1 ${Others ? 'bg-blue-700 text-white':'bg-white'}`}>Others</p>
        </div>
        <div>


            {/* apppppppppp */}
{  !app    && 
     <div className='  p-4 widthapp shadow-lg  rounded'>
                <p htmlFor="">APP_NAME</p><br />
                <input className='w-full border rounded-lg h-12' type="text" /><br />
                <p className='mt-3' htmlFor="">APP_NAME</p><br />
                <input className='w-full border rounded-lg h-12' type="text" /><br />
                <p className='mt-3' htmlFor="">APP_NAME</p><br />
                <input className='w-full rounded-lg border h-12' type="text" /><br />
                <p className='mt-3' htmlFor="">APP_NAME</p><br />
                <input className='w-full rounded-lg border h-12' type="text" />

            <div className='w-full my-7'>
                <div className='w-52 text-white rounded-lg h-12 bg-purple-600 flex justify-center items-center m-auto '>

                <p>Update</p>
                </div>
            </div>
            </div>
}
{/* driverssssssss */}
{driver &&
<div className='  p-4 widthapp shadow-lg  rounded'>
                <p htmlFor="">CACHE_DRIVER</p><br />
               
                <select className='w-full border rounded-lg h-12' name="" id="">
                    <option value="">file</option>
                    <option value="">file</option>
                    <option value="">file</option>
                    <option value="">fnksdjkhg</option>
                    <option value="">fnksdjkhg</option>
                    <option value="">fnksdjkhg</option>
                    </select><br />
                    <p>Recommended Memcached or Redis Cache Driver For Height Performance Application And Optimize Call Database Query</p>
                <p className='mt-3' htmlFor="">QUEUE_CONNECTION</p><br />
                <input className='w-full border rounded-lg h-12' type="text" /><br />
                <p className='mt-3' htmlFor="">SESSION_DRIVER</p><br />
                <input className='w-full rounded-lg border h-12' type="text" /><br />
                <p className='mt-3' htmlFor="">SESSION_LIFETIME</p><br />
                <input className='w-full rounded-lg border h-12' type="text" />

            <div className='w-full my-7'>
                <div className='w-52 text-white rounded-lg h-12 bg-purple-600 flex justify-center items-center m-auto '>

                <p>Update</p>
                </div>
            </div>
            </div>

}


            {/* storage settingggggg */}

{ storage &&
            <div className='  p-4 widthapp shadow-lg  rounded'>
                <p>Storage Setting</p>
                <p htmlFor="">Storage Method</p><br />
                <input className='w-full border rounded-lg h-12' type="text" /><br />
                <hr className='w-full mt-4'/>
                <p>Fill up this credentials if you want to use AWS S3 Storage Bucket</p>
                <p className='mt-3' htmlFor="">AWS_ACCESS_KEY_ID</p><br />
                <input className='w-full border rounded-lg h-12' type="text" /><br />
                <p className='mt-3' htmlFor="">AWS_SECRET_ACCESS_KEY</p><br />
                <input className='w-full rounded-lg border h-12' type="text" /><br />
                <p className='mt-3' htmlFor="">AWS_DEFAULT_REGION</p><br />
                <input className='w-full rounded-lg border h-12' type="text" />
                <p className='mt-3' htmlFor="">AWS_BUCKET</p><br />
                <input className='w-full rounded-lg border h-12' type="text" />
                <hr className='w-full mt-4'/>
                <p>Fill up this credentials if you want to use AWS S3 Storage Bucket</p>
                <p className='mt-3' htmlFor="">WAS_ACCESS_KEY_ID</p><br />
                <input className='w-full rounded-lg border h-12' type="text" />
                <p className='mt-3' htmlFor="">WAS_SECRET_ACCESS_KEY</p><br />
                <input className='w-full rounded-lg border h-12' type="text" />
                <p className='mt-3' htmlFor="">WAS_DEFAULT_REGION</p><br />
                <input className='w-full rounded-lg border h-12' type="text" />
                <p className='mt-3' htmlFor="">WAS_BUCKET</p><br />
                <input className='w-full rounded-lg border h-12' type="text" />
                <p className='mt-3' htmlFor="">WAS_ENDPOINT</p><br />
                <input className='w-full rounded-lg border h-12' type="text" />

            <div className='w-full my-7'>
                <div className='w-52 text-white rounded-lg h-12 bg-purple-600 flex justify-center items-center m-auto '>

                <p>Update</p>
                </div>
            </div>
            </div>

}


            {/* Mail Configrationnnnn */}

{mail &&

            <div className='  p-4 widthapp shadow-lg  rounded'>
                <p htmlFor="">QUEUE_MAIL</p><br />
                <select className='w-full border rounded-lg h-12' name="" id="">
                    <option value="">true</option>
                    <option value="">false</option>
                </select>
                <br />
                <p className='mt-3' htmlFor="">MAIL_DRIVER_TYPE</p><br />
                <select className='w-full border rounded-lg h-12' name="" id="">
                    <option value="">MAIL_MAILER</option>
                    <option value="">MAIL_DRIVER</option>
                    <option value="">false</option>
                </select>
                <br />
             
                <p className='mt-3' htmlFor="">MAIL DRIVER</p><br />
                <select className='w-full rounded-lg border h-12' name="" id="">
                    <option value="">sendMail</option>
                    <option value="">smtp</option>
                </select>
             
                <p className='mt-3' htmlFor="">MAIL_HOST</p><br />
                <input className='w-full rounded-lg border h-12' type="text" />
                <p className='mt-3' htmlFor="">MAIL_PORT</p><br />
                <input className='w-full rounded-lg border h-12' type="text" />
                <p className='mt-3' htmlFor="">MAIL_USERNAME</p><br />
                <input className='w-full rounded-lg border h-12' type="text" />
                <p className='mt-3' htmlFor="">MAIL_PASSWORD</p><br />
                <input className='w-full rounded-lg border h-12' type="text" />
                <p className='mt-3' htmlFor="">MAIL_ENCRYPTION</p><br />
                <input className='w-full rounded-lg border h-12' type="text" />
                <p className='mt-3' htmlFor="">MAIL_FROM_ADDRESS</p><br />
                <input className='w-full rounded-lg border h-12' type="text" />
                <p className='mt-3' htmlFor="">MAIL_FROM_NAME</p><br />
                <input className='w-full rounded-lg border h-12' type="text" />
                <p className='mt-1'>
                Note : If you are using MAIL QUEUE after Changing The Mail Settings You Need To Restart Your Supervisor From Your Server
QUEUE COMMAND Path : /home/u186958312/domains/maanai.acnoo.com/public_html/maanai
QUEUE COMMAND : php artisan queue:work
                </p>

            <div className='w-full my-7'>
                <div className='w-52 text-white rounded-lg h-12 bg-purple-600 flex justify-center items-center m-auto '>

                <p>Update</p>
                </div>
            </div>
            </div>


}

            {/* Otherssssss */}



{Others &&

            <div className='  p-4 widthapp shadow-lg rounded '>
                <p htmlFor="">CACHE_LIFETIME</p><br />
                <input className='w-full border rounded-lg h-12' type="text" /><br />
                <p className='mt-3' htmlFor="">TIMEZONE</p><br />
                <select className='w-full border rounded-lg h-12' name="" id="">
                    <option value="">Africa/Abidjan</option>
                    <option value="">Africa/Accra</option>
                    <option value="">Africa/Adis_Ababa</option>
                    <option value="">Africa/Adis_Ababa</option>
                    <option value="">Africa/Adis_Ababa</option>
                    <option value="">Africa/Adis_Ababa</option>
                    <option value="">Africa/Adis_Ababa</option>
                    <option value="">Africa/Adis_Ababa</option>
                    <option value="">Africa/Adis_Ababa</option>
                    <option value="">Africa/Adis_Ababa</option>
                    <option value="">Africa/Adis_Ababa</option>
                    <option value="">Africa/Adis_Ababa</option>
                    <option value="">Africa/Adis_Ababa</option>
                    <option value="">Africa/Adis_Ababa</option>
                    <option value="">Africa/Adis_Ababa</option>
                    <option value="">Africa/Adis_Ababa</option>
                    <option value="">Africa/Adis_Ababa</option>
                    <option value="">Africa/Adis_Ababa</option>
                    <option value="">Africa/Adis_Ababa</option>
                </select>
               

            <div className='w-full my-7'>
                <div className='w-52 text-white rounded-lg h-12 bg-purple-600 flex justify-center items-center m-auto '>

                <p>Update</p>
                </div>
            </div>
            </div>

}


        </div>
      </div>
    </div>

    
    </div>
  )
}

export default SystemSetting