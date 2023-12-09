import React, { useState } from 'react'

function App() {
  const [photos]=useState(["images/img1.jpg","images/img2.jpg","images/img3.jpg","images/img4.jpg"])
  const [preview,setPreview]=useState('')
  function handler(e){
    setPreview(e.target.src)
  }
  
  return (
    <div>
      <section className='row'>
        <nav className='col-4'>
          {
            photos.map((i)=>{
              return(
                <div>
                  <img src={i} width="200px" height="200px" onMouseOver={handler} className='mb-2' style={{border:"1px solid red"}}></img>
                </div>
              )
            })
          }

        </nav>
        <main className='col-8'>
          <div className='mb-3' style={{width:"200px",border:"1px solid green",height:"200px"}}>
            <img src={preview} width="200px" height="200px" ></img>
          </div>

        </main>
      </section>
    </div>
  )
}

export default App