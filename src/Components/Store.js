import React from 'react'
import iphoneGif from './Images/miscellaneous/apple-apple-iphone.gif'
import iphone12 from './Images/miscellaneous/apple-apple-iphone12.gif'
import Products from './Products'


const Store = ({productItems, handleAddClick}) => {

  return (
    <div className='store-container'>
        <div className='gif-section'>
        <img src={iphoneGif} alt="" className='iphone-gif'/>
        <img src={iphone12} alt='' className='iphone-gif' style={{marginTop: '50px'}}/>
        </div>
        <div className="store-section-container">
            <div className='store-section'>
                        <Products productItems={productItems} handleAddClick={handleAddClick}/>                              
            </div>
        </div>
    </div>
  )
}

export default Store