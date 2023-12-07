import React, { useEffect, useState } from 'react'
import './App.css';
function App() {
  const [category,setCategory]=useState([]);
  const [product,setProduct]=useState([]);
 
  function productData(url){
    fetch(url)
    // fetch("http://fakestoreapi.com/products")
    .then(res=>res.json())
    .then((data)=>{
      setProduct(data)

    })
  }
  function categoryData(){
    fetch("http://fakestoreapi.com/products/categories")
    .then(res=>res.json())
    .then((result)=>{
      result.unshift("all")
      setCategory(result)
    })
  }
   useEffect(()=>{
    categoryData();
    productData('http://fakestoreapi.com/products'); 
  },[]);
  function handler(event){
    if(event.target.value === "all"){
      productData('http://fakestoreapi.com/products')
    }
    else{
    productData(`http://fakestoreapi.com/products/category/${event.target.value}`)

    }
    }
  
  return (
    <div className='container-fluid'>
      <header className='d-flex justify-content-between bg-dark p-3 text-white'>
        <div>
          <h3>FakeStore</h3>
        </div>
        <div>
          <span className='me-4'>Home</span>
          <span className='me-4'>Electronic</span>
          <span className='me-4'>Jewellery</span>
          <span className='me-4'>Womes Ware</span>
          <span className='me-4'>Mens Ware</span>
        </div>
        <div>
          <span className='bi bi-search me-3'></span>
          <span className='bi bi-heart me-3'></span>
          <span className='bi bi-person me-3'></span>
          <span className='bi bi-cart me-3'></span>
        </div>
      </header>
      <section className='row mt-3'>
        <nav className='col-2'>
          <div>
            <label className='form-label'>SelectCategort</label>
          </div>
          <div>
            <select className='form-select' onChange={handler}>
              {
                category.map((item)=>{
                  return(
                    <option className='form-option' key={item} value={item}>{item.toUpperCase()}</option>
                  )
                })
              }

            </select>
          </div>
 
        </nav>
        <main className='col-8 d-flex flex-wrap'>
          {
            product.map((i)=>{
              return(
                <div className='card m-2 p-2' key={i.id}>
                  <img src={i.image} height="150" width="100"  className='card-img-top'></img>
                  <div className='card-header text-wrap'>
                    {/* <p className='card-title text-wrap text-break'>{i.title}</p> */}

                  </div>
                  <div className='card-body'>
                    <dl>
                      <dt>Product</dt>
                      <dd>{i.price}</dd>
                      <dt>Rating</dt>
                      <dd><span className='bi bi-star-fill text-success'></span>{i.rating.rate}[{i.rating.count}]</dd>
                    </dl>


                  </div>
                  <div className='card-footer'>
                    <button className='btn btn-danger w-100'> <span className='bi bi-cart4'></span>Add Card</button>

                  </div>
                </div>
                

              )
            })
          }

        </main>
      </section>

    </div>
  )
}
export default App;