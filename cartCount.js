import React, { useState } from 'react'

function App() {
  const [product,setProduct]=useState([{name:"Dell",price:25000,count:3},{name:"Hp",price:35000,count:2},{name:"lenovo",price:45000,count:4}])
  const [productCount,setProductCount]=useState();
  function counting(){
    var total=0;
    product.forEach((pro)=>{
      total=total+(pro.price*pro.count)
    })
    setProductCount(total)
  }
  function incre(index){
    var temp=[...product]
    temp[index].count++;
    setProduct([...temp])
  }
  function decre(index){
    var temp=[...product]
    temp[index].count--;
    setProduct([...temp])
  }
  return (
    <div>
      <table className='table table-primary'>
        <thead>
          <tr>
            <th>SNo</th>
            <th>Name</th>
            <th>Price</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {
            product.map((i,d)=>{
              return(
                <tr>
                  <td>{d}</td>
                  <td>{i.name}</td>
                  <td>{i.price}</td>
                  <td>
                    <button onClick={()=>{incre(d)}}>+</button>{i.count}
                    <button onClick={()=>{decre(d)}}>-</button>

                  </td>

                </tr>
              )
            })
          }
          <h4>TotalPrice:{productCount}</h4>
          <button className='btn btn-primary' onClick={()=>{counting()}}>TotalPrice:</button>
        </tbody>
      </table>

    </div>
  )
}

export default App