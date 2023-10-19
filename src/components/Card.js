import React from 'react'

const Card = ({info}) => {
    console.log(info);
   const { snippet, statistics} = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (

    <div>
    <div className="p-2 m-2 w-72 shadow-lg ml-9 bg-gray-100">
    <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
    <ul>
    <li className="font-bold py-6">{channelTitle}</li>
    <li>{title}</li>
    <li>{statistics.viewCount} views</li>


    </ul>
    </div>
    </div>
  );
};
export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-900 ">
      <Card info={info} />
    </div>
  );
};

export default Card;