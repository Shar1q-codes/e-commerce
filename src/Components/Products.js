import React from 'react'


const Products =  ({productItems, handleAddClick}) => {  
  return (
    
        <div className='products-flex'>
           {
              productItems.sort(()=>Math.random-8).slice(0,8).map((productItem)=>(
                <div className='product-contianer'key={productItem.id}>
                  <div className="product-card">
                <div className="card-flex-box" >

                <h3 className='product-name'>{productItem.product}</h3>
            <img src={productItem.image} alt="" className='products-img'/>
            <div className="add-cart-container">
            <h3 className='product-price'>${productItem.price}</h3>
            <button className='add-cart-btn' onClick={()=>{handleAddClick(productItem)}}>Add to Cart</button>
            </div>
            </div>
            </div>
            </div>
              ))}
        </div>
          
           
            
            
          
        
    
  )
}

export default Products