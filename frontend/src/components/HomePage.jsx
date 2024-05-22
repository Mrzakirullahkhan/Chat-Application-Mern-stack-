import React from 'react'
import SideBar from './Sidebar'
import MessageContent from './MessageContent'

function Home() {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded overflow-hidden bg-gary-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <SideBar/>
      <MessageContent/>
    </div>
  )
}

export default Home