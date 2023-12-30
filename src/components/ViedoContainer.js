import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIEDOS_API } from '../Utils/constant';
import Card, { AdVideoCard } from './Card';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ViedoContainer = () => {
  const [Videos,setViedos]=useState([]);
  useEffect(()=>{
    getViedos();
  },[]);
  const themeChanger = useSelector(store=>store.theme.isDark)
  const getViedos=async()=>{
    const data=await fetch(YOUTUBE_VIEDOS_API);
    const json=await data.json();
    console.log(json.items);
    setViedos(json.items)
  };
  return (
    <div className={`flex flex-wrap ${themeChanger?'bg-black':''}`}>
    {Videos[0] && <AdVideoCard info={Videos[0]} />}
    {Videos.map((Videos)=>(
       (<Link to={"/watch?v="+Videos.id + "&sq_ch=" + Videos.snippet.channelId }  ><Card key={Videos.id} info={Videos}/>
       </Link>)
  )
  )}
    </div>
  )
}

export default ViedoContainer