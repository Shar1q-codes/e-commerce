import React from 'react'


const Cart = ({cartItems, handleAddClick, handleRemove, handleClear, checkOut}) => {

  const totalPrice = cartItems.reduce(
    (price, item)=> price + item.quantity * item.price, 0
  )
  
  return (
      <div className='cart-items'>
        <div className='cart-items-header'>Cart Items</div>
        {cartItems.length === 0 && (
          <div className='cart-items-empty'>No Items In The Cart</div>
        )}
        <div>
          {cartItems.map((item)=>(
            <div key = {item.id} className='cart-item-list'>
              <img src={item.image} alt="" className='products-img cart-img'/>
              <div className='cart-itme-desc'>
                <h3 className='cart-prod'>{item.product}</h3>
                <h3 className='cart-price'>${item.price}</h3>
                <div className='cart-buttons'>
                  <button className='add-btn' onClick={()=>handleAddClick(item)}>+</button>
                  <p>{item.quantity}</p>
                  <button className='remove-btn' onClick={()=>handleRemove(item)}>-</button>
                </div>
              </div>
            </div>
            
          ))}
        </div>
            {
              cartItems.length !== 0 && ( <div><div className='cart-total'>
              Total Price : 
              <div className='total-price'>${totalPrice}</div>
            </div>
            <div><button onClick={()=>handleClear()} className='clear-btn'>Clear Cart</button>
            <button className='check-out' onClick={()=>checkOut()}>Check Out</button></div></div>
            ) 
            }
       
      </div>
  )
}

export default Cart