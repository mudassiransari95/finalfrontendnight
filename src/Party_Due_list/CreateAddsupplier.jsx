import React from 'react'
import { FaCamera } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
const Createaddsupplier = () => {
    return (
        <div className='w-75  ' style={{ height: "40rem" }}>
            <div className='w-auto mt-3  h-10 flex flex-row justify-between '>
                <h4 className='fw-bold'>Add  Buyer</h4>
                <div className='sub-div w-auto h-10 mb-4 ' style={{ borderLeft: "none", borderRight: "none", borderTop: "none" }}>
                    <button className='head-button w-28  text-white ms-3 h-10 ' style={{ border: "1px solid purple", borderTop: "none", borderRight: "none", borderLeft: "none" }}><FaBars /> Supplier  List</button>
                

                    <button className='w-28  text-white ms-3 h-10 bg-purple-700 ' style={{ border: "1px solid purple", borderTop: "none", borderRight: "none", borderLeft: "none" }}>Buyer List</button>
                    <button className='w-28  text-white ms-3 h-10 bg-purple-700 ' style={{ border: "1px solid purple", borderTop: "none", borderRight: "none", borderLeft: "none" }}>Add New Supplier</button>
                 
                </div>
                
            </div>
            <hr className='bg-slate-700  w-100 mt-3' />
            <div className='w-auto h-16 flex flex-row  gap-10 ms-2' style={{ height: "70vh" }}>
                {/* main div */}
                <div className=' w-96 sub-div  mt-4 flex flex-col gap-5'>
                <div className='w-auto h-15  bg-white   flex flex-row ' >
                        <input type='text ' placeholder='Enter Party Name' className='w-80 h-10' style={{ outline: "none" }} />
                    </div>
                    <div className='w-auto h-15  bg-white   flex flex-row ' >
                        <input type='number ' placeholder='Enter Phone Number' className='w-80 h-10' style={{ outline: "none" }} />
                    </div>
                    <div className='w-auto h-15  bg-white   flex flex-row ' >
                        <input type='text ' placeholder='Enter Address' className='w-80 h-10' style={{ outline: "none" }} />
                    </div>
                    <div className='w-auto h-15  bg-white   flex flex-row ' >
                        <input type='number ' placeholder='Enter Opening Balance' className='w-80 h-10' style={{ outline: "none" }} />
                    </div>
                    <div className='w-auto h-15  bg-white   flex flex-row ' >
                        <input type='text ' placeholder='Enter Remark' className='w-80 h-10' style={{ outline: "none" }} />
                    </div>
                   
                
                   
                 
                    
                
                </div>
                {/* second-col */}
                <div className=' w-96 sub-div ms-2 mt-4 flex flex-col gap-5'>
                <div className='w-auto h-15  bg-white   flex flex-row ' >
                        <input type='email' placeholder='Enter Party Email' className='w-80 h-10' style={{ outline: "none" }} />
                    </div>
                    <div className='w-auto h-15  bg-white   flex flex-row ' >
                        <input type='number' placeholder='Enter Phone Number' className='w-80 h-10' style={{ outline: "none" }} />
                    </div>
                    <div className='w-auto h-15  bg-white   flex flex-row ' >
                        <input type='  password' placeholder=' Enter Password' className='w-80 h-10' style={{ outline: "none" }} />
                    </div>
                    <div className='w-80 mt-2 ms-2 bg-red-400  flex flex-row'>
                        <select className="select h-10 w-80 " style={{ border: "1px solid  grey" ,outline:"none"}}>
                            <option selected> Select Opening Balance Type
                            </option>
                            <option>Advance Payment </option>
                            <option>Due Bill </option>


                        </select>
                    </div>
             
                  
                  
                   
                </div>
                {/* Third col */}
                <div className='mb-4 w-96 bg-white sub-div ms-2 mt-1  flex flex-col gap-5'>
                    <div className='party w-36 h-36 mt-3 ms-28 ' style={{  borderRadius: "50%", position: "relative", zIndex: "1" }}>
                        <img className='mt-3 w-40' src='	https://erpsoftware.acnoo.com/assets/images/profile/avatar.jpg' style={{ borderRadius: "50%" }} />
                    </div>
                    <div className='w-12 h-12 flex justify-center items-center z-30 top-17 bg-white' style={{ border: "50%", position: "absolute", marginTop: "125px", marginLeft: "210px", border: "2px solid blue", borderRadius: "50%" }}>
                        <inpu   type='file'  />

                    </div>
                    <p className='ms-36 '>Upload Image</p>

                </div>


               
            </div>

            <div className=' w-96 mb-60 mt-14 flex flex-row gap-3 ms-72  '>
                <button className=' btn btn-join w-48 h-11 bg-white' style={{ borderRadius: "5px", border: "1px solid black" }}>Reset</button>
                <button className='w-48 h-11 text-white bg-purple-500' style={{ borderRadius: "5px" }}>Save</button>

            </div>
        </div>
    )
}

export default Createaddsupplier