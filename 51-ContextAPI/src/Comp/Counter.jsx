import React, { useContext } from 'react'
import { CounterContext } from '../context/Counter'

const Counter = () => {
  
  const contextofCounter = useContext(CounterContext);
  console.log(contextofCounter);

  const increaseCount = ()=>{
    contextofCounter.setCount(()=>contextofCounter.count+1);
  }
  const decreaseCount = ()=>{
    contextofCounter.setCount(()=>contextofCounter.count-1);
  }



  return (
    <div>
      <button onClick={increaseCount}>Increment Count</button>
      <button onClick={decreaseCount}>Decrement Count</button>
      <h1>{contextofCounter.fname}</h1>
    </div>
  )
}

export default Counter  
