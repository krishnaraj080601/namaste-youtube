import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuopen);
  if(!isMenuOpen) return null;
  return (
    
    <div className="p-5 shadow-lg w-48">
    <ul>
    <li>Home </li>
    <li>Shorts</li>
    <li>News</li>
    <li>Library</li>
    </ul>
    <h1 className="font-bold">Subscription</h1>
    <ul>
    <li>Music </li>
    <li>Games</li>
    <li>Movies</li>
    <li>Sports</li>
    </ul>

    <h1 className="font-bold">Explore</h1>
    <ul>
    <li>Trending</li>
    <li>Shopping</li>
    <li>Live</li>
    <li>Podcast</li>
    </ul>
    </div>
  )
}

export default Sidebar