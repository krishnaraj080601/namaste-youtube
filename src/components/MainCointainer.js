import React from 'react'
import ButtonList from './ButtonList'
import ViedoContainer from './ViedoContainer'
import { useSelector } from 'react-redux'
const MainCointainer = () => {
  const themeChanger = useSelector(store=>store.theme.isDark)
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div  className={isMenuOpen ? `col-span-11 ml-[16.2rem] ${themeChanger ? 'bg-black' : ''}` : 'ml-10'}>
    <ButtonList/>
    <ViedoContainer/>
    </div>
  )
}

export default MainCointainer