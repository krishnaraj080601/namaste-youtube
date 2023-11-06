import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addmessages } from '../Utils/chatsliceing';

const LiveChat = () => {
  const dispatch=useDispatch();
  const ChatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("api calling");
      dispatch(addmessages({
        name:"krishna",
          message:"hi da"
      }))
      
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg '>
   {ChatMessage.map((c,i)=><ChatMessage key={i} 
    name={c.name}
    message={c.message}
    />)}
    </div>
  )
}

export default LiveChat