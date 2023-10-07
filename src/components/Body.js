import React from 'react'
import Sidebar from './Sidebar'
import MainCointainer from './MainCointainer'

const Body = () => {
  return (
    <div className="grid grid-flow-col">
    <Sidebar/>
    <MainCointainer/>
    </div>
  )
}

export default Body