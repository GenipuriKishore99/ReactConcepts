import React from 'react'
import {  
  BrowserRouter,  
  Routes,  
  Route,  
  Link}   
from 'react-router-dom';  
import { ShoppingCart } from './shoppingcart';
import { ShoppingProducts } from './shoppingproducts';
import { ShoppingId } from './productid';
function App() {
  return (
    <div className='container-fluid'>
      <BrowserRouter>
      <header className='bg-dark text-white d-flex justify-content-between p-3 m-2'>
      <div>Shopping..!</div>
        <div>
          <span className='me-3'><Link to="/home" className='text-white text-decoration-none'>Home</Link></span>
          <span className='me-3'>Jewellery</span>
          <span className='me-3'>Electronics</span>
          <span className='me-3'>Mens</span>
          <span className='me-3'>Womens</span>
        </div>
        <div>
          <span className='bi bi-search me-2'></span>
          <span className='bi bi-heart me-2'></span>
          <span className='bi bi-person me-2'></span>
          <span className='bi bi-cart me-2'></span>
        </div>

      </header>
      <section>
        <Routes>
          <Route path="/" element={<ShoppingCart></ShoppingCart>}></Route>
          <Route path="/home" element={<ShoppingCart></ShoppingCart>}></Route>
          <Route path="/products/:catName" element={<ShoppingProducts></ShoppingProducts>}></Route>
          <Route path="/details/:proId" element={<ShoppingId></ShoppingId>}></Route>
        </Routes>
      </section>
      </BrowserRouter>
    </div>
  )
}

export default App