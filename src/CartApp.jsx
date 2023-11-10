import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { NabBar } from './components/NabBar'
import { ShopPage } from './pages/ShopPage'
import { CartPage } from './pages/CartPage'
import { ProductProvider } from './context/ProductProvider'
import { CartProvider } from './context/CartProvider'

export const CartApp = () => {
  return (

    <ProductProvider>
      <CartProvider>
      <NabBar></NabBar>

      <div className='container'>
        <Routes>
          <Route path='/' element={<ShopPage />} ></Route>
          <Route path='/cart' element={<CartPage />}></Route>
          <Route path='/*' element={<Navigate to={'/'} ></Navigate>} ></Route>
        </Routes>
      </div>
      </CartProvider>
    </ProductProvider>
  )
}
