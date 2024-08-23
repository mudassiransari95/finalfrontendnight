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
const Order = () => {
  
    const [showProfile, setshowProfile] = useState(false);
const [alldata, setalldata] = useState([]);
    const getallorder=async()=>{
      const res=await fetch('http://localhost:8080/api/getallorderdata')
      const getdata=await res.json()
      console.log('getdatakkkkkkkkkkkkkkkkkkkkkkkk',getdata)
      setalldata(getdata.data)
    }
    useEffect(()=>{
      getallorder()
    },[])
  return (
    <div>
       
      {/* inner divjnfdvjkdshfjv */}

      <div className='w-full px-4'>

      <div className='w-full h-20 flex items-center '>
<p>Order Report</p>
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
        <th>Image</th>
        <th>Order No.</th>
        <th>Party Name</th>
        <th>Party Type</th>
        <th>merchandiser</th>
        <th>Dept</th>
        <th>GCM</th>
        <th>shipment Mode</th>
        <th>payment mode</th>
        <th>Year</th>
        <th>Season</th>
        <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {
          alldata.map((ele,index)=>{
            return(
              <tr className='w-full h-12'>
                  <td>{index+1}</td>
                  <td></td>
                  <td></td>            
                  <td></td>
                  <td>{ele.PrtyName}</td>
                  <td>{ele.PartyType}</td>
                  <td>{ele.Merchendiser}</td>
                  <td>{ele.Dept}</td>
                  <td>{ele.GCM}</td>
                  <td>{ele.ShipmentMode}</td>
                  <td>{ele.PaymentMode}</td>
                  <td></td>
                  <td>{ele.Season}</td>
                  <td>{ele.Status}</td>
          
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

export default Order