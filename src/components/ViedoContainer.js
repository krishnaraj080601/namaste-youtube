import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIEDOS_API } from '../Utils/constant';
import Card from './Card';

const ViedoContainer = () => {
  const [Videos,setViedos]=useState([]);
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
    <div className="flex flex-wrap">
    {Videos.map(Videos=><Card key={Videos.id} info={Videos}/>)}
    </div>
  )
};

export default ViedoContainer