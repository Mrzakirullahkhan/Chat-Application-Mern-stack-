import React, { useState } from 'react'
import {Link , useNavigate} from "react-router-dom"
import toast from "react-hot-toast";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [user, setUser]=useState({

    username:"",
    password:"",
 
  })
  const onSubmitHandler = async(e)=>{
    e.preventDefault()
    try {
      e.preventDefault();
      const res = await axios.post(
        `http://localhost:8000/api/v1/user/login`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      
       
        navigate("/");
        console.log(res)
      
      setUser({
        fullName: "",   
        username: "",
        password: "",

      });
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
  
      username:"",
      password:"",
 
    })
  }
  return (
    <div className='min-w-96 max-auto'>
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-center text-gray-300">Login</h1>
        <form action="" onSubmit={onSubmitHandler}>
          
          <div>
            <label className='label p-2'>
              <span className="text-base label-text">User Name</span>
            </label>
            <input type="text"
            value={user.username}
            onChange={(e)=>setUser({...user,username:e.target.value})}
             className='w-full input-bordered h-8 bg-white'
             placeholder='Userame'
             />
          </div>
          <div>
            <label className='label p-2'>
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password"
                 value={user.password}
                 onChange={(e)=>setUser({...user,password:e.target.value})}
             className='w-full input-bordered h-8 bg-white'
             placeholder='password'
             />
          </div>
     
         
              <p className='text-center mt-5'>Don't have an account ? <Link to="/registure"> SignUp</Link></p>
          <div>
            <button type='submit' className='btn btn-block btn-sm mt-2 border border-slate-700'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login