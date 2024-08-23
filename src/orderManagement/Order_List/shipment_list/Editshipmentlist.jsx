import React, { useState } from 'react'
import { LuPrinter } from "react-icons/lu";
import { GrDocumentText } from "react-icons/gr";
import { FaFilePdf } from "react-icons/fa6";
import { FaFileCsv } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Editshipmentlist = () => {
    const location=useLocation()
    console.log('location',location)
 const navigate=useNavigate()

  const [data, setdata] = useState({
    orderNo:'',
   
    InvoiceNo:'',
    Creater:'',
    TotalQty:'',

    TotalCM:''
 
  });
  console.log(data)
    const handleOnchange=(e)=>{
      const {name,value}=e.target
      console.log(value)
      
      setdata((preve)=>{
        // console.log(preve)
        return {
          ...preve,
          
          [name]:value
        }
      })
        }
  
    const handleSubmit=async()=>{


// getallshipment
  
  const res=await fetch(`http://localhost:8080/api/updateshipmentdata/${location.state}`,{
    method:'put',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(data)
  })
  const resdata=await res.json()
  console.log('booking',resdata)
  navigate('/shipmentlist')
    }
  

  return (
    <div className='w-100 h-screen pt-3 d-flex flex-col px-5'>
        
      <div className='w-100 h-10 flex flex-row justify-between '> 
<h1 className='fw-bold'style={{fontSize:"22px"}}>Edit Shipment list</h1>

<div className='link-box w-80 h-10 flex flex-row  me-5 gap-5'style={{border:"1px solid purple",borderLeft:"none",borderRight:"none",borderTop:"none"}}> 
<Link to='/shipmentlist' className='ordersummary h-10 w-60 pl-7 pt-2 pr-1  text-white bg-purple-500'>Shiment List
</Link>
<Link to='/addnewshipment'className='ordersummary h-10 w-60 pl-2 pt-2 text-white bg-purple-500'> Edit Shipment list
</Link>
</div>
      </div>
      <hr className='bg-slate-700  w-75 mt-3'/>
      <div className='result-up w-100 pl-40   mt-6 d-flex flex-row justify-between'>
<div className='w-auto  flex flex-row gap-4'>
<select onChange={handleOnchange} name='orderNo' value={data.orderNo} className="select h-9 w-80 pl-2 "style={{border:"1px solid  grey", borderRadius:"0.4rem"}}>
    <option selected>    Select  a Order
    </option>
    <option>0000002</option>
    <option>0000002</option>
    <option>0000002</option>
    <option>0000002</option>
   
</select>
<input type='text'  placeholder='party name' className=" w-80 h-9 pl-3" style={{border:"1px solid grey",borderRadius:"0.4rem"}} />

</div>



      </div>

      
{/* nfgvdjkfvbdfb */}

<div className='flex gap-3 mt-4 mx-auto'>
  <div>
    <div>
      <p>style</p>
      <input  className='w-64 h-10' type="text" />
    </div>
    <div className='mt-3'>
      <p>color</p>
      <input className='w-64 h-10' type="text" />
    </div>
  </div>
  <div>
    <div>
      <p>item</p>
      <input className='w-64 h-10' type="text" />
    </div>
    <div className='mt-3'>
      <p>shipment</p>
      <input className='w-64 h-10' type="date" />
    </div>
  </div>
  <div>
    <div>
      <p>size</p>
      <input className='w-64 h-10' type="text" />
    </div>
    <div className='mt-3'>
      <p>Garment Qty</p>
      <input onChange={handleOnchange} name='TotalQty' value={data.TotalQty} className='w-64 h-10' type="text" />
    </div>
  </div>
</div>
      <div className=' w-96 flex  gap-3 mx-auto mt-5' >
    <Link to={'/shipmentlist'} className=' btn btn-join w-48 h-11 bg-white' style={{borderRadius:"5px",border:"1px solid black"}}>Cancel</Link>
    <button onClick={handleSubmit} className='w-48 h-11 text-white bg-purple-500' style={{borderRadius:"5px"}}>Save</button>

</div>

    </div>
  )
}

export default Editshipmentlist
