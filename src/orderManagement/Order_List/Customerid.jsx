import React from 'react'
import { FaBars } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { BsFiletypeScss } from "react-icons/bs";

const Customerid = () => {
  return (
    <div>
      <div className='w-75 nav  h-16 bg-gray-100  flex flex-row'>
        <FaBars className='mt-2' />
      <div className='w-100 bg-gray-100 flex flex-row justify-end me-2  gap-3 pb-5'>
      <IoMdNotificationsOutline style={{fontSize:"30px"}} />
<div className='w-12 h-12 bg-slate-500 pl-2 pt-2 mb-2' style={{borderRadius:"50%"}}>
<FaUserAlt style={{fontSize:"30px"}} />

</div>
      </div>
      </div>
      <div className='w-75 mt-3 h-10 flex flex-row justify-between '>
        <h3 className='ms-4' style={{ fontSize: "25px" }}>Customer List</h3>
        <div className='sub-div w-auto h-10 ' style={{ border: "2px solid purple", borderLeft: "none", borderRight: "none", borderTop: "none" }}>
          <button className='head-button w-28  text-white ms-3 h-10 ' style={{ border: "1px solid purple", borderTop: "none", borderRight: "none", borderLeft: "none" }}>Shipment List</button>
          <button className='w-40 h-10 ms-8 ' style={{ border: "1px solid purple", borderTop: "none", borderRight: "none", borderLeft: "none" }}>Add New Shuplyment</button>

          <button className='w-28  text-white ms-3 h-10 bg-purple-700 ' style={{ border: "1px solid purple", borderTop: "none", borderRight: "none", borderLeft: "none" }}>Buyer List</button>
          <button className='w-28  text-white ms-3 h-10 bg-purple-700 ' style={{ border: "1px solid purple", borderTop: "none", borderRight: "none", borderLeft: "none" }}>Customers List</button>
          <button className='w-28  text-white ms-3 h-10 bg-purple-700 ' style={{ border: "1px solid purple", borderTop: "none", borderRight: "none", borderLeft: "none" }}>Suppliers List</button>
        </div>

      </div>
      <hr className='bg-slate-700  w-75 mt-3' />
      <div className='doler w-auto0  flex flex-row gap-4 pl-5 mt-3'>
        <div className=' w-52 h-20 bg-black text-orange-400 rounded-2xl text-center pt-4' >
          <h3 className='font-bold'>$1,328,490.00</h3>
          <p>Total Billl</p>
        </div>
        <div className=' w-52 h-20 bg-black text-orange-400 rounded-2xl text-center pt-4' >
          <h3 className='font-bold'>$5,000.00</h3>
          <p>Advance Amount</p>
        </div><div className=' w-52 h-20 bg-black text-orange-400 rounded-2xl text-center pt-4' >
          <h3 className='font-bold'>$0.00</h3>
          <p>Pay Amount</p>
        </div>
        <div className=' w-52 h-20 bg-black text-orange-400 rounded-2xl text-center pt-4' >
          <h3 className='font-bold'>$1,328,490.00</h3>
          <p>Due Amount</p>
        </div>
      </div>
      <div className='form w-auto flex flex-row gap-4 mt-5 ms-4'>

        <select className="select h-11 w-80 " style={{ border: "1px solid  grey", outline: "none", borderRadius: "5px" }}>
          <option selected>All Result
          </option>
          <option>Per Page-30</option>
          <option >Per Page-50 </option>
          <option >Per Page-100  </option>
        </select>
        {/* </div> */}

        <input type='text' className='w-80 h-11 font-bold' placeholder='Search...' style={{ border: "1px solid grey", borderRadius: "5px" }} />
        <div className='icons'>
        <GrDocumentPdf />
        <BsFiletypeScss />

        </div>
      </div>
      <section class="customerdata mx-auto w-full max-w-7xl px-4 py-4 ms-1">
        <div class="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
        
       
        </div>
        <div class="mt-6 w-auto flex flex-col">
          <div class="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div class="overflow-hidden border border-gray-200 md:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Party Name</span>
                      </th>
                      <th
                        scope="col"
                        class="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Phone
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Country
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Total Bill
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                      Advance Amount
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                     Pay Amount
                      </th>
                      <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Due Amount  
                    </th>
                    <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                      Balance
                    </th>
                    <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                      Remark
                    </th>
                    <th
                        scope="col"
                        class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                  Action
                    </th>
                    
                      <th scope="col" class="relative px-4 py-3.5">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td class="whitespace-nowrap px-4 py-4">
                        <div class="flex items-center">
                          <div class="h-10 w-10 flex-shrink-0">
                            <img
                              class="h-10 w-10 rounded-full object-cover"
                              src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1160&amp;q=80"
                              alt=""
                            />
                          </div>
                          <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                              John Doe
                            </div>
                            <div class="text-sm text-gray-700">john@devui.com</div>
                          </div>
                        </div>
                      </td>
                      <td class="whitespace-nowrap px-12 py-4">
                        <div class="text-sm text-gray-900 ">Front-end Developer</div>
                        <div class="text-sm text-gray-700">Engineering</div>
                      </td>
                      <td class="whitespace-nowrap px-4 py-4">
                        <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          Active
                        </span>
                      </td>
                      <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                        Developer
                      </td>
                      <td class="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                        <a href="#" class="text-gray-700">
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td class="whitespace-nowrap px-4 py-4">
                        <div class="flex items-center">
                          <div class="h-10 w-10 flex-shrink-0">
                            <img
                              class="h-10 w-10 rounded-full object-cover"
                              src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=928&amp;q=80"
                              alt=""
                            />
                          </div>
                          <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                              Jane Doe
                            </div>
                            <div class="text-sm text-gray-700">jane@devui.com</div>
                          </div>
                        </div>
                      </td>
                      <td class="whitespace-nowrap px-12 py-4">
                        <div class="text-sm text-gray-900 ">Back-end Developer</div>
                        <div class="text-sm text-gray-700">Engineering</div>
                      </td>
                      <td class="whitespace-nowrap px-4 py-4">
                        <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          Active
                        </span>
                      </td>
                      <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                        CTO
                      </td>
                      <td class="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                        <a href="#" class="text-gray-700">
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
       
      </section>

    </div>
  )
}

export default Customerid
