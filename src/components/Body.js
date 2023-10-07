import React from 'react'
import Sidebar from './Sidebar'
import MainCointainer from './MainCointainer'
import { Provider } from 'react-redux'
import Store from './Utils/Store'

const Body = () => {
  return (
    <Provider store={Store}>
    <div className="flex">
    <Sidebar/>
    <MainCointainer/>
    </div>
    </Provider>
  )
}

export default Body