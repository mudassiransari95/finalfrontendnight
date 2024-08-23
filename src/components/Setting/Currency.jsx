import React, { useState,useRef, useEffect } from 'react'
import { PiArrowCounterClockwise } from 'react-icons/pi';
import { FaUser, FaEdit } from 'react-icons/fa';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { FaBars } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaUserAlt } from 'react-icons/fa';
import { CiCirclePlus } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";

// import { useReactToPrint } from 'react-to-print';
 import { Link } from 'react-router-dom';
 import { MdDelete } from 'react-icons/md';
const Currency = () => {
    
        // const componentRef = useRef();
        // const handlePrint = useReactToPrint({
        //   content: () => componentRef.current,
        // });

        const [data, setdata] = useState({
            Name:'',
            Code:'',
            Status:'',
            Position:'',
            Symbal:'',
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
          
            const handleSubmit=async(e)=>{
           e.preventDefault()
          
          
          const res=await fetch('http://localhost:8080/api/addnewcurrency',{
            method:'post',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(data)
          })
          const resdata=await res.json()
          console.log('add new currencyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',resdata.data)
            }
          

// sir isme neeche waale m problem h 

            const [currency, setcurrency] = useState([]);
            console.log('get alll datattataaattatat',currency)
            const getalldata=async()=>{
 
               const res=await fetch('http://localhost:8080/api/getallcurrency')
               const resdata=await res.json()
            
               setcurrency(resdata.data)
                 }


    const [Currencylist, setCurrencylist] = useState(false);
    const [addCurrencylist, setaddCurrencylist] = useState(false);
    const [showProfile, setshowProfile] = useState(false);


    const handledelete=async(id)=>{
      console.log('id',id)
  
    
      const res=await fetch(`http://localhost:8080/api/deletecurrencydata/${id}`,{
        method:'delete',
      })
      const response=await res.json()
      console.log('response',response)
      getalldata()
    }


    useEffect(()=>{
        getalldata()
    },[])


  return (
    <div>


      {/* midddle div dfnsdbhbgv */}
{!Currencylist &&
    <div className='w-full px-5 '>
<div  className='w-full h-20 flex items-center text-lg'>
<p >Currency List</p>
      </div>
      <hr className='bg-slate-700  w-full px4' />




      <div className=' flex justify-between items-center gap-4 mt-7  h-10'>
    <div className='flex gap-4'>
      <div className='flex items-center gap-3'>
    
      <select className=" h-8 w-36 " style={{ border: "1px solid  grey", outline: "none", borderRadius: "5px" }}>
        <option>Per Page-10</option>
        <option>Per Page-30</option>
        <option>Per Page-50</option>
        <option>Per Page-100</option>
      </select>
      </div>
      <div className='flex items-center gap-3'>
    
      <input type='text' className=' h-8 w-36 text-start px-2' placeholder='Search...' style={{ border: "1px solid grey", borderRadius: "5px" }} />
       
      </div>
    </div>
    
    <div className='flex gap-1 h-8 items-center bg-purple-600 w-36 justify-center rounded-lg text-white'onClick={()=>{
        setaddCurrencylist(true)
        setCurrencylist(true)
    }}>
     <p className='bg-white text-purple-600 text-lg rounded-full'><CiCirclePlus/></p>
     <p>Add Currency</p>

        </div>
      </div>
      <table id='my-table' className='border  w-full mt-3'>
        <thead>
            <tr className='bg-slate-200 h-10'>
                <th>SL.</th>
                <th>Name</th>
                <th>Code</th>
                <th>Symbol</th>
                <th>Status</th>
                <th>Default</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                currency.map((ele,index)=>{
                   return(
                    <tr className='h-10'>
                    <td>{index+1}</td>
                    <td>{ele.Name}</td>
                    <td>{ele.Code}</td>
                    <td>{ele.Symbal}</td>
                    <td><p className='bg-green-800 w-12 flex justify-center items-center tracking-widest     text-white rounded-lg text-xs  h-4'>{ele.Status}</p></td>
                    <td>yes</td>
                    <td  className='flex items-center h-12 gap-1'>  
                            <Link state={ele._id} to={'/addnewcurrency'} className='w-6 hover:bg-green-200 h-6 flex justify-center items-center bg-green-100'>
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
}



{/* add new currencyfdjkvhiukdf */}

{addCurrencylist &&
<div className='w-full px-5'>
    <div className='px-3 mt-10 border'>
    <div className='w-full h-20 flex items-center text-lg'>
<p>Add Currency</p>
      </div>
      <hr className='bg-slate-700  w-full px4' />

<div className='flex mt-10 gap-5'>
    <div className=''>
    <p htmlFor="">Name</p><br />
    <input onChange={handleOnchange} name='Name' value={data.Name} className='border w-96 h-10 mt-1 text-start px-2 rounded-md' type="text"  placeholder='Enter Name'/>
    </div>

    <div>
    <p htmlFor="">Code</p><br />
    <input onChange={handleOnchange} name='Code' value={data.Code} className='border w-96 h-10 mt-1 text-start px-2 rounded-md' type="text"  placeholder='Enter Code'/>
    </div>
 
</div>


<div className='flex mt-2 gap-5'>
    <div>
    <p htmlFor="">Symbol</p><br />
    <input onChange={handleOnchange} name='Symbal' value={data.Symbal} className='border w-96 h-10 mt-1 text-start px-2 rounded-md' type="text"  placeholder='Enter Name'/>
    </div>

    <div>
    <p htmlFor="">Position</p><br />
    <select onChange={handleOnchange} name='Position' value={data.Position} className='border w-96 h-10 mt-1 text-start px-2 rounded-md' type="text"  placeholder='Enter Code'>
        <option>Select a position</option>
        <option>left</option>
        <option>right</option>
    </select>
    </div>
 
</div>
<div className='mt-2'>
    <p htmlFor="">Status</p><br />
    <select onChange={handleOnchange} name='Status' value={data.Status} className='border w-96 h-10 mt-1 text-start px-2 rounded-md' type="text"  placeholder='Enter Name'>
        <option>Active</option>
        <option>In Active</option>
    </select>
    </div>






<div className='w-full h-12  mt-16 mb-10 '>

    <div className='w-96 h-12 bg-slate-50 m-auto flex gap-3'>
        <div onClick={()=>{
        setaddCurrencylist(false)
        setCurrencylist(false)
    }}  className='w-52 text-slate-600 h-12 flex justify-center items-center border border-gray-950 rounded-lg '>
            <p>Cancel</p>
        </div>
        <div onClick={handleSubmit} className='w-52 h-12 flex justify-center items-center rounded-lg text-white bg-purple-800'>
            <p>Save</p>
        </div>

    </div>

</div>



    </div>

</div>
}

      
    </div>
  )
}

export default Currency