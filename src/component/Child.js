import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,incrementByValue } from '../features/counter/counterSlice';

function Child() {
    const dispatch=useDispatch();
    const data =useSelector((c)=>{
        return c.show.value
    })
  return (
    <div>
        
        <h1>Child {data}</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(incrementByValue(10))}>increment By Value</button>

        
        
        
        </div>
  )
}

export default Child