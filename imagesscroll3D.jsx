import React, { useState } from 'react'
import './App.css';
function App() {
  const [photos]=useState(["images/img1.jpg","images/img2.jpg","images/img3.jpg","images/img4.jpg"])
   function handleover(e){
    e.currentTarget.stop()

   }
   function handlerout(e){
    e.currentTarget.start();
   }
  
  return (
    <div className='container-fluid'>
    
        <marquee scrollamount="10" onMouseOver={handleover} onMouseOut={handlerout}>
        {
          photos.map((p)=>{
            return(
              // <div>
                <img src={p} width="200px"></img>
              // </div> 
            )
          })
        }
        </marquee>

    
             
    </div>
  )
}

export default App