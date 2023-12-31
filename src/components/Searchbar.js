import { toggleSearch } from "../Utils/appSlice";
import useYoutubeSearch from "../hooks/useYoutubeSearch";
import { useDispatch, useSelector } from "react-redux";

const Searchbar = () => {
    const youtubeSearch = useYoutubeSearch();
    const { search, suggestions, showSuggestions, setSearch, getSearchData, setShowSuggestions } = youtubeSearch;
    const dispatch = useDispatch();
    const isSearchOpen = useSelector((store) => store.app.isSearchOpen);
    const onClickHandler = (suggestion) => {
      getSearchData(suggestion);
      setSearch(suggestion);
      setShowSuggestions(false);
      dispatch(toggleSearch())
    };
    return (
      isSearchOpen && (
        <div className="md:hidden bg-black bg-opacity-40 absolute z-50 top-0 left-0 w-screen h-screen overflow-hidden">
          <div className="bg-gray-50 grid grid-cols-12 p-2">
            <div onClick={() => dispatch(toggleSearch())} className="col-span-1 font-2xl flex justify-center items-center">
              ←
            </div>
            <form
              className="col-span-10 relative"
              onSubmit={(e) => {
                e.preventDefault();
                getSearchData(search);
              }}
            >
              <input 
              type="text" 
              value={search} 
              onChange={(e) => setSearch(e.target.value)} 
              onFocus={() => setShowSuggestions(true)}
              className="w-full px-3 py-1 bg-gray-200 rounded-full" />
              <img src="./search.svg" className="absolute right-2 top-1" alt="" />
            </form>
            <div className="col-span-1 font-2xl flex justify-center items-center">🎙️</div>
          </div>
          {showSuggestions && suggestions.length > 0 && (
            <>
              <div className="fixed top-0 left-0 z-10 w-screen h-screen" onClick={() => setShowSuggestions(false)}></div>
              <div className="fixed bg-white py-2 px-4 border border-gray-300 w-screen z-50">
                <ul className="">
                  {suggestions.map((suggestion) => (
                    <li key={suggestion} onClick={() => onClickHandler(suggestion)} className="hover:bg-gray-100 py-2 border-b border-gray-200 cursor-pointer flex">
                      <img className="mx-1" src="./search.svg" alt="search" />
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      )
    );
  };
  
  export default Searchbar;