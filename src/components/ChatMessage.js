import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div>
    <img
        className="h-8"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <span>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessage