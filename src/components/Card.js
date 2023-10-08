import React from 'react'

const Card = ({info}) => {
    console.log(info);
   const { snippet, statistics} = info;
   const { channelTitle, title, thumbnails } = snippet;

  return (

    <div>
   <ul>
   
   <li>{title}</li>
   <li>{channelTitle}</li>
   </ul>
    
    </div>
  );
};

export default Card;