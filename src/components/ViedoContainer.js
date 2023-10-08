import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIEDOS_API } from '../Utils/constant';

const ViedoContainer = () => {
  const [Viedos,setViedos]=useState([]);
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
    </div>
  )
};

export default ViedoContainer