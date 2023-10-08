import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../Utils/appSlice';

const ViedosWatching = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(closeMenu())
},[])
  return (
    <div>ViedosWatching</div>
  )
}

export default ViedosWatching;