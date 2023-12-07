import React, { useState } from 'react'

function App() {
  const [name,setName]=useState({name:'',price:'',location:'',stock:false})
  const handlerName=(e)=>{
    setName({
      name:e.target.value,
      price:name.price,
      location:name.location,
      stock:name.stock
    })

  }
  const handlerPrice=(e)=>{
    setName({
      name:name.name,
      price:e.target.value,
      location:name.location,
      stock:name.stock
    })

  }
  const handleLocation=(e)=>{
    setName({
      name:name.name,
      price:name.price,
      location:e.target.value,
      stock:name.stock
    })

  }
  const handlerStock=(e)=>{
    setName({
      name:name.name,
      price:name.price,
      location:name.location,
      stock:e.target.checked
    })

  }
  return (
    <div className='container-fluid'>
      <div className='row'>
        <h2>Registration</h2>
        <nav className='col-3'>
          <dl>
          <dt>Name</dt>
          <dd><input type="text" className='form-control' onChange={handlerName}></input></dd>
          <dt>Price</dt>
          <dd><input type="number" className='form-control' onChange={handlerPrice}></input></dd>
          <dt>location</dt>
          <dd>
            <select className='form-select' onChange={handleLocation}>
              <option>Hyderabad</option>
              <option>Delhi</option>
            </select>
          </dd>
          <dt>Stock</dt>
          <dd className='form-switch'><input type="checkbox" className='form-check-input' onChange={handlerStock}></input> Availbel</dd>
          </dl>
        </nav>
        <main className='col-9'>
          <dl>
            <dt>Name</dt>
            <dd>{name.name}</dd>
            <dt>Price</dt>
            <dd>{name.price}</dd>
            <dt>Location</dt>
            <dd>{name.location}</dd>
            <dt>Stock</dt>
            <dd>{name.stock===true?"Avaible":"out ofstock"}</dd>
          </dl>

        </main>

      </div>
    </div>
  )
}

export default App