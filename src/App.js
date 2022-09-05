
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import data from './Components/Back/Data'
import Header from './Components/Header';
import Navigation from './Components/Routes/Navigation';
import Footer from './Components/Footer'



function App() {

  const {productItems} = data
  const [cartItems, setCartItems]= useState([])
  const handleAddClick = (product)=>{
    const ProductExist = cartItems.find((item)=>item.id === product.id)
    if(ProductExist){
      setCartItems(cartItems.map((item)=>item.id === product.id ?
    {...ProductExist, quantity: ProductExist.quantity + 1}: item));
    }
    else {
      setCartItems([...cartItems,{...product, quantity: 1}])
    }
  }

  const handleRemove = (product)=>{
    const ProductExist = cartItems.find((item)=> item.id === product.id)
    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item)=> item.id !== product.id))
    }
    else {
      setCartItems(
        cartItems.map((item)=> item.id === product.id 
        ? {...ProductExist, quantity: ProductExist.quantity - 1}: item)
      )
    }
  }

  const handleClear = ()=>{
    setCartItems([])
  }

  const checkOut = ()=>{
    alert("Thank You For Purchasing")
  }

  return (
    <div className="App">
          <Router>
            <Header cartItems={cartItems}/>
            <Navigation productItems = { productItems } cartItems = { cartItems} handleAddClick = {handleAddClick}  handleRemove={handleRemove} handleClear={handleClear} checkOut={checkOut}/>
            <Footer/>
          </Router>
    </div>
  );
}

export default App;
