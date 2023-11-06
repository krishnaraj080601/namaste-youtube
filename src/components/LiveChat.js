import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addmessages } from '../Utils/chatsliceing';
import ChatMessage from "./ChatMessage";
import { generateRandomName, makeRandomMessage } from '../Utils/helper';
const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch=useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("api calling");
      dispatch(addmessages({
        name:generateRandomName(),
          message:makeRandomMessage(20) + " 🚀",
      }))
      
    }, 500);

    return () => clearInterval(i);
  }, []);
  return (
    <>
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse"'>
    <div>
   {ChatMessages.map((c,i)=><ChatMessage key={i} name={c.name} message={c.message} />)}
    </div>
    </div>
    <form className='w-full p-2 ml-2 border border-black'
    onSubmit={(e) => {
      e.preventDefault();

      dispatch(
        addmessages({
          name: "Akshay Saini",
          message: liveMessage,
        })
      );
      setLiveMessage("");
    }}  >
    <input
          className="px-2 w-96"
          type="text" value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}/>
        <button className="px-2 mx-2 bg-green-100">Send</button>
    </form>
    </>
  )
}

export default LiveChat