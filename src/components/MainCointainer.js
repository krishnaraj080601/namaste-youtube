import React from 'react'
import ButtonList from './ButtonList'
import ViedoContainer from './ViedoContainer'
import { useSelector } from 'react-redux'
import Searchbar from './Searchbar'
const MainCointainer = () => {
  const themeChanger = useSelector(store=>store.theme.isDark)
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div  className={isMenuOpen ? `${themeChanger ? 'bg-black' : ''}` : 'ml-10'}>
    <ButtonList/>
    <ViedoContainer/>
    <Searchbar/>
    </div>
  )
}

export default MainCointainer