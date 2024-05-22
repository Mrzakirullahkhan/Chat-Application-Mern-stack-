import React from 'react'

function OtherUser() {
  return (
    <div>
        
    <div className='flex gap-2 items-center text-white hover:text-zinc-700 hover:bg-zinc-200 rounded-sm p-2 cursor-pointer'>
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yvK-XQru_N4podiBvs20BfJC50D7Betaz235_RcVDQ&s" alt="user-profile" />
            </div>
        </div>
        <div className=''>
            <div className='flex gap-2  justify-between '>
                <p>mujahid hussain</p>
            </div>
        </div>
    </div>
   
<div className="divider my-0 py-0"></div>
</div>
  )
}

export default OtherUser