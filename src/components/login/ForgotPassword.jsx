import React, { useRef } from 'react'
import { CgMail } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Forgotpassword = () => {
    let emailRef=useRef()
    let handlelogin=async()=>{
        let obj={
            emailRef:emailRef.current.value
        }
    }
  return (
    <div className='w-100 forgot-password absolute top-0 right-0 bottom-0 left-0  pt-56  bg-purple-400' style={{height:"100vh",paddingLeft:"600px",fontFamily:"sans-serif"}}>
      <form className='w-1/2 p-5 h-64 bg-white mb-2 gap-3 d-flex flex-col' style={{borderRadius:"1rem"}}>
        <h1 className='fw-bold fs-4 text-center'>Forgot Password</h1>
        <p className=''>Enter the email address associated with your account</p>
        <div className='d-flex '>
            <div className='' style={{border:'1px solid black'}}>
                <CgMail className='fs-3' />
            </div>
        <input  className='text-center w-96' type='email' placeholder='Enter your email' style={{border:"1px solid black ",borderLeft:"none"}} />



        </div>
        <button className='text-white  w-auto bg-purple-600' style={{borderRadius:"2px"}} >Continue</button>
        <div className='w-50 d-flex ms-36 gap-1'>
        <FaRegUser className='mt-1' />
<Link   className='backtologin' to="/">Back to login</Link>
        </div>
      </form>
    </div>
  )
}

export default Forgotpassword
