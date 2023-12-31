import React from 'react'
import { useDispatch} from 'react-redux'
import { toggleMenu,toggleSearch } from '../Utils/appSlice';
import { changeTheme } from '../Utils/themeSlice.js'
import useYoutubeSearch from '../hooks/useYoutubeSearch.js';

const Head = () => {
 
  
  const youtubeSearch = useYoutubeSearch()
  const {search,setSearch,suggestions,showSuggestions,setShowSuggestions,getSearchData}= youtubeSearch;
  //const themeChanger = useSelector(store=>store.theme.isDark)
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const onClickHandler = (suggestion) => {
    getSearchData(suggestion);
    setSearch(suggestion);
    setShowSuggestions(false);
  };

  
  return (
    <div className="sticky top-0  pl-6 pr-2 py-1 grid grid-flow-col items-center">
    <div className="flex col-span-1">
      <img onClick={toggleMenuHandler} className="h-12 cursor-pointer" src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"alt="menu" />
      <a href="/" className="w-full">
        <img className="h-12 mx-2" src="https://www.freepnglogos.com/uploads/youtube-logo-icon-transparent---32.png" alt="logo" />
      </a>
    </div>
    <div className="col-span-10 md:col-span-9 flex justify-end items-center md:block">
      <div className="sm:flex md:hidden sm:justify-center sm:items-center" onClick={()=>dispatch(toggleSearch())}>
        
      </div>
      <div className="hidden md:flex justify-center items-center">
        <div className="relative">
          <div className="flex justify-center items-center">
            <input
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              value={search}
              className="w-[600px] rounded-l-full p-2 px-6 border border-gray-200"
              type="text"
            />
            {search !== "" && (
              <div className="z-30 absolute top-2 right-[68px] font-bold text-gray-500 hover:text-gray-900 cursor-pointer" onClick={() => setSearch("")}>
                ╳
              </div>
            )}
            <button onClick={() =>getSearchData (search)} className="rounded-r-full p-2 bg-gray-100 px-4 border border-gray-200">
            🔍
            </button>
          </div>
          {showSuggestions && suggestions.length > 0 && (
            <>
              <div className="fixed top-0 left-0 z-10 w-screen h-screen" onClick={() => setShowSuggestions(false)}></div>
              <div className="fixed bg-white py-2 px-4 border border-gray-300 rounded-lg w-[600px] z-50">
                <ul className="">
                  {suggestions.map((suggestion) => (
                    <li key={suggestion} onClick={() => onClickHandler(suggestion)} className="hover:bg-gray-100 py-1 border-b border-gray-50 cursor-pointer flex">
              
                      🔍 {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
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