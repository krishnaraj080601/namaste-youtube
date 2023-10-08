import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIEDOS_API } from '../Utils/constant';
import Card from './Card';

const ViedoContainer = () => {
  const [videos,setViedos]=useState([]);
  useEffect(()=>{
    getViedos();
  },[]);
  const getViedos=async()=>{
    const data=await fetch(YOUTUBE_VIEDOS_API);
    const json=await data.json();
    console.log(json.items);
    setViedos(json.items)
  };
  return (
    <div>
    <Card info={videos[0]}/>
    </div>
  )
};

export default ViedoContainer