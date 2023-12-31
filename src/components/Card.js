import React from 'react'
import { Link } from 'react-router-dom';
import { generateCount,timeDifference } from '../Utils/helper';
const Card = ({info}) => {
  const { snippet, statistics } = info;
  const videoId = typeof info.id === "object" ? info?.id?.videoId : info?.id;
  const { channelTitle, title, thumbnails, publishedAt,channelId } = snippet;
  console.log()

  return (
    <div className="py-2 my-2 md:p-2 md:m-2 w-full md:w-[340px] md:max-w-[340px]">
      <Link className="cursor-pointer" to={`/watch?v=${videoId}`}>
        <img className="md:rounded-lg w-full md:max-w-[340px] aspect-video" src={thumbnails?.medium?.url ? thumbnails?.medium?.url : thumbnails?.default?.url} alt="thumbnail" />
      </Link>
      <ul>
        <li className="overflow-hidden text-ellipsis line-clamp-2 font-bold text-md m-2">{title}</li>
        <li className="cursor-pointer truncate mx-2 font-normal text-gray-600 text-sm">
          <Link className="cursor-pointer" to={`/channel?v=${channelId}`}>{channelTitle}</Link>
          </li>
        <li className="truncate mx-2 font-light text-gray-60 text-sm">
          {statistics && statistics.viewCount && <>{generateCount(statistics?.viewCount)} views <span className="font-xs text-gray-500">•</span></>} {timeDifference(new Date(), new Date(publishedAt))}
        </li>
      </ul>
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