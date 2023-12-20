import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
const Body = () => {
  const themeChanger = useSelector(store=>store.theme.isDark)
  return (

    <div className={`flex ${themeChanger?'bg-black':''}`} >
    <Sidebar/>
    <Outlet/>
    </div>
  )
}

export default Body