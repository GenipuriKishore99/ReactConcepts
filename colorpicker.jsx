import React, { useState } from 'react'

function App() {
  const [color,setColor]=useState({fontSize:"",color:""})
  function handler(e){
    setColor({
      fontSize:e.target.value+"px",
      color:color.color
    })
  }
  function handlerColor(e){
    setColor({
      fontSize:color.fontSize,
      color:e.target.value
    })
  }
  return (
    <div className='container-fluid'>
      <div className='row'>
        <nav className='col-4'>
          <dl>
            <dt>FonstSize</dt>
            <dd><input type="range" min="10" max="100" onChange={handler}></input></dd>
            <dt>Color</dt>
            <dd><input type="color" onChange={handlerColor}></input></dd>
          </dl>
        </nav>
        <main className='col-8'>
          <p className='text-center' style={color}>Main text</p>
        </main>

      </div>
    </div>
  )
}

export default App