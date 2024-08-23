import React, { useContext, useRef } from 'react'
import { FaRegUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import createcontext from '../../store/CreateStore';
const Login = () => {

  const context=useContext(createcontext)
  console.log('context',context)
  const navigate=useNavigate()
    let usernameRef=useRef()
    let passwordRef=useRef()
  let handleadmin=async(e)=>{
    e.preventDefault()
    let obj={
      Super_Admin:usernameRef.current.value,
        Password:passwordRef.current.value
    }
    console.log('obj',obj)
const res=await fetch('http://localhost:8080/api/findsuperadmin',{
  method:"post",
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(obj)
})
const data=await res.json()
console.log('res data',data)
if(data.success){
  context.setsuperadmin(true)
  context.setadmin(false)
  context.setmarchendiser(false)
  context.setaccountant(false)

  context.setproduction(false)

  navigate('/home')
}

  }
 
const adminhandle=async(e)=>{
  e.preventDefault()
  let obj={
    name:usernameRef.current.value,
      password:passwordRef.current.value
  }
  const apiEndpoint = 'http://localhost:8080/user/admin/login'
  const res=await fetch(apiEndpoint,{
    method:'post',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(obj)
  })
  const data=await res.json()
console.log('res data',data)
if(data.success){
  context.setsuperadmin(false)
  context.setadmin(true)
  context.setmarchendiser(false)
  context.setaccountant(false)

  context.setproduction(false)
  navigate('/home')
}
}
const marchendiser=async(e)=>{
  e.preventDefault()
  let obj={
    name:usernameRef.current.value,
      password:passwordRef.current.value
  }
  const apiEndpoint = 'http://localhost:8080/user/merch/login';
  const res=await fetch(apiEndpoint,{
    method:'post',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(obj)
  })
  const data=await res.json()
console.log('res data',data)
if(data.success){
  context.setsuperadmin(false)
  context.setadmin(false)
  context.setmarchendiser(true)
  context.setaccountant(false)

  context.setproduction(false)
  navigate('/home')
}
}
const accountent=async(e)=>{
  e.preventDefault()
  let obj={
    name:usernameRef.current.value,
      password:passwordRef.current.value
  }
  const apiEndpoint = 'http://localhost:8080/user/account/login';
  const res=await fetch(apiEndpoint,{
    method:'post',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(obj)
  })
  const data=await res.json()
console.log('res data',data)
if(data.success){
  context.setsuperadmin(false)
  context.setadmin(false)
  context.setmarchendiser(false)
  context.setaccountant(true)

  context.setproduction(false)
  navigate('/home')
}
}
const production=async(e)=>{
  e.preventDefault()
  let obj={
    name:usernameRef.current.value,
      password:passwordRef.current.value
  }
  const apiEndpoint = 'http://localhost:8080/user/prod/login';
  const res=await fetch(apiEndpoint,{
    method:'post',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(obj)
  })
  const data=await res.json()
console.log('res data',data)
if(data.success){
  context.setsuperadmin(false)
  context.setadmin(false)
  context.setmarchendiser(false)
  context.setaccountant(false)

  context.setproduction(true)
  navigate('/home')
}
}

  return (
    <div className='w-full absolute top-0 right-0 bottom-0 left-0  login-page p-3 gap-5  bg-purple-400' style={{height:"100vh"}}>
       
    <form className='w-1/2 h-fit bg-white rounded-3xl p-10 m-auto mt-5  pt-5 '>
    <h1 className='fw-bold text-center' style={{fontSize:"2rem"}}>Welcome to <span className='text-purple-500 fw-bold'>Garments ERP</span></h1>
    <p className='text-center mb-4'>Please login in to your account</p>
  <div className="mb-3 w-auto d-flex ">
    <div className='w-12 bg-gray-50 p-3 '><FaRegUser /> </div>
    {/* <input type="email"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  /> */}

  <input type="text" ref={usernameRef} className="form-control" id="exampleInputEmail1"  placeholder='Enter your Username ' />
  </div>
  <div className="mb-3w-auto d-flex ">
  <div className='w-12 bg-gray-50 p-3'> <IoIosLock /></div>


    <input type="password" ref={passwordRef} className="form-control" id="exampleInputPassword1" placeholder='Enter Password' />
  </div>
  
  <div className="mb-3   mt-3 w-auto d-flex  form-check">
  <input  type="checkbox" className="form-check-input" id="exampleCheck1" />

  <p id='exampleCheck1' className=" ms-2" >Reminder me </p>
  {/* <Link to='/forgot'> */}
  <p type="submit" className="ms-auto "><Link to='/forgot'>Forgot Password?</Link></p>

  {/* </Link> */}
</div>

  <button  onClick={handleadmin} className=" btn btn-primary w-full">Login</button>
  <div className='main-div  w-auto h-8 d-flex gap-16 mt-3 text-white ' style={{fontWeight:"bold"}}>
<div onClick={handleadmin}  className= ' w-32 bg-green-500 p-2 whitespace-nowrap flex items-center justify-center' style={{borderRadius:"5px"}}>
    Super Admin
</div>
<div onClick={adminhandle}  className= ' w-32 bg-green-500 p-2 whitespace-nowrap flex items-center justify-center'  style={{borderRadius:"5px"}}>
  Admin
</div>
<div   className= ' w-32 bg-green-500 p-2 whitespace-nowrap flex items-center justify-center' style={{borderRadius:"5px"}}>
   Manager
</div>
<div  onClick={marchendiser}  className= ' w-32 bg-green-500 p-2 whitespace-nowrap flex items-center justify-center'   style={{borderRadius:"5px"}}>
Merchandiser</div>
  </div>
  {/* second-main-div */}
  <div className='main-div w-auto h-8  text-white d-flex gap-16 mt-3' style={{fontWeight:"bold"}}>
<div  className= ' w-32 bg-green-500 p-2 whitespace-nowrap flex items-center justify-center' style={{borderRadius:"5px",borderRight:"5px"}}>
 Commercial
</div>
<div  onClick={accountent}  className= ' w-32 bg-green-500 p-2 whitespace-nowrap flex items-center justify-center' style={{background:"maroon",borderRadius:"5px"}}>
Accountant</div>
<div onClick={production} className='w-32 p-2 whitespace-nowrap flex items-center justify-center bg-sky-700'style={{borderRadius:"5px"}}>
Production
</div>
<div className=' w-32  bg-green-600 p-2 whitespace-nowrap flex items-center justify-center' style={{borderRadius:"5px"}}> 
Buyer</div>
  </div>
</form>

    </div>
  )
}

export default Login
