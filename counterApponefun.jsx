import React, { useState } from 'react'

function App() {
  const [count,setCount]=useState(0);
 function counter(type){
  if(type==='increment'){
    setCount(count+1)
  }
  else if(type=== 'decrement'){
    setCount(count-1)
  }
 }
  return (
    <div>
      <h3>count:{count}</h3>
      <button className='btn btn-primary mt-3' onClick={()=>{counter('increment')}} disabled={count===10}>Increment</button>
      <button className='btn btn-primary ms-3' onClick={()=>{counter('decrement')}} >Decrement</button>
    </div>
  )
}

export default App