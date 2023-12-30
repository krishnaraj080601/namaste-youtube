import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API,YOUTUBE_SEARCH_BY_KEYWORD_API } from "../Utils/constant";
import { cacheResults } from "../Utils/searchSlice";
import { setVideos } from "../Utils/videoSlice";

const useYoutubeSearch = () => {
  const dispatch = useDispatch();
  const cache = useSelector((store) => store.search);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [search, setSearch] = useState("");

  const getSearchRecommendations = async () => {
    if (cache[search]) {
      setSuggestions(cache[search]);
    } else {
      const data = await fetch(YOUTUBE_SEARCH_API + search);
      const response = await data.json();
      setSuggestions(response[1]);
      if (search !== "") {
        dispatch(cacheResults({ [search]: response[1] }));
      }
    }
  };

  const getSearchData = async (query) => {
    if (search !== "") {
      const data = await fetch(YOUTUBE_SEARCH_BY_KEYWORD_API.replace("[QUERY]", query));
      const response = await data.json();
      dispatch(setVideos(response?.items));
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => getSearchRecommendations(), 500);
    return () => {
      clearTimeout(timer);
    };
  }, [search]);


  return {search, suggestions, showSuggestions, setShowSuggestions, setSearch, getSearchData}
};

export default useYoutubeSearch;