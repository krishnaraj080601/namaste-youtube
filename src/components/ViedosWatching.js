import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../Utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import ViedosComments from './ViedosComments';

const ViedosWatching = () => {
    const [searchParams]=useSearchParams();
    console.log(searchParams.get("v"));
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(closeMenu())
},[])
  return (
    <div className="flex flex-col">
    <div>
    <div className="px-5">
    <iframe width="1200" height="600" src={"https://www.youtube.com/embed/"+ searchParams.get("v")}title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  
    </div>
    </div>
    <ViedosComments/>
    </div>

    
  )
}

export default ViedosWatching;