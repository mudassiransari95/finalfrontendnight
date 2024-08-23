import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { BsFiletypeScss } from "react-icons/bs";
import { Link, useNavigate, useLocation } from 'react-router-dom';
const EditBudgetlist = ({id,handlegetalldata}) => {
console.log('idjjkdscfid',id)
const navigate=useNavigate()

  const location =useLocation()
  console.log(location.state)


  const [data, setdata] = useState({
    orderNo:'',
   
    partyName:'',
    style:'',
  type:'',

  totalQty:'',
  avgUnitPrice:'',
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
  
    const handleSubmit=async()=>{

  const res=await fetch(`http://localhost:8080/budget/update/${location.state}`,{
    method:'put',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(data)
  })
  const resdata=await res.json()
  console.log('budget',resdata)
  navigate('/budget_list')
    }
 const handlecancel=()=>{
  navigate('/budget_list')
 } 


  return (
    <div className='w-full bg-red ' style={{height:"100%"}}>
      

   <div className='w-full mt-3 h-10 flex px-3 justify-between '>
        <h3 className='ms-4  ' style={{ fontSize: "25px" }}>Edit List</h3>
        <div className='sub-div w-auto h-10' style={{ border: "2px solid purple", borderLeft: "none", borderRight: "none", borderTop: "none" }}>
        <Link to={'/budget_list'} className='w-48 h-10  bg-purple-700 text-white'>Budget List</Link>

        </div>

      </div>
  <hr className='bg-slate-700  w-full mt-3' />

      <div className='w-auto h-16 flex flex-row  gap-10 ms-2' style={{height:"100vh"}}>
        {/* main div */}
<div className=' w-96 sub-div  mt-4 flex flex-col gap-3'> 
<div className='w-96  flex flex-row'>
    {/* <p>Party name</p> */}
<select onChange={handleOnchange} name='orderNo' value={data.orderNo} className="select  text h-11 w-96 "style={{border:"1px solid  grey",outline:"none" }}>
    <option selected>Select a  Order No
    </option>
    <option>0000005</option>
    <option >0000003</option>
    <option >0000002</option>
    <option >0000001</option>

  


</select>
</div>
<div className='w-96'>
    {/* <p>Party name</p> */}
    <p className='   mt-1 pt-2' style={{fontSize:"13px"}}>select order first</p>
<select className="select text-center h-11 w-96 "style={{border:"1px solid  grey",outline:"none" }}>
    <option selected>Select Order First
    </option>
    <option>Style(Select Order First)</option>
</select>
</div>
<div className='w-auto '>
    <p className='   mt-1 pt-2' style={{fontSize:"13px"}}>Pre Costing Date</p>
  <input type='date' placeholder='Enter Booking date' className='w-full text-center h-10 ' style={{outline:"none",}} />
  </div>
  <div className='w-auto '>
    <p className='   mt-1 pt-2' style={{fontSize:"13px"}}>Post Costing Date</p>
  <input type='date' placeholder='Enter Booking date' className='w-full text-center h-10 ' style={{outline:"none",}} />
  </div>
  <div className='w-auto '>
    <p className='   mt-1 pt-2' style={{fontSize:"13px"}}>Process loss</p>
  <input type='text' placeholder='process loss' className='w-full text-center h-10 ' style={{outline:"none",}} />
  </div>
  <div className='w-auto '>
    <p className='   mt-1 pt-2' style={{fontSize:"13px"}}>Rib</p>
  <input type='text' placeholder='enter rib' className='w-full text-center h-10 ' style={{outline:"none",}} />
  </div>

</div>
{/* second-col */}
<div className=' w-96 sub-div ms-2  flex flex-col gap-3'> 

<div className='w-auto '>
    <p className='   mt-1 pt-2' style={{fontSize:"13px"}}>Payment Mode</p>
  <input type='text' placeholder='enter rib' className='w-full text-center h-10 ' style={{outline:"none",}} />
  </div>
  <div className='w-auto '>
    <p className='   mt-1 pt-2' style={{fontSize:"13px"}}>Party Name</p>
  <input onChange={handleOnchange} name='partyName' value={data.partyName} type='text' placeholder='party name' className='w-full text-center h-10 ' style={{outline:"none",}} />
  </div>
  <div className='w-auto '>
    <p className='   mt-1 pt-2' style={{fontSize:"13px"}}>Color</p>
  <input type='color' placeholder='' className='w-full text-center h-10 ' style={{outline:"none",}} />
  </div>
  <div className='w-auto '>
    <p className='   mt-1 pt-2' style={{fontSize:"13px"}}>Shipment Date</p>
  <input type='date' placeholder='' className='w-full text-center h-10 ' style={{outline:"none",}} />
  </div>
  <div className='w-auto '>
    <p className='   mt-1 pt-2' style={{fontSize:"13px"}}>Quantity</p>
  <input  onChange={handleOnchange} name='totalQty' value={data.totalQty} type='number' placeholder='enter booking date' className='w-full text-center h-10 ' style={{outline:"none",}} />
  </div>
  <div className='w-auto '>
    <p className='   mt-1 pt-2' style={{fontSize:"13px"}}>Unit Price</p>
  <input onChange={handleOnchange} name='avgUnitPrice' value={data.avgUnitPrice} type='number' placeholder='enter booking date' className='w-full text-center h-10 ' style={{outline:"none",}} />
  </div>
  <div className='w-auto '>
    <p className='   mt-1 pt-2' style={{fontSize:"13px"}}>LC value</p>
  <input onChange={handleOnchange} name='totalValue' value={data.totalValue} type='number' placeholder='enter booking date' className='w-full text-center h-10 ' style={{outline:"none",}} />
  </div>
</div>
{/* Third col */}
<div className='mb-4 w-96 bg-white sub-div ms-2 mt-1  flex flex-col gap-5'> 
<div className='w-96    flex flex-row' >
<p htmlFor="upload" className="upload-img mt-2">
    <p className=' ms-2'>    Upload Item Image
    </p>
  <input type="file" name="image" id="upload" accept="image/*" className="d-none file-input-change" data-id="image" />
  <i><img src="https://erpsoftware.acnoo.com/assets/images/icons/upload.png" id="image" className="img-preview h-48 w-96 " style={{border:"2px solid  grey",borderRadius:"10px"}} /></i>
</p>



</div>


</div>


      </div> 
   

{/* table */}
<div className="responsive-table m-0">
  <table className="table table-bordered small-table">
    <thead>
      <tr>
        <th>Accessories - Description</th>
        <th>supplier name</th>
        <th>unit price ($)</th>
        <th>unit (in number)</th>
        <th>Consumption/ Pc</th>
        <th>W%</th>
        <th>Total Qty</th>
        <th>Total Cost</th>
        <th>pre-Cost%</th>
      </tr>
    </thead>
    <tbody>
      <tr className="position-relative">
        <td><div className="add-btn-six"><i className="fal fa-plus" aria-hidden="true" /></div></td>
        <td><div className="tr-remove-btn remove-six"><i className="fas fa-trash" /></div></td>
      </tr>
      <tr className="duplicate-six">
        <td><input type="text" name="accessories_desc[accessories_des][]" className="form-control clear-input" placeholder="Accessories" /></td>
        <td><input type="text" name="accessories_desc[supplier_name][]" className="form-control clear-input" placeholder="Supplier" /></td>
        <td><input type="number" step="any" name="accessories_desc[unit_price][]" className="form-control count-total accessories-unit-price 0" data-length={0} defaultValue={0} placeholder="Unit Price" /></td>
        <td><input type="text" name="accessories_desc[unit_number][]" className="form-control clear-input" placeholder="Units" /></td>
        <td><input type="text" name="accessories_desc[consumption][]" className="form-control clear-input" placeholder="Consumptions" /></td>
        <td><input type="text" name="accessories_desc[w][]" className="form-control clear-input" placeholder="W%" /></td>
        <td><input type="number" step="any" name="accessories_desc[total_qty][]" className="form-control count-total accessories-qty 0" data-length={0} defaultValue={0} placeholder="Total Qty" /></td>
        <td><input type="number" step="any" readOnly name="accessories_desc[total_cost][]" className="form-control accessories-cost 0" data-length={0} defaultValue={0} placeholder="Total Cost" /></td>
        <td><input type="number" step="any" readOnly name="accessories_desc[pre_cost][]" className="form-control accessories-pre-cost 0" data-length={0} defaultValue={0} placeholder="Pre-Cost" /></td>
      </tr>
      <tr>
        <td><b>Total Accessories cost</b></td>
        <td colSpan={5} />
        <td><b className="total-accessories-qty clear">0</b></td>
        <input type="hidden" name="accessories_qty" id="accessories_qty" defaultValue={0} />
        <td><b className="total-accessories-cost clear">0</b></td>
        <input type="hidden" defaultValue={0} name="accessories_cost" id="accessories_cost" />
        <td><b className="total-accessories-pre-cost clear">0</b></td>
        <input type="hidden" name="pre_cost_desc[accessories]" id="pre_cost_desc_accessories" />
      </tr>
      <tr>
        <td colSpan={7}><b>Total Fabric &amp; Accessories Cost</b></td>
        <td><b className="total-making-cost clear">0</b></td>
        <input type="hidden" name="total_making_cost" id="total_making_cost" defaultValue={0} />
        <td><b className="total-making-pre-cost clear">0</b></td>
        <input type="hidden" name="total_making_pre_cost" id="total_making_pre_cost" />
      </tr>
      <tr>
        <td>Finance/Commercial &amp; Logistic Cost</td>
        <td colSpan={4} />
        <td><input type="number" step="any" name="finance_value" defaultValue={0} className="finance-value" placeholder="1.70%" /></td>
        <td />
        <td><input type="number" step="any" readOnly name="finance_cost" defaultValue={0} className="finance-cost" placeholder="Cost" /></td>
        <td><input type="number" step="any" readOnly name="finance_pre_cost" defaultValue={0} className="finance-pre-cost" placeholder="Pre cost" /></td>
      </tr>
      <tr>
        <td>Deferred payment with interest</td>
        <td colSpan={4} />
        <td><input type="number" step="any" name="deferred_value" defaultValue={0} className="deferred-value" placeholder="1.70%" /></td>
        <td />
        <td><input type="number" step="any" readOnly name="deferred_cost" defaultValue={0} className="deferred-cost" placeholder="Cost" /></td>
        <td><input type="number" step="any" readOnly name="deferred_pre_cost" id="pre_cost" defaultValue={0} className="deferred-pre-cost" placeholder="Pre cost" /></td>
      </tr>
      <tr>
        <td>Other Cost</td>
        <td colSpan={6} />
        <td colSpan={2}><input type="number" step="any" name="other_cost" id="other_cost" placeholder={0} /></td>
      </tr>
      <tr>
        <td colSpan={7}><b>Grand total</b></td>
        <td><b className="grand-total-cost clear">0</b></td>
        <input type="hidden" name="grand_cost" id="grand_cost" defaultValue={0} />
        <td><b className="grand-total-pre-cost clear">0</b></td>
        <input type="hidden" name="pre_cost_desc[grand]" id="pre_cost_desc_grand" />
      </tr>
    </tbody>
  </table>
</div>


<div className='w-full grid  h-9 mt-10 grid-cols-12 px-3'>
<div className='border col-span-10'> 
FACTORY CM TOTAL</div>
<div className='border'>0</div>
<div className='border'>0</div>
</div>

<div className='w-full grid  h-9 mt-4 grid-cols-12 px-3'>
<div className='border col-span-10'>TOTAL EXPENSE</div>
<div className='border'>0</div>
<div className='border'>0</div>
</div>
<div className='w-full grid  h-9 mt-4 grid-cols-12 px-3'>
<div className='border col-span-10'>NET EARNING</div>
<div className='border'>0</div>
<div className='border'>0</div>
</div>


<div className=' w-full    my-10 '>
  <div className='flex gap-3 w-fit m-auto'>
    <button onClick={handlecancel} className='w-48 h-11  border text-black' style={{borderRadius:"5px"}}>Cancel</button>
    <button onClick={handleSubmit} className='w-48 h-11 text-white bg-purple-500' style={{borderRadius:"5px"}}>Save</button>
    </div>
</div> 
    </div>
  )
}

export default EditBudgetlist
