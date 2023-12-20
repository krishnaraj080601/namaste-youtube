import React from 'react'
import { useSelector } from 'react-redux';

const Button = ({name}) => {
  const themeChanger = useSelector(store=>store.theme.isDark)
  return (
    <div>
    <button className = {`px-5 py-2 m-2 ${themeChanger?'bg-gray-800 text-white rounded-lg':"bg-gray-200 rounded-lg hover:bg-black hover:text-white"}  w-auto`} >{name}</button>
    </div>
    
  )
}

export default Button;