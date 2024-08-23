import React from 'react'
import { Link } from 'react-router-dom';

const Editincomecategory = () => {
  return (
    <div className='px-3'>
         <div className='w-full px-2 mt-8 flex  justify-between '>
<h1 className='fw-bold text-lg'>Add New Income Category</h1>
<div className='w-72 flex justify-between h-9' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>
<Link to='/Income' className='w-20 h-9 flex items-center justify-center' style={{border:"1px solid black",borderTop:"none",borderRight:"none",borderLeft:"none"}}> <p className='text-md'>Income List</p> </Link>

<button className='w-44  text-white rounded-t-md ms-3 h-9 bg-purple-700 ' style={{border:"1px solid purple",borderTop:"none",borderRight:"none",borderLeft:"none"}}>Add New Income Category</button>
</div>
      </div>
      <hr className='w-full h-1 mt-3'/>
    
      <div className='w-full  mt-12'> 
        <div className=' flex flex-col gap-3'>
      <div className='w-1/2 '>
  <p className='bg-transparent' htmlFor="">Category Name</p>
  <input type="text" placeholder='enter category name' className='w-full border outline-none h-12 p-1 px-2 py-2 mt-1'/>
  </div>
  <div className='w-1/2'>
    <p>Description</p>
    <textarea className='w-full border h-20 outline-none p-1 px-2 rounded' placeholder='Description'>

    </textarea>
  </div>
      </div>
      </div>
      <div className=' w-96 mt-14 flex  gap-3 ml-20'>
    <Link to={'/Income'} className=' btn btn-join w-48 h-11 bg-white' style={{borderRadius:"5px",border:"1px solid black"}}>Cancel</Link>
    <button  className='w-48 h-11 text-white bg-purple-500' style={{borderRadius:"5px"}}>Save</button>

</div>
    </div>
  )
}

export default Editincomecategory