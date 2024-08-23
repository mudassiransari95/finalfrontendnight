import React, { useEffect, useState } from 'react'
import { FaBars, FaEdit } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaUserAlt } from 'react-icons/fa';
import { GrDocumentPdf } from 'react-icons/gr';
import { BsFiletypeScss } from 'react-icons/bs';
import { FiPrinter } from 'react-icons/fi';
import { PiArrowCounterClockwise } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { HiDotsVertical } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
const PurchaseReport = () => {
const [alldata, setalldata] = useState([]);
    const [showProfile, setshowProfile] = useState(false);
    const getallpurchase=async()=>{
      const res=await fetch('http://localhost:8080/api/getallpurchasereport')
      const getdata=await res.json()
      console.log('purchaesssssssssss',getdata)
      setalldata(getdata.data)
    }
    
  const handledelete=async(id)=>{
    console.log('id',id)

  
    const res=await fetch(`http://localhost:8080/api/deletepurchasereportdata/${id}`,{
      method:'delete',
    })
    const response=await res.json()
    console.log('response',response)
    getallpurchase()
  }
    useEffect(()=>{
      getallpurchase()
    },[])
    
  return (
    <div>
        <div className='w-full nav  h-16 bg-gray-100  flex  items-center justify-between px-3' >
        <div>
        <FaBars className='mt-2 ms-2' />
        </div>
        <div  className='flex items-center gap-3'>

      <div className=' flex flex-row gap-4 text-4xl '>
      <IoMdNotificationsOutline  />
      </div>

      <div className='w-12 h-12 bg-slate-400 pl-2 pt-2 m-52b-2 relative' style={{borderRadius:"50%"}}>
<FaUserAlt className='pb-1' style={{fontSize:"33px"}} onClick={()=>setshowProfile((preve)=>!preve)}/>

{ showProfile && <div className='grid grid-rows-3 bg-white shadow-md text-sm h-24 w-40 absolute -left-28 top-14  z-50 '>
    <div className='border flex items-center gap-2 px-2'>
        <p><PiArrowCounterClockwise/></p>
        <p>Clear catch</p>
    </div>
    <div className='border flex items-center gap-2 px-2'>
        <p><FaUser/></p>
        <p>My Profile</p>
    </div>
    <div className='border flex items-center gap-2 px-2'>
        <p><FaArrowRightFromBracket/></p>
        <p>Logout</p>
    </div>

</div>}

</div>
        </div>

      </div>
      {/* inner divjnfdvjkdshfjv */}

      <div className='w-full px-4'>

      <div className='w-full h-20 flex items-center text-lg'>
<p>Purchase Invoice Reports</p>
      </div>
      <hr className='bg-slate-700  w-full px4' />




      <div className=' flex justify-between items-center gap-4 mt-7 px-4 h-10'>
    <div className='flex gap-4'>
      <div className='flex items-center gap-3'>
        <p>From</p>
      <input type='date' className=" h-8 w-36 " style={{ border: "1px solid  grey", outline: "none", borderRadius: "5px" }}/>
      </div>
      <div className='flex items-center gap-3'>
        <p>To</p>
      <input type='date' className=' h-8 w-36 ' placeholder='Search...' style={{ border: "1px solid grey", borderRadius: "5px" }} />
       
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
        <th>Date</th>
        <th>Party Name</th>
       
        <th>Party Type</th>
        <th>Category Name</th>
        <th>Total Bill</th>
        <th>Total Paid</th>
        <th>Total Due</th>
        <th>Status</th>
        <th>Action</th>
        </tr>
      </thead>
      <tbody>

        {
          alldata.map((ele,index)=>{
            return(
              <tr>
<td>{index+1}</td>
    <td>2024</td>
<td>{ele.PartyName}</td>
<td>{ele.PartyType}</td>
<td>{ele.Category}</td>
<td>{ele.TotalBill}</td>
<td>{ele.TotalPaid}</td>
<td>{ele.TotalDue}</td>
<td>completed</td>
<td  className='flex items-center h-12 gap-1'>  
                            <Link state={ele._id}  className='w-6 hover:bg-green-200 h-6 flex justify-center items-center bg-green-100'>
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

export default PurchaseReport