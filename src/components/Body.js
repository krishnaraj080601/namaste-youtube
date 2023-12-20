import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
const Body = () => {
  const themeChanger = useSelector(store=>store.theme.isDark)
  return (

    <div className={`flex ${themeChanger?'bg-black':''}`} >
  <div className={`w-64 fixed border border-none overflow-y-hidden ${themeChanger?'bg-black':''} `}>
     <Sidebar/>
     </div>
    
    <Outlet/>
    </div>
  )
}

export default Body