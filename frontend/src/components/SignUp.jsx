import React from 'react'
import {Link} from "react-router-dom"

function SignUp() {
  return (
    <div className='min-w-96 max-auto'>
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-center text-gray-300">SignUp</h1>
        <form action="">
          <div>
            <label className='label p-2'>
              <span className="text-base label-text">Full Name</span>
            </label>
            <input type="text"
             className='w-full input-bordered h-8 bg-white'
             placeholder='name'
             />
          </div>
          <div>
            <label className='label p-2'>
              <span className="text-base label-text">User Name</span>
            </label>
            <input type="text"
             className='w-full input-bordered h-8 bg-white'
             placeholder='Userame'
             />
          </div>
          <div>
            <label className='label p-2'>
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password"
             className='w-full input-bordered h-8 bg-white'
             placeholder='password'
             />
          </div>
          <div>
            <label className='label p-2'>
              <span className="text-base label-text">Conform Password</span>
            </label>
            <input type="password"
             className='w-full input-bordered h-8  bg-white'
             placeholder='Conform password'
             />
          </div>
          <div className='flex items-center my-4'>
            <div className="flex items-center">
              <p>Male</p>
            <input type="checkbox" defaultChecked className="checkbox mx-2" />
            </div>
            <div className="flex items-center">
              <p>Female</p>
            <input type="checkbox" defaultChecked className="checkbox mx-2" />
            </div>
          </div>
              <p className='text-center'>Already have an account ? <Link to="/login"> Login</Link></p>
          <div>
            <button className='btn btn-block btn-sm mt-2 border border-slate-700'>SignUp</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp