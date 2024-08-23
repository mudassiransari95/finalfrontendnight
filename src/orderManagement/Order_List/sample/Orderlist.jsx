import React from 'react'
import { Link } from 'react-router-dom'
import { LuPrinter } from "react-icons/lu";
import { GrDocumentText } from "react-icons/gr";
const OrderSummary = () => {
  return (
    <div className='w-auto bg-white  pl-2'>
      
      <div className='head-box w-auto  flex flex-row justify-between mt-3'>
        <h2 className=' ms-3' style={{fontWeight:"bold",fontSize:"20px"}}>
          Order Summary
        </h2>

<div className='link-box w-80 h-10 flex flex-row  me-5 gap-5'style={{border:"1px solid purple",borderLeft:"none",borderRight:"none",borderTop:"none"}}> 
<Link to='/orderlist' className='ordersummary h-10 w-40 pl-3 pt-2 text-white bg-purple-500'>Order Summary
</Link>
<Link to='/addneworder'className='ordersummary h-10 w-40 pl-5 pt-2 text-white bg-purple-500'> Add New Order 
</Link>
</div>
      </div>
      {/* form */}
      <div className='form w-100    bg-white mt-14 h-20 d-flex p-3 gap-5 ' style={{}}>
      <select className="select h-11 w-60  "style={{border:"1px solid  grey", borderRadius:"0.4rem"}}>
    <option selected className='pl-2'>    Select Per Page
    </option>
    <option>Per Page-10</option>
    <option >Per Page-30</option>
    <option>Per Page-50</option>
    <option>Per Page-100</option>
</select>
<input className='h-11 w-60  ms-3 p-2 ps-4 ' style={{border:"1px solid  grey", borderRadius:"0.6rem"}} type='text' placeholder='Search...' />

  <div className='w-60 h-15  bg-white   flex flex-row ' style={{position:"relative"}}>
                        <label className='w-18 ms-3    pt-2' style={{ fontSize: "13px",position:"absolute" }}>From Date</label>
                        <input type='date' placeholder='Enter Payment Mode ' className='w-60  pl-16 text-center h-10 ms-10' style={{ outline: "none",borderRadius:"0.4rem" }} />
                    </div>
                    <div className='w-60  h-15  bg-white   flex flex-row ' style={{ position:"relative"}}>
                        <label className='w-18 bg-white   ms-3  pt-2 ' style={{ fontSize: "13px",position:"absolute"}}>To Date</label>
                        <input type='date' placeholder='Enter Payment Mode' className='w-60 pl-16   text-center h-10 ms-10' style={{ outline: "none" ,borderRadius:"0.4rem"}} />
                    </div>


<div className='w-80 flex flex-row justify-center gap-5 pt-3'>
<LuPrinter className='text-red-400' style={{fontSize:"20px"}} />
<LuPrinter className='text-green-400'  style={{fontSize:"20px "}} />
<GrDocumentText style={{fontSize:"20px"}} />

</div>
      </div>
      <table class="     mt-5"  >
                  <thead class="bg-gray-50 w-auto " style={{fontWeight:"bold"}}>
                    <tr className=' bg-slate1-100'>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Sl.</span>
                      </th>
                      <th
                        scope="col"
                        class="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                    Order No.
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Booking date
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Party Name
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                     Composition
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                    Order Image
                    </th>
                    <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                    Pocess Loss 
                    </th>
                    <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                      Rib 
                    </th>
                    <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
              Collar
                    </th>
                    
                    <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
              Prepared By
                    </th>
                    <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
              status
                    </th>
                    <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
            Action
                    </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td class="whitespace-nowrap px-4 py-4">
                        <div class="flex items-center">
                      
                         
                        </div>
                      </td>
                    
                    
                   
                    </tr>
                    <tr>
                   
                      
                   
                     
                    </tr>
                  </tbody>
                </table>    </div>
  )
}

export default OrderSummary









