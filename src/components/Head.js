import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../Utils/appSlice';
import { changeTheme } from '../Utils/themeSlice.js'
import useYoutubeSearch from '../hooks/useYoutubeSearch.js';

const Head = () => {
  
  const youtubeSearch = useYoutubeSearch()
  const { search, suggestions, showSuggestions,setSearch, getSearchData, setShowSuggestions } = youtubeSearch
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const onClickHandler = (suggestion) => {
    getSearchData(suggestion);
    setSearch(suggestion);
    setShowSuggestions(false);
  };
  const themeChanger = useSelector(store=>store.theme.isDark)
  


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
    <input className={`w-1/2 h-10 border ${!themeChanger? 'border-gray-400':'border-gray-600 bg-gray-800'} rounded-l-full  pl-5`}type="text"
 onChange={(e) =>  setSearch(e.target.value)}
onFocus={() => setShowSuggestions(true)}
    onBlur={() => setShowSuggestions(false)}
    
    />
    {search !== "" && (
                <div className="z-30 absolute top-2 right-[68px] font-bold text-gray-500 hover:text-gray-900 cursor-pointer" onClick={() => setSearch("")}>
                  ╳
                </div>
              )}
    <button onClick={() => getSearchData(search)}  className="border border-gray-400 rounded-r-full p-1 w-10 bg-gray-100">🔍</button>
    </div>
    {showSuggestions &&  suggestions.length > 0 &&( <div className= {`fixed bg-black py-2 px-2 w-[37rem] ${!themeChanger? ' bg-white border-gray-700 ':' bg-black border-white-700 ' }` }>
    <ul>
    
     {suggestions.map ((s)=>(
      <li onClick={() => onClickHandler(suggestions)} key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
      🔍 {s}
    </li>
     ))}

    
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
    <img className="h-12 rounded-full"alt="user icon"
    src="https://avatars.githubusercontent.com/u/141268650?v=4"
    />
    </div>
    </div>
  )
}

export default Head