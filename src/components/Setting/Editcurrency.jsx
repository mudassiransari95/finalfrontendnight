import React, { useState } from 'react'

const Editcurrency = () => {

    
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
   
   
   const res=await fetch('http://localhost:8080/api/create',{
     method:'post',
     headers:{
       'content-type':'application/json'
     },
     body:JSON.stringify(data)
   })
   const resdata=await res.json()
   console.log(resdata)
     }

  return (
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
        <div   className='w-52 text-slate-600 h-12 flex justify-center items-center border border-gray-950 rounded-lg '>
            <p>Cancel</p>
        </div>
        <div onClick={handleSubmit} className='w-52 h-12 flex justify-center items-center rounded-lg text-white bg-purple-800'>
            <p>Save</p>
        </div>

    </div>

</div>



    </div>

</div>
  )
}

export default Editcurrency