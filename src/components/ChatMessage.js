import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className="flex items-center p-2 shadow-sm">
        <img className="h-8 rounded-full" src="https://yt3.ggpht.com/AUNl_gJJl2k1XQUv4GnJq9EoJlZ8hfKQCGtT03oecib93VFbGBsRNaiq24bDZ-pLSYU6QAi9rA=s88-c-k-c0x00ffffff-no-rj" alt="user" />
        <span className="px-2 font-bold">{name}: </span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage