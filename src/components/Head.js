import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../Utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../Utils/constant';
import { cacheResults } from '../Utils/searchSlice';
import { changeTheme } from '../Utils/themeSlice.js'

const Head = () => {
  const [searchQuery,setSearchQuery]=useState("");
  const[suggestions,setSuggestion]=useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache=useSelector((store)=>store.search);
  const themeChanger = useSelector(store=>store.theme.isDark)

  const dispatch=useDispatch();
  useEffect(()=>{
   
   const timer=setTimeout(()=> {
    if (searchCache[searchQuery]) {
      setSuggestion(searchCache[searchQuery]);
   }
   else{
   getSearchSuggestion()
   }
  },200);
  
   return ()=>{
    clearTimeout(timer);
   }
  },[searchQuery])
  const getSearchSuggestion=async()=>{
    console.log("Api call-"+searchQuery);
    const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json=await data.json();
    //console.log(json[1]);
    setSuggestion(json[1]);
    dispatch(cacheResults({
      [searchQuery]: json[1],
    }))
  }
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());

  };


  return (
   
    <div className={`sticky top-0  pl-6 pr-2 py-1 grid grid-flow-col items-center shadow ${themeChanger ? 'bg-black text-white' : 'bg-white'}`} >
    <div className="flex col-span-1">
    <img onClick={()=>toggleMenuHandler()}
     className ="h-12 cursor-pointer"alt="menu"
     src={!themeChanger?"https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png":"https://cdn.imgbin.com/10/13/12/imgbin-hamburger-button-menu-computer-icons-menu-LskVccPCtLK6qaJp5fHGQdenC.jpg"}
    />
    <a href="/">
    <img className="h-12 mx-2" alt="logo"
    src="https://www.freepnglogos.com/uploads/youtube-logo-icon-transparent---32.png"/>
    </a>
    </div>
    <div className="col-span-10 px-2 ">
    <div>
    <input className={`w-1/2 h-10 border ${!themeChanger? 'border-gray-400':'border-gray-600 bg-gray-800'} rounded-l-full  pl-5`}type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}
    onFocus={() => setShowSuggestions(true)}
    onBlur={() => setShowSuggestions(false)}
    />
    <button onClick={() => window.location.href = "/results?search_query=" + searchQuery} className="border border-gray-400 rounded-r-full p-1 w-10 bg-gray-100">🔍</button>
    </div>
    {showSuggestions &&( <div className= {`fixed bg-black py-2 px-2 w-[37rem] ${!themeChanger? ' bg-white border-gray-700 ':' bg-black border-white-700 ' }` }>
    <ul>
    
     {suggestions.map(s=>(<li key={s} className='py-2 shadow-sm hover:bg-gray-100'> 🔍 {s}</li>))}

    
    </ul>
    </div>
   )}
    </div>
    <div>
        <button className='' onClick={()=>{
          dispatch(changeTheme())
        }}>
          <img className='w-8 h-8 rounded-full' src="https://uploads.commoninja.com/searchengine/wordpress/wp-dark-mode.gif" alt="" />
        </button>
      </div>
    <div className="col-span-1">
    <img className="h-12"alt="user icon"
    src="data:image/png;base64,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"
    />
    </div>
    </div>
  )
}

export default Head