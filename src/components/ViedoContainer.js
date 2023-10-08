import React, { useEffect } from 'react'
import { YOUTUBE_VIEDOS_API } from '../Utils/constant';

const ViedoContainer = () => {
  useEffect(()=>{
    getViedos();
  },[])
  const getViedos=async()=>{
    const data=await fetch(YOUTUBE_VIEDOS_API);
    const json=await data.json();
    console.log(json);
  }
  return (
    <div>ViedoContainer</div>
  )
}

export default ViedoContainer