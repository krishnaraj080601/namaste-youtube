import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen);
  const themeChanger = useSelector(store=>store.theme.isDark)
  if(!isMenuOpen) return null;
  return (
    
    <div  className={`p-5 shadow-lg w-32' ${!themeChanger?'bg-white':'bg-black text-white'}`}>
      <h1 className="font-semibold pt-3 pb-1 px-2 rounded-md hover:shadow-md hover:border"><Link to="/">Home</Link></h1>
      <hr className="border-gray-400"/>
      <h1 className="font-semibold pt-3 pb-1 px-2">Explore</h1>
        <ul className="text-sm">
          <li className="py-1 px-2 rounded-md hover:shadow-md hover:border">Trending</li>
          <li className="py-1 px-2 rounded-md hover:shadow-md hover:border">Shopping</li>
          <li className="py-1 px-2 rounded-md hover:shadow-md hover:border">Music</li>
          <li className="py-1 px-2 rounded-md hover:shadow-md hover:border">Sports</li>
          <li className="py-1 px-2 rounded-md hover:shadow-md hover:border">Gaming</li>
          <li className="pt-1 pb-3 px-2 rounded-md hover:shadow-md hover:border">Movies</li>
          <hr className="border-gray-400"/>
        </ul>
        
      <h1 className="font-semibold pt-3 pb-1 px-2">Subscriptions</h1>
        <ul className="text-sm">
          <li className="py-1 px-2 rounded-md hover:shadow-md hover:border">Namaste JavaScript</li>
          <li className="py-1 px-2 rounded-md hover:shadow-md hover:border">Science of Stupid</li>
          <li className="py-1 px-2 rounded-md hover:shadow-md hover:border">ICC</li>
          <li className="pt-1 pb-3 px-2 rounded-md hover:shadow-md hover:border">Tarak Mehta ka Ooltah Chasma</li>
        </ul>
        <hr className="border-gray-400"/>
        <h1 className="font-semibold pt-3 pb-1 px-2">You</h1>
        <ul className="text-sm">
          <li className="py-1 px-2 rounded-md hover:shadow-md hover:border">Your Channel</li>
          <li className="py-1 px-2 rounded-md hover:shadow-md hover:border">History</li>
          <li className="py-1 px-2 rounded-md hover:shadow-md hover:border">Watch Later</li>
          <li className="pt-1 pb-3 px-2 rounded-md hover:shadow-md hover:border">Saved Playlists</li>
        </ul>
    </div>
    
  )
}

export default Sidebar