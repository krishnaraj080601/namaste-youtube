import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIEDOS_API } from '../Utils/constant';
import Card from './Card';
import { Link } from 'react-router-dom';

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
  
    {Videos.map((Videos)=>(
      (<Link to={"/watch?v="+Videos.id}><Card key={Videos.id} info={Videos}/>
      </Link>)
  ))}
    </div>
  )
}

export default ViedoContainer