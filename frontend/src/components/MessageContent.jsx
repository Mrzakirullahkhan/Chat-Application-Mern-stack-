import React from 'react'
import SendMessage from './SendMessage'
import Messages from './Messages'

function MessageContent() {
  return (
    <div className='md:min-w-[550px] flex flex-col'>
        
    <div className='flex gap-2 items-center bg-zinc-800 text-white px-4 mb-2'>
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yvK-XQru_N4podiBvs20BfJC50D7Betaz235_RcVDQ&s" alt="user-profile" />
            </div>
        </div>
        <div className=''>
            <div className='flex gap-2  justify-between'>
                <p>mujahid hussain</p>
            </div>
        </div>
    </div>
    <Messages/>
    <SendMessage/>
</div>
  )
}

export default MessageContent