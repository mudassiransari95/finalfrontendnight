import React, { useEffect, useRef, useState } from 'react'
import { LuPrinter } from "react-icons/lu";
import { GrDocumentText } from "react-icons/gr";
import { FaFilePdf } from "react-icons/fa6";
import { FaFileCsv } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiDotsVertical } from "react-icons/hi";
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf'
import 'jspdf-autotable'

const SearchSamplelist = () => {
    const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
    // prinst documeent bjfjhbdfjgvdfbgfdb
 
    const handlePdf=async()=>{

        const doc = new jsPDF()
        doc.autoTable({ html: '.table' })
        doc.save('table.pdf')
      }
    
    // download pdf jbhdfjkdg
    const [value, setvalue] = useState('');
  const query=useLocation()
  console.log(query.search)
  const navigate=useNavigate()
  const [alldata, setalldata] = useState([]);
 const handleGetAllData=async()=>{

  
  const res=await fetch('http://localhost:8080/api/getallsample')
  const data=await res.json()
  setalldata(data.data)
  // console.log('hello sir',data.data);
 }

 const handleSearch=(e)=>{
  const {value}=e.target
  setvalue(value)
  if(value){
navigate(`/search?q=${value}`)
  }else {
    navigate('/search')
  }
}
const search=async()=>{
    const res=await fetch(`http://localhost:8080/api/searchsample${query.search}`)
    const data=await res.json()
    setalldata(data.data)
    console.log(data.data)
}
useEffect(()=>{
    handleGetAllData()
},[])
useEffect(()=>{
    search()
},[value])
  return (
    <div className='w-100 h-screen pt-3 d-flex flex-col px-5'>
        
      <div className='w-100 h-10 flex  justify-between '> 
<h1 className='fw-bold'style={{fontSize:"22px"}}>Sample List</h1>

<div className='link-box w-80 h-10 flex  gap-5'style={{border:"1px solid purple",borderLeft:"none",borderRight:"none",borderTop:"none"}}> 
<Link to='/samplelist' className='ordersummary h-10 w-40 pl-7 pt-2 text-white bg-purple-500'>Sample List
</Link>
<Link to='/addnewsample'className='ordersummary h-10 w-40 pl-5 pt-2 text-white bg-purple-500'> Add New Sample
</Link>
</div>
      </div>
      <hr className='bg-slate-700  w-full mt-3'/>
      <div className='result-up w-100  mt-4 d-flex flex-row justify-between'>
<div className='w-50  flex flex-row gap-4'>
<select className="select h-9 w-56 pl-2 "style={{border:"1px solid  grey", borderRadius:"0.4rem"}}>
    <option selected>    Select Per Page
    </option>
    <option>Per Page-10</option>
    <option >Per Page-30</option>
    <option>Per Page-50</option>
    <option>Per Page-100</option>
</select>
<input type='text' onChange={handleSearch}  placeholder='Search' className=" w-56 h-9 pl-3" style={{border:"1px solid grey",borderRadius:"0.4rem"}} />
</div>
<div className='w-80 flex flex-row justify-center gap-5 pt-3'>
<LuPrinter onClick={handlePrint} className='text-red-400' style={{fontSize:"20px"}} />

<LuPrinter onClick={handlePrint} className='text-green-400'  style={{fontSize:"20px "}} />
<FaFilePdf onClick={handlePdf} className='text-purple-500' style={{fontSize:"20px"}} />
<FaFileCsv  className='text-pink-400' style={{fontSize:"20px"}}/>

</div>
      </div>
<div className='w-auto mt-3  ' style={{background:"whitesmoke"}}>
<table ref={componentRef} className="table  mt-4 bg-white">
  <thead>
    <tr>
      <th scope="col">SL.</th>
      <th scope="col">Order No.</th>
      <th scope="col">Consignee</th>
      <th scope="col">Style No.</th>
      <th scope="col">Item</th>
      <th scope="col">Sample Type</th>
      <th scope="col">Garments Qty</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {alldata.map((ele,index)=>{
      return(
<tr className='h-12 w-full bg-red-500'>
      <th className='bg-red-500' scope="">{index+1}</th>
      <td>{ele.OrderNo}</td>
      <td>{ele.Consignee}</td>
      <td>{ele.Style}</td>
      <td>{ele.Items}</td>
      <td>{ele.SampleType}</td>
      <td>{ele.GarmentsQty}</td>
      <td>pending</td>
      <td className='text-center bg-red-500'><HiDotsVertical/></td>
     
    </tr> 
      )
    }) }
  
  </tbody>
</table>
</div>
    </div>
  )
}

export default SearchSamplelist
