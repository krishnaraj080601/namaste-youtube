import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className="flex">
    <Button name="All"/>
    <Button name="gaming"/>
    <Button name="live"/>
    <Button name="Song"/>
    <Button name="cricket"/>
    <Button name="Football"/>
    <Button name="News"/>
    <Button name="Movies"/>
    </div>
  )
}

export default ButtonList