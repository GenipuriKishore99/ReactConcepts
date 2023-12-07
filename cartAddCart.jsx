import React, { useEffect, useState } from 'react'
import './App.css';
function App() {
  const [category,setCategory]=useState([]);
  const [product,setProduct]=useState();
  const [cartItem,setCartItem]=useState([])
  const [count,setCount]=useState(0);

  useEffect(()=>{
    loadCategory();
    loadProducts('http://fakestoreapi.com/products');
    addCart();
  },[])
  function addCart(){
    setCount(cartItem.length);
  }
  function loadProducts(url){
    fetch(url)
    // fetch('http://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((data)=>{
      setProduct(data)
    })
  }
  function loadCategory(){
    fetch('http://fakestoreapi.com/products/categories')
    .then((res)=>res.json())
    .then((data)=>{
      data.unshift("all")
      setCategory(data)

    })
  }
  function handler(e){
    if(e.target.value ==="all"){
      loadProducts('http://fakestoreapi.com/products')
    }else{
      loadProducts(`http://fakestoreapi.com/products/category/${e.target.value}`)
    }
    

  }
  function handlerClick(e){
    // alert("add cart clicked")
    fetch(`http://fakestoreapi.com/products/${e.target.id}`)
    .then((res)=>res.json())
    .then((data)=>{
      cartItem.push(data)
      addCart();
      alert(`${data.title}\n Added item`)
    })
    // alert(e.target.id)
  }
  return (
    <div className='container-fluid'>
      <header className='d-flex justify-content-between bg-dark text-white p-2 mt-2'>
        <div>
          <h2>FakeStore</h2>
        </div>
        <div>
          <span className='me-4'>Home</span>
          <span className='me-4'>Electronics</span>
          <span className='me-4'>Jewellery</span>
          <span className='me-4'>Mens</span>
          <span className='me-4'>Womens</span>
        </div>
        <div>
          <span className='bi bi-search me-2'></span>
          <span className='bi bi-person me-2'></span>
          <span className='bi bi-heart me-2'></span>
          <button className=' positio-relative' data-bs-target="#cart" data-bs-toggle="modal" >
          <span className='bi bi-cart '></span>
          <span className='badge rounded-circle bg-danger position-absolute'>{count}</span>
          </button>
          <div className='modal fade' id="cart">
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h2 className='text-primary'>Add Cart items</h2>
                  <button className='btn-close' data-bs-dismiss="modal"></button>

                </div>
                <div className='modal-body'>
                  <table className='table table-hover'>
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Priview</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartItem.map((i)=>{
                          return(
                            <tr>
                              <td>{i.title}</td>
                              <td><img src={i.image} width="50" height="50"></img></td>
                              <td>{i.price}</td>
                              <td><button className='btn btn-danger'> <span className='bi bi-trash-fill '></span></button></td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>

                </div>


              </div>

            </div>

          </div>
        </div>
      </header>
      <section className='row'>
        <nav className='col-4'>
          <div>
            <label className='form-label'>select category</label>
          </div>
          <div>
            <select className='form-select' onChange={handler}>
              {
                   category.map((i)=>{
                    return(
                      <option key={i.id} value={i}>{i.toUpperCase()}</option>
                    )
                   })
              }

            </select>
          </div>

        </nav>
        <main className='col-8 d-flex flex-wrap'>
          {
            product && product.map((i)=>{
              return(
                <div className='card'>
                  <img src={i.image}height="150" className='card-img-top'></img>
                  <div className='card-header'>
                    <p className='card-title'>{i.title}</p>
                  </div>
                  <div className='card-body'>
                    <dl>
                      <dt>Price</dt>
                      <dd>{i.rating.count}</dd>
                      <dt>Rate</dt>
                      <dd className='bi bi-star-fill text-success'>{i.rating.rate}</dd>
                    </dl>

                  </div>
                  <div className='card-footer'>
                    <button className='btn btn-danger w-100' id={i.id} onClick={handlerClick}><span className='bi bi-cart4'></span>Add Cart</button>
                    
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

export default App