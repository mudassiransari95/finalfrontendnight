import React, { useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'




const EditOrderlist = ({seteditdata,allorderdata}) => {

  const id=useLocation()
  console.log('iddddddddd',id.state)

  const navigate=useNavigate()
const [data, setdata] = useState({
  orderNo:'',
  image:'',
  party:'',
merchandiser:'',
    gsm:'',
shipMode:'',
payMode:'',
   year:'',
 season:'',
totalQty:'',
totalUnitPrice:'',
totalValue:'',
 status:''
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


  const handleEdit=async()=>{
const res=await fetch(`http://localhost:8080/order/update/${id.state}`,{
  method:'put',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(data)
})
const resdata=await res.json()
console.log('edit data',resdata)
navigate('/orderlist')
  }

  return (
    <form className=' px-5 ' style={{height:"100%",width:"100%"}}>
         <div className='w-auto mt-3 h-10 flex flex-row justify-between '> 
<h1 className='fw-bold'>Update Order</h1>
<div className='sub-div w-80 h-10'>
<button className='w-28  text-white ms-3 h-10 bg-purple-700 ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Orderlist</button>
<button className='w-40 h-10 ms-8 ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Update Order list</button>
</div>
      </div>
      <hr className='bg-slate-700  w-100 mt-3'/>
      <div className='w-auto h-16 flex flex-row  gap-10 ms-2' style={{height:"100vh"}}>
        {/* main div */}
<div className=' w-96 sub-div  mt-4 flex flex-col gap-2'> 
<div className='w-auto h-20  flex flex-col'>
    {/* <label>Party name</label> */}
    <p className='w-32 mb-1 text-black pt-2 ' style={{fontSize:"13px"}}>Party name</p>
    <div className='w-full flex'>
<select onChange={handleOnchange}  name='party' value={data.party} className=" h-11 w-full rounded-l-md"style={{border:"1px solid  grey",outline:"none" }}>
    <option selected>Select a Party</option>
    <option>000-B-2 (01752220026)</option>
    <option >NR (4234242342)</option>
    <option>RGB Textile()</option>
    <option>Line-2</option>
    <option>Line-1</option>
    <option>LC Waikiki()</option>
</select>
<div className='w-16 h-11 text-5xl flex justify-center items-center  text-white bg-purple-900 rounded-r-md'>
 <p className='mb-2'> +</p>
  </div>

</div>
</div>
{/* order No */}

<div className='h-20  w-full    flex flex-col '>
  <p className='w-32 mb-1 text-black pt-2 ' style={{fontSize:"13px"}}>Order No</p>
  <input  onChange={handleOnchange} name='orderNo' value={data.orderNo} type='text' placeholder='order no' className='w-full px-2 h-11' style={{outline:"none"}} />
  </div>


  <div className='h-20  w-full    flex flex-col '>
  <p className='w-32 mb-1 text-black pt-2 ' style={{fontSize:"13px"}}>order Description</p>
  <input type='text' placeholder='order Description' className='w-full px-2 h-11' style={{outline:"none"}} />
  </div>


 <div className='h-20  w-full    flex flex-col '>
  <p className='w-32 mb-1 text-black pt-2 ' style={{fontSize:"13px"}}>GSM</p>
  <input  onChange={handleOnchange}  name='gsm' value={data.gsm} type='text' placeholder='GSM' className='w-full px-2 h-11' style={{outline:"none"}} />
  </div>


  <div className=' h-20  w-full    flex flex-col '>
    <p className='w-32 mb-1 text-black pt-2' style={{fontSize:"13px"}}>Contact Date</p>
  <input  type='date' placeholder='Enter Payment Mode' className='w-full px-2 text-start h-11 ' style={{outline:"none"}} />
  </div>


  <div className='h-20  w-full    flex flex-col '>
  <p className='w-32 mb-1 text-black pt-2 ' style={{fontSize:"13px"}}>Port Of landing</p>
  <input type='text' placeholder='Port Of landing' className='w-full px-2 h-11' style={{outline:"none"}} />
  </div>


  <div className='h-20  w-full    flex flex-col '>
  <p className='w-32 mb-1 text-black pt-2 ' style={{fontSize:"13px"}}>Remarks</p>
  <input type='text' placeholder='Remarkd' className='w-full px-2 h-11' style={{outline:"none"}} />
  </div>

</div>







{/* second-col */}
<div className=' w-96 sub-div ms-2 mt-4 flex flex-col gap-2'> 
<div className='h-20  w-full    flex flex-col '>
    {/* <label>Party name</label> */}
    <p className='w-32 mb-1 text-black pt-2 ' style={{fontSize:"13px"}}>Merchandiser name</p>
    <div className='w-full flex'>

<select  onChange={handleOnchange} name='merchandiser' value={data.merchandiser} className=" h-11 w-full rounded-l-md"style={{border:"1px solid  grey" }}>
    <option selected>Select a Merchandiser
    </option>
    <option>Marlon Marlon Morales</option>
    <option >Merchandiser</option>
   
</select>
<div className='w-16 h-11 text-5xl flex justify-center items-center  text-white bg-purple-900 rounded-r-md'>
 <p className='mb-2'> +</p>
  </div>
    </div>
</div>
{/* order No */}
<div className='h-20  w-full    flex flex-col '>
  <p className='w-32 mb-1 text-black pt-2 ' style={{fontSize:"13px"}}>Enter order title</p>
  <input type='text' placeholder='enter order title' className='w-full px-2 h-11' style={{outline:"none"}} />
  </div>



  <div className='h-20  w-full    flex flex-col '>
  <p className='w-32 mb-1 text-black pt-2 ' style={{fontSize:"13px"}}>Enter Fabricane</p>
  <input type='text' placeholder='Enter Fabrication Name' className='w-full px-2 h-11' style={{outline:"none"}} />
  </div>




  <div className='h-20  w-full    flex flex-col '>
  <p className='w-32 mb-1 text-black pt-2 ' style={{fontSize:"13px"}}>Enter Yarn</p>
  <input type='text' placeholder='Enter Yarn Count' className='w-full px-2 h-11 '  style={{outline:"none"}}/>
  </div>



  <div className='h-20  w-full    flex flex-col '>
  <p className='w-32 mb-1 text-black pt-2 ' style={{fontSize:"13px"}}>Bank Account</p>
  <div className='flex '>

<select className='w-full px-2 h-11  rounded-l-md' style={{border:"1px solid  grey" }}>
    <option selected>Select a Account</option>
    <option>h (565757)</option>
</select>
<div className='w-16 h-11 text-5xl flex justify-center items-center  text-white bg-purple-900 rounded-r-md'>
 <p className='mb-2'> +</p>
  </div>
    
  </div>
</div>
<div className='h-20  w-full    flex flex-col  '>
<p className='w-32 mb-1 text-black pt-2' style={{fontSize:"13px"}}>Enter Pantone</p>
  <input type='text' placeholder='Enter Pantone' className='w-full px-2 h-11' style={{outline:"none"}} />
  </div>


  <div className=' h-20  w-full    flex flex-col '>
    <p className='w-32 mb-1 text-black pt-2' style={{fontSize:"13px"}}>Expiry Date</p>
  <input type='date' placeholder='Enter Payment Mode' className='w-full px-2 text-start h-11 ' style={{outline:"none"}} />
  </div>
</div>
{/* Third col */}



<div className=' w-96  sub-div ms-2 mt-4  flex flex-col gap-2'> 
<div className='  ms-2  flex flex-row' style={{width:""}}>
<div id="uploadone" name="im" className=" mt-2 ">
    <p className=' ms-2'>    Upload Item Image </p>
  <input  onChange={handleOnchange} name='image' value={data.image} type="file"  id="uploadone" accept="image/*" placeholder='helllllllllllllllllllllllllllllllll' className="" data-id="image" />
  <i><img src="https://erpsoftware.acnoo.com/assets/images/icons/upload.png" id="im" className="h-56 w-80 " style={{border:"2px solid  grey",borderRadius:"10px"}} /></i>
</div>
</div>




{/* order No */}



<div className='h-20  w-full    flex flex-col  '>
<p className='w-32 mb-1 text-black pt-2' style={{fontSize:"13px"}}>Enter Shipment Mode</p>
  <input  onChange={handleOnchange} name='shipMode' value={data.shipMode} type='text' placeholder='Enter Shipment Mode' className='w-full px-2 h-11' style={{outline:"none"}} />
  </div>

  <div className='h-20  w-full    flex flex-col  '>
<p className='w-32 mb-1 text-black pt-2' style={{fontSize:"13px"}}>Enter Year</p>
  <input  onChange={handleOnchange} name='year' value={data.year} type='text' placeholder='Enter year' className='w-full px-2 h-11' style={{outline:"none"}} />
  </div>

  
  <div className='h-20  w-full    flex flex-col  '>
<p className='w-32 mb-1 text-black pt-2' style={{fontSize:"13px"}}>Cosignee & Notify</p>
  <input type='text' placeholder='Cosignee & Notify' className='w-full px-2 h-11' style={{outline:"none"}} />
  </div>


  <div className='h-20  w-full    flex flex-col  '>
<p className='w-32 mb-1 text-black pt-2' style={{fontSize:"13px"}}>Negotiation  Period</p>
  <input type='text' placeholder='Negotiation  Period' className='w-full px-2 h-11' style={{outline:"none"}} />
  </div>

 
</div>


      </div> 



      {/* table */}
   <table className=" w-auto ms-6 mt-5 table table-two daily-production-table-print " id="erp-table">
  <thead>
    <tr>
      <th><strong>STYLE</strong></th>
      <th><strong>COLOR</strong></th>
      <th><strong>ITEM</strong></th>
      <th><strong>SHIPMENT DATE</strong></th>
      <th><strong>QTY</strong></th>
      <th><strong>UNIT PRICE</strong></th>
      <th><strong>TTL PRICE</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr className="position-relative">
      <td><div className="add-btn-one"><i className="fal fa-plus" aria-hidden="true" /></div></td>
      <td><div className="tr-remove-btn remove-one" style={{display: 'none'}}><i className="fas fa-trash" /></div></td>
    </tr>
    <tr className="duplicate-one">
      <td><input type="text" name="style[]" className="form-control style clear-input" required placeholder="Style" /></td>
      <td><input type="text" name="color[]" className="form-control color clear-input" placeholder="Color" /></td>
      <td><input type="text" name="item[]" className="form-control item clear-input" placeholder="Item description" /></td>
      <td><input type="date" name="shipment_date[]" defaultValue="2024-07-30" required className="form-control shipment_date clear-input" /></td>
      <td><input  onChange={handleOnchange}  name='totalQty' value={data.totalQty} type="number"  className="form-control count-length qty 0" data-length={0} required placeholder="Qty" /></td>
      <td><input  onChange={handleOnchange}  name='totalUnitPrice' value={data.totalUnitPrice}  type="number" className="form-control count-length unit_price 0" data-length={0} required placeholder="Unit price" /></td>
      <td><input type="number" name="total_price[]" className="form-control total_price 0" placeholder="Total price" readOnly data-length={0} defaultValue={0} /></td>
    </tr>
    <tr className="total">
      <td colSpan={4}><h6 className="text-end">Total</h6></td>
      <td><h6 className="total_qty">0</h6></td>
      <td><h6 className="total_unit_price">0</h6></td>
      <td><h6 className="final_total_price">0</h6></td>
    </tr>
  </tbody>
</table>
<div className=' w-96 mt-3 flex flex-row gap-3 ms-96'>
    <Link to={'/orderlist'}  className=' btn btn-join w-48 h-11 bg-white' style={{borderRadius:"5px",border:"1px solid black"}}>Cancel</Link>
    <button onClick={handleEdit} className='w-48 h-11 text-white bg-purple-500' style={{borderRadius:"5px"}}>Save</button>

</div>

    </form>
  )
}

export default EditOrderlist
