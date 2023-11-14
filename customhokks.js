import React, { useState } from 'react';
function useCounter(){
  const [count,setCount]=useState(0);
  function incre(){
    setCount(count+1)
  }
  function decre(){
    setCount(count-1)
  }
  function reset(){
    setCount(1)
  }
  return [count,incre,decre,reset]

}

function App() {
  const [count,incre,decre,reset]=useCounter();
  return (
    <div>
      <h3>count:{count}</h3>
      <button onClick={incre}>Increment</button>
      <button onClick={decre}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App