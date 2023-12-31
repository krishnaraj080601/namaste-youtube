import { useState } from "react";
import { YOUTUBE_SEARCH_BY_KEYWORD_API } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../Utils/constant";
import { cacheResults } from "../Utils/searchSlice";
import { setVideos } from "../Utils/videoSlice";

const useYoutubeSearch = () => {
    const [search, setSearch] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
  
    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();
   
    
    useEffect(() => {
      const timer = setTimeout(() => {
        if (searchCache[search]) {
          setSuggestions(searchCache[search]);
        } else {
          getSearchSugsestions();
        }
      }, 200);
  
      return () => {
        clearTimeout(timer);
      };
    }, [search]);
  
    const getSearchSugsestions = async () => {
      const data = await fetch(YOUTUBE_SEARCH_API + search);
      const json = await data.json();
      //console.log(json[1]);
      setSuggestions(json[1]);
  
      // update cache
      if (search !== "") {
        dispatch(cacheResults({ [search]: json[1] }));
      }
  
    };
    const getSearchData = async (query) => {
      if (search !== "") {
        const data = await fetch(YOUTUBE_SEARCH_BY_KEYWORD_API.replace("[QUERY]", query));
        const json = await data.json();
        dispatch(setVideos(json?.items));
      }
    };
    return {search,setSearch,suggestions,showSuggestions,setShowSuggestions,getSearchData};
}
export default useYoutubeSearch;