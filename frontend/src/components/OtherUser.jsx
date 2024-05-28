import React from 'react'

function OtherUser(props) {
    const user = props.user
    console.log(user)
  return (
    <div>
        
    <div className='flex gap-2 items-center text-white hover:text-zinc-700 hover:bg-zinc-200 rounded-sm p-2 cursor-pointer'>
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img src={user?.profilePhoto} alt="user-profile" />
            </div>
        </div>
        <div className=''>
            <div className='flex gap-2  justify-between '>
                <p>{user?.fullName}</p>
            </div>
        </div>
    </div>
   
<div className="divider my-0 py-0"></div>
</div>
  )
}

export default OtherUser