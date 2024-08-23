import React, { useState } from 'react'
import { FaCamera } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Addnewbuyer = () => {


    

  const [data, setdata] = useState({
    PartyName:'',
   
    PartyEmail:'',
    Phone:'',
    Password:'',

    Address:'',
    BalanceType:'',
    OpeningBalance:'',
    Country:'',
    Remarks:'',
    Image:''
  
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
  
    const handleSubmitdata=async()=>{
 
  
  
  const res=await fetch('http://localhost:8080/api/create',{
    method:'post',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(data)
  })
  const resdata=await res.json()
  console.log('suppliweer datagsajjchn',resdata)
    }
  

    return (
        <div className='w-75  ' style={{ height: "40rem" }}>
            <div className='w-auto mt-3  h-16 flex flex-row justify-between '>
                <h4 className='fw-bold'>Add  Supplier</h4>
                <div className='sub-div  w-auto h-16 mb-4 ' style={{ borderLeft: "none", borderRight: "none", borderTop: "none" }}>
                
                

                    <Link to='/supplierlist' className='w-32  text-white ms-3 h-10 bg-purple-700 ' style={{ border: "1px solid purple", borderTop: "none", borderRight: "none", borderLeft: "none" }}>Supplier List</Link>
                    <Link to='/createaddsupplier' className='w-36 text-white ms-3 h-14 bg-purple-700 ' style={{ border: "1px solid purple", borderTop: "none", borderRight: "none", borderLeft: "none" }}>Add New Supplier</Link>
                 
                </div>
                
            </div>
            <hr className='bg-slate-700  w-100 mt-3' />
            <div className='w-auto h-16 flex flex-row  gap-10 ms-2' style={{ height: "70vh" }}>
                {/* main div */}
                <div className=' w-96 sub-div  mt-4 flex flex-col gap-5'>
                <div className='w-auto h-15  bg-white   flex flex-row ' >
                        <input onChange={handleOnchange} name='PartyName' value={data.PartyName} type='text ' placeholder='Enter Party Name' className='w-80 h-10' style={{ outline: "none" }} />
                    </div>
                    <div className='w-auto h-15  bg-white   flex flex-row ' >
                        <select onChange={handleOnchange} name='Country' value={data.Country} className='w-80 h-10'  id="">
                            <option value="">select country name</option>
                            <option value="">india</option>
                            <option value="">America</option>
                            <option value="">Italy</option>
                            <option value="">Russia</option>
                        </select>
                
                    </div>
                    <div className='w-auto h-15  bg-white   flex flex-row ' >
                        <input onChange={handleOnchange} name='Address' value={data.Address} type='text ' placeholder='Enter Address' className='w-80 h-10' style={{ outline: "none" }} />
                    </div>
                    <div className='w-auto h-15  bg-white   flex flex-row ' >
                        <input onChange={handleOnchange} name='OpeningBalance' value={data.OpeningBalance} type='number ' placeholder='Enter Opening Balance' className='w-80 h-10' style={{ outline: "none" }} />
                    </div>
                    <div className='w-auto h-15  bg-white   flex flex-row ' >
                        <input onChange={handleOnchange} name='Remarks' value={data.Remarks} type='text ' placeholder='Enter Remark' className='w-80 h-10' style={{ outline: "none" }} />
                    </div>
                   
                
                   
                 
                    
                
                </div>
                {/* second-col */}
                <div className=' w-96 sub-div ms-2 mt-4 flex flex-col gap-5'>
                <div className='w-auto h-15  bg-white   flex flex-row ' >
                        <input onChange={handleOnchange} name='PartyEmail' value={data.PartyEmail} type='email' placeholder='Enter Party Email' className='w-80 h-10' style={{ outline: "none" }} />
                    </div>
                    <div className='w-auto h-15  bg-white   flex flex-row ' >
                        <input onChange={handleOnchange} name='Phone' value={data.Phone} type='number' placeholder='Enter Phone Number' className='w-80 h-10' style={{ outline: "none" }} />
                    </div>
                    <div className='w-auto h-15  bg-white   flex flex-row ' >
                        <input onChange={handleOnchange} name='Password' value={data.Password} type='  password' placeholder=' Enter Password' className='w-80 h-10' style={{ outline: "none" }} />
                    </div>
                    <div className='w-80 mt-2 ms-2 bg-red-400  flex flex-row'>
                        <select onChange={handleOnchange} name='BalanceType' value={data.Password} className="select h-10 w-80 " style={{ border: "1px solid  grey" ,outline:"none"}}>
                                      <option selected> Select Opening Balance Type
                            </option>
                            <option>Advance Payment </option>
                            <option>Due Bill </option>


                        </select>
                    </div>
             
                  
                  
                   
                </div>
                {/* Third col */}
                <div className='mb-4 mx-auto w-96 sub-div ms-2 mt-1  flex flex-col gap-2'>
                    <div className='party w-36 h-36 mt-3  ' style={{  borderRadius: "50%", position: "relative", zIndex: "1" }}>
                        <img className='mt-3 w-40' src='	https://erpsoftware.acnoo.com/assets/images/profile/avatar.jpg' style={{ borderRadius: "50%" }} />
                    </div>
                  
                    <p className='mx-auto'>Upload Image</p>

                </div>


               
            </div>

            <div className=' w-96 mb-60 mt-14 flex flex-row gap-3 ms-72  '>
                <button className=' btn btn-join w-48 h-11 bg-white' style={{ borderRadius: "5px", border: "1px solid black" }}>Reset</button>
                <button onClick={handleSubmitdata} className='w-48 h-11 text-white bg-purple-500' style={{ borderRadius: "5px" }}>Save</button>

            </div>
        </div>
    )
}

export default Addnewbuyer