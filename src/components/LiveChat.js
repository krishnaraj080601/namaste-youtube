import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addmessages } from '../Utils/chatsliceing';
import ChatMessage from "./ChatMessage";
import { generateRandomName, makeRandomMessage } from '../Utils/helper';
const LiveChat = () => {
  const dispatch=useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("api calling");
      dispatch(addmessages({
        name:generateRandomName(),
          message:makeRandomMessage(20) + " 🚀",
      }))
      
    }, 2000);

    return () => clearInterval(i);
  }, []);
  return (
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse"'>
    <div>
   {ChatMessages.map((c,i)=><ChatMessage key={i} name={c.name} message={c.message} />)}
    </div>
    </div>
  )
}

export default LiveChat