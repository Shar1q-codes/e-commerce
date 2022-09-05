import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Cart'
import LandingPage from '../LandingPage'
import Store from '../Store'

const Navigation = ({productItems, cartItems, handleAddClick, handleRemove, handleClear, checkOut}) => {
  return (
    <div>
        <Routes>
            <Route path='/' exact element = {<LandingPage productItems={productItems} handleAddClick={handleAddClick}/>}/>
            <Route path='/store' element = {<Store productItems={productItems} handleAddClick={handleAddClick}/>}/>    
            <Route path='/cart' element= {<Cart cartItems={cartItems} handleAddClick={handleAddClick} handleRemove={handleRemove} handleClear={handleClear} checkOut={checkOut}/>}/>
        </Routes>
    </div>
  )
}

export default Navigation