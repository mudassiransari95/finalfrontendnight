import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaBars, FaFileCsv } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { BsFiletypeScss } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { FiPrinter } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import Addnewbudget from './Addnewbudget';
import { FaEdit } from "react-icons/fa";
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { FaFilePdf } from 'react-icons/fa6';
import { LuPrinter } from 'react-icons/lu';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';
import EditBudgetlist from './EditBudgetlist';
import createcontext from '../../../store/CreateStore';

const Budget_list = () => {
  const context=useContext(createcontext)
  console.log(context)
  const [addnewbudget, setaddnewbudget] = useState(false)
  const [editdata, seteditdata] = useState(false)
  const [getid, setgetid] = useState()
 
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  // print tablenmfnjidsgdf
 
  const handlePdf=async()=>{

    const doc = new jsPDF()
    doc.autoTable({ html: '.table' })
    doc.save('table.pdf')
  }

  // download pdf table


const [alldata, setalldata] = useState([]);

  
  const handlegetalldata=async()=>{

   const res=await fetch('http://localhost:8080/budget/getAllBudget')

   
   const resdata=await res.json()
   setalldata(resdata.allBudgetList)
   console.log('budget',resdata)
     }
     const handledelete=async(id)=>{
      console.log('id',id)
    
      const res=await fetch(`http://localhost:8080/budget/delete/${id}`,{
        method:'delete',
      })
      const response=await res.json()
      console.log('response',response)
      handlegetalldata()
    }
const [hello, sethello] = useState('');
   const handleid=(id)=>{
    sethello(id)
    console.log('lllllllllllllllll',hello)
  
  
 
  }

useEffect(()=>{
  handlegetalldata()
},[])

  return (
    <div>




   <div className='w-full mt-3 h-10 flex px-3 justify-between '>
        <h3 className='ms-4  ' style={{ fontSize: "25px" }}>Budget List</h3>
        <div className='sub-div w-auto h-10 ' style={{ border: "2px solid purple", borderLeft: "none", borderRight: "none", borderTop: "none" }}>
        <button className='w-40 h-10  bg-purple-700 text-white' style={{ border: "1px solid purple", borderTop: "none", borderRight: "none", borderLeft: "none" }}>Budget List</button>

          <Link to={'/addnewbudget'} className='w-40 h-10 ' style={{ border: "1px solid purple", borderTop: "none", borderRight: "none", borderLeft: "none" }} >Add New Budget</Link>

        </div>

      </div>
  <hr className='bg-slate-700  w-full mt-3' />
    







     




  <div>

 
     
      <div className=' flex justify-between items-center gap-4 mt-7 px-4 h-10'>
    <div className='flex gap-4'>
      <div>
      <select className=" h-8 w-36 " style={{ border: "1px solid  grey", outline: "none", borderRadius: "5px" }}>
          <option >All Result</option>
          <option>Per Page-30</option>
          <option >Per Page-50 </option>
          <option >Per Page-100  </option>
        </select>
      </div>
      <div>
      <input type='text' className=' h-8 w-36 font-bold' placeholder='Search...' style={{ border: "1px solid grey", borderRadius: "5px" }} />
       
      </div>
    </div>
    
    <div className='flex gap-2'>
    <LuPrinter onClick={handlePrint} className='text-red-400' style={{fontSize:"20px"}} />

<LuPrinter onClick={handlePrint} className='text-green-400'  style={{fontSize:"20px "}} />
<FaFilePdf onClick={handlePdf} className='text-purple-500' style={{fontSize:"20px"}} />
<FaFileCsv  className='text-pink-400' style={{fontSize:"20px"}}/>

        </div>
      </div>




{/* table section  */}
    <div className='w-full mt-5 '>
    <table ref={componentRef} className="table w-full border">
  <thead>
    <tr className='border h-10 bg-slate-100'>
      <th>SL.</th>
      <th>Order No.</th>
      <th>Party Name</th>
      <th>Type</th>
      <th>Style</th>
      <th>Total Qty</th>
      <th>Avg. / Unit Price</th>
      <th>Total Value</th>
      <th>status</th>
      <th>action</th>
    </tr>
  </thead>
  <tbody>
    {
      alldata.map((ele,index)=>{
        return(
          <tr className='border h-9 text-sm'>
    <td>{index+1}</td>
    <td>{ele.orderNo}</td>
   
    <td>{ele.partyName}</td>
    <td>{ele.type}</td>
    <td>{ele.style}</td>
    <td>{ele.totalQty}</td>
    <td>{ele.avgUnitPrice}</td>
    <td>{ele.totalValue}</td>
          <td className=''><p className='w-16 rounded text-xs flex justify-center items-center bg-blue-600 text-white'>Approved </p> </td>
          <td  className='flex items-center h-12 gap-1'>  
                            <Link state={ele._id} to={'/editbudgetlist'} className='w-6 hover:bg-green-200 h-6 flex justify-center items-center bg-green-100'>
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

    

    

{addnewbudget && <Addnewbudget />} 
{ editdata && <EditBudgetlist   handlegetalldata={handlegetalldata} id={getid} />}
    </div> 
  )
}

export default Budget_list
