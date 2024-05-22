import React from 'react'
import { IoMdSend } from "react-icons/io";

function SendMessage() {
  return (
    <form className='px-4 py-3'>
        <div className='w-full relative'>
            <input type="text"
            placeholder='Send aa message'
            className='border text-sm rounded-lg bock w-full p-3 border-zinc-500 bg-gray-600 text-white '
             />
             <button className='absolute flex inset-y-0 end-0 items-center pr-4'>
             <IoMdSend />
             </button>
        </div>
    </form>
  )
}

export default SendMessage