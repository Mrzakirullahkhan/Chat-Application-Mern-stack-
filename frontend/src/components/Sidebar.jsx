import React from 'react'
import { IoSearch } from "react-icons/io5";
import OtherUsers from './OtherUsers';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import toast from "react-hot-toast"

function SideBar() {
  const navigate = useNavigate()
  const logoutHandler = async()=>{
    try {
      const res= await axios.get("http://localhost:8000/api/v1/user/logout")
      console.log(res)
      navigate("/login")
      toast(res.data.message)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <form action="" className='flex item-center gap-2'>
            <input type="text"
            className='input input--bordered rounded-md bg-white '
            placeholder="Search..."
            />
            <button type='submit' className='btn bg-zinc-700 text-white border-white'>
            <IoSearch  className='w-5 h-5 outline-none' />
            </button>
        </form>
        <div className="divider px-3"></div>
        <OtherUsers/>
        <div className='mt-2'>
            <button className='btn btn-sm' onClick={logoutHandler}>Logout</button>
        </div>
    </div>
  )
}

export default SideBar