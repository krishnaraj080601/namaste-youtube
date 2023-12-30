const google_api_key="AIzaSyCA-LAFnE5erHGWJX38b4rZT9NWEqQ6lBw";
export const YOUTUBE_VIEDOS_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+google_api_key;
export const LIVE_CHAT_COUNT = 25;
export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_MOVIE_DETAIL_API = "https://youtube.googleapis.com/youtube/v3/videos?part=id%2Cstatistics%2Csnippet&id=[VIDEO_ID]&key="+google_api_key;
export const YOUTUBE_COMMENTS_API = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2Csnippet%2Creplies&videoId=[VIDEO_ID]&maxResults=500&key="+google_api_key
export const YOUTUBE_RECOMMENDATION_MOVIE_LIST_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&regionCode=IN&maxResults=50&key="+google_api_key
export const YOUTUBE_SEARCH_BY_KEYWORD_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=[QUERY]&key="+google_api_key
export const YOUTUBE_CHANNEL_DETAILS_API = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=UCp_r6Z-Oh0YTf-ym71z5Nqg&key="+google_api_key