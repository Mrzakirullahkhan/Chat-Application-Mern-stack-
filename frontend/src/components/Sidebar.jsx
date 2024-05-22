import React from 'react'
import { IoSearch } from "react-icons/io5";
import OtherUsers from './OtherUsers';

function SideBar() {
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
    </div>
  )
}

export default SideBar