import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'

const LiveChat = () => {
  useEffect(() => {
    const i = setInterval(() => {
      console.log("api calling");
      
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg '>
    <ChatMessage name="akshay saini" message="this is namasete reaxt web series"/>
    </div>
  )
}

export default LiveChat