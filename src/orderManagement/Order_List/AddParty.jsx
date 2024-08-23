import React from 'react'
import { FaCamera } from "react-icons/fa";

const Addparty = () => {
    return (
        <div className='w-75  ' style={{ height: "100%" }}>
            <div className='w-auto mt-3 h-10 flex flex-row justify-between '>
                <h4 className='fw-bold'>Add  Party</h4>
                <div className='sub-div w-auto h-10 ' style={{ border: "2px solid purple", borderLeft: "none", borderRight: "none", borderTop: "none" }}>
                    <button className='head-button w-28  text-white ms-3 h-10 ' style={{ border: "1px solid purple", borderTop: "none", borderRight: "none", borderLeft: "none" }}>Shipment List</button>
                    <button className='w-40 h-10 ms-8 ' style={{ border: "1px solid purple", borderTop: "none", borderRight: "none", borderLeft: "none" }}>Add New Shipment</button>

                    <button className='w-28  text-white ms-3 h-10 bg-purple-700 ' style={{ border: "1px solid purple", borderTop: "none", borderRight: "none", borderLeft: "none" }}>Buyer List</button>
                    <button className='w-28  text-white ms-3 h-10 bg-purple-700 ' style={{ border: "1px solid purple", borderTop: "none", borderRight: "none", borderLeft: "none" }}>Customers List</button>
                    <button className='w-28  text-white ms-3 h-10 bg-purple-700 ' style={{ border: "1px solid purple", borderTop: "none", borderRight: "none", borderLeft: "none" }}>Suppliers List</button>
                </div>
                
            </div>
            <hr className='bg-slate-700  w-100 mt-3' />
            <div className='w-auto h-16 flex flex-row  gap-10 ms-2' style={{ height: "100vh" }}>
                {/* main div */}
                <div className=' w-96 sub-div  mt-4 flex flex-col gap-5'>
                <div className='w-auto h-15  bg-white   flex flex-row ' style={{ border: "1px solid grey" }}>
                        <input type='text me-3' placeholder='Enter Party Name' className='w-80 h-10' style={{ outline: "none" }} />
                    </div>
                    <div className='w-auto h-15  bg-white   flex flex-row ' style={{ border: "1px solid grey" }}>
                        <label className='w-32 bg-white ms-5 mt-1 text-gray-400 pt-2' style={{ fontSize: "13px",outline:"none" }}>Contact Date</label>
                        <select className="select h-11 w-80 " style={{ border: "1px solid  grey",outline:"none",borderLeft:"none"}}>
                            <option selected>Select Party Category
                            </option>
                            <option>Buyer</option>
                            <option >Suppliers  </option>
                            <option >Customer  </option>
                        </select>                    </div>
                    <div className='w-auto    flex flex-row'>
                        {/* <label>Party name</label> */}
                        <select className="select h-11 w-80 " style={{ border: "1px solid  grey",outline:"none" }}>
                            <option selected>Select a Merchandiser
                            </option>
                            <option>Marlon Marlon Morales</option>
                            <option >Merchandiser</option>

                        </select>
                        <div className='w-16 h-11 pl-6 pt-2 text-white bg-purple-900' style={{}}>+</div>
                    </div>

                    <div className='w-auto h-15  bg-white   flex flex-row ' style={{ border: "1px solid grey" }}>
                        <input type='password' placeholder='Password' className='w-80 h-10' style={{ outline: "none" }} />
                    </div>
                    <div className='w-auto    flex flex-row'>
                        
                        {/* <label>Party name</label> */}
                        <select className="select h-11 w-80 " style={{ border: "1px solid  grey",outline:"none" }}>
                            <option selected>Select a Merchandiser
                            </option>
                            <option>Marlon Marlon Morales</option>
                            <option >Merchandiser</option>

                        </select>
                        <div className='w-16 h-11 pl-6 pt-2 text-white bg-purple-900' style={{}}>+</div>
                    </div>
                    <div className='w-auto h-15  bg-white   flex flex-row ' style={{ border: "1px solid grey" }}>
                        <input type='text' placeholder='GSM' className='w-80 h-10' style={{ outline: "none" }} />
                    </div>
                    <div className='w-auto h-15  bg-white   flex flex-row ' style={{ border: "1px solid grey" }}>
                        <input type='text' placeholder='Enter Payment Mode' className='w-80 h-10 ' style={{ outline: "none" }} />
                    </div>
                    <div className='w-auto h-15  bg-white   flex flex-row ' style={{ border: "1px solid grey" }}>
                        <label className='w-32 bg-white ms-5 mt-1 text-gray-400 pt-2' style={{ fontSize: "13px" }}>Contact Date</label>
                        <input type='date' placeholder='Enter Payment Mode' className='w-60 text-center h-10 ms-3' style={{ outline: "none" }} />
                    </div>
                    <div className='w-auto h-15  bg-white   flex flex-row ' style={{ border: "1px solid grey" }}>
                        <input type='text' placeholder='Port of Loading' className='w-80 h-10' style={{ outline: "none" }} />
                    </div>
                    <div className='w-auto h-15  bg-white   flex flex-row ' style={{ border: "1px solid grey" }}>
                        <input type='  text' placeholder='Remark' className='w-80 h-10' style={{ outline: "none" }} />
                    </div>
                </div>
                {/* second-col */}
                <div className=' w-96 sub-div ms-2 mt-4 flex flex-col gap-5'>
                <div className='w-auto h-15  bg-white   flex flex-row ' style={{ border: "1px solid grey" }}>
                        <input type='text' placeholder='Enter Party Email' className='w-80 h-10' style={{ outline: "none" }} />
                    </div>
                    <div className='w-auto h-15  bg-white   flex flex-row ' style={{ border: "1px solid grey" }}>
                        <input type='number' placeholder='Enter Phone Number' className='w-80 h-10' style={{ outline: "none" }} />
                    </div>
                    <div className='w-auto h-15  bg-white   flex flex-row ' style={{ border: "1px solid grey" }}>
                        <input type='  number' placeholder=' Enter Order Title' className='w-80 h-10' style={{ outline: "none" }} />
                    </div>
                    <div className='w-auto h-15  bg-white   flex flex-row ' style={{ border: "1px solid grey" }}>
                        <input type='text' placeholder='Enter Fabrication Name' className='w-80 h-10' style={{ outline: "none" }} />
                    </div>
                    <div className='w-auto h-15  bg-white   flex flex-row ' style={{ border: "1px solid grey" }}>
                        <input type='text' placeholder='Enter Yarn Count' className='w-80 h-10 ' style={{ outline: "none" }} />
                    </div>
                    <div className='w-auto    flex flex-row'>
                        <select className="select h-11 w-80 " style={{ border: "1px solid  grey" }}>
                            <option selected>Select a Account
                            </option>
                            <option>h (565757)</option>

                        </select>
                        <div className='w-16 h-11 pl-6 pt-2 text-white bg-purple-900' style={{}}>+</div>
                    </div>
                    <div className='w-auto h-15  bg-white   flex flex-row ' style={{ border: "1px solid grey" }}>
                        <input type='text' placeholder='Enter Pantone' className='w-80 h-10' style={{ outline: "none" }} />
                    </div>
                    <div className='w-auto h-15 pl-12  bg-white   flex flex-row ' style={{ border: "1px solid grey" }}>
                        <label className='w-32  text-gray-400 pt-2' style={{ fontSize: "13px" }}>Expiry Date</label>
                        <input type='date' placeholder='Enter Payment Mode' className='w-72 text-center h-10 ms-3' style={{ outline: "none" }} />
                    </div>
                </div>
                {/* Third col */}
                <div className='mb-4 w-96 bg-white sub-div ms-2 mt-1  flex flex-col gap-5'>
                    <div className='party w-36 h-36 mt-3 ms-28 ' style={{ border: "2px solid blue", borderRadius: "50%", position: "relative", zIndex: "1" }}>
                        <img className='mt-3 w-40' src='	https://erpsoftware.acnoo.com/assets/images/profile/avatar.jpg' style={{ borderRadius: "50%" }} />
                    </div>
                    <div className='w-12 h-12 flex justify-center items-center z-30 top-17 bg-white' style={{ border: "50%", position: "absolute", marginTop: "125px", marginLeft: "210px", border: "2px solid blue", borderRadius: "50%" }}>
                        <FaCamera className='text-gray-500 text-2xl m-auto text-grey' />

                    </div>
                    <p className='ms-36 '>Upload Image</p>

                </div>


            </div>

            <div className=' w-96 mt-3 flex flex-row gap-3 ms-96  '>
                <button className=' btn btn-join w-48 h-11 bg-white' style={{ borderRadius: "5px", border: "1px solid black" }}>Reset</button>
                <button className='w-48 h-11 text-white bg-purple-500' style={{ borderRadius: "5px" }}>Save</button>

            </div>

        </div>
    )
}

export default Addparty
