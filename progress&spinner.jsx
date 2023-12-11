import React, { useEffect, useState } from 'react'

function App() {
  const [spinner,setSpinner]=useState()
  const [img,setImg]=useState({display:"none"})
  const [text,setText]=useState({display:"none"})
  const [progress,setProgress]=useState(1)
  var count=1;
  function spinner1(){
    // count++;
    // setSpinner(count)
    if(count===100){
      setImg({
        display:"block"
      })
      setText({display:"none"})
     
    }
    else{
      count++;
      setProgress(count)
      setSpinner(count)
    }

  }
  function handle(){
    setText({display:"block"})
   setInterval(spinner1,200)
  }
  useEffect(()=>{
    // handle();
   
  },[])
  return (
    <div className='container-fluid'>
      <button className='btn btn-primary' onClick={handle}>Loading</button>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='text-center' style={text}>
          {/* <div className='spinner-border'>
          </div> */}
          <progress min="1" max="100" value={progress}></progress>
          <p>{spinner} %</p>
          <p>Loading</p>

        </div>
        <div style={img}>
          <img src="images/img1.jpg" width="200" height="300"></img>

        </div>

      </div>
    </div>
  )
}

export default App