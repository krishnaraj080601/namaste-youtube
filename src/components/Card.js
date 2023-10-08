import React from 'react'

const Card = ({info}) => {
    console.log(info);
    const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (

    <div>
   
    <ul>
    <li>{thumbnails}</li>
    <li>{channelTitle}</li>
    <li>{statistics}</li>
    <li>{title}</li>
    </ul>
    
    </div>
  );
};

export default Card;