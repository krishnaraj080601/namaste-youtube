import React, { useEffect} from 'react'
import { YOUTUBE_VIEDOS_API } from '../Utils/constant';
import Card from './Card';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setVideos } from '../Utils/videoSlice';

const ViedoContainer = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.video.videos);
  useEffect(()=>{
    getViedos();
  },[]);
  const themeChanger = useSelector(store=>store.theme.isDark)
  const getViedos=async()=>{
    const data=await fetch(YOUTUBE_VIEDOS_API);
    const json=await data.json();
    console.log(json.items);
    dispatch(setVideos(json.items))
  };
  return (
   <div className={`flex flex-wrap mt-30 ml-24 ${themeChanger?'bg-black':''}`} >
      
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <Card info={video} />
        </Link>
      ))}
    </div>
    
  )
}

export default ViedoContainer