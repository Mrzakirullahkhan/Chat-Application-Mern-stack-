import React from 'react'

function SignUp() {
  return (
    <div className=''>
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-300">SignUp</h1>
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
        </form>
      </div>
    </div>
  )
}

export default SignUp