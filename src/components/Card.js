import React from 'react'

const Card = ({info}) => {
    console.log(info);
   const { snippet, statistics} = info;
    const{ channelTitle,title, thumbnails } = snippet;

  return (

    <div>
    <img alt="viedos" src={thumbnails.medium.url}/>
    <ul>
    <li>{title}</li>
    <li>{channelTitle}</li>
    <li>{statistics}</li>
    </ul>
    </div>
  )
}

export default Card