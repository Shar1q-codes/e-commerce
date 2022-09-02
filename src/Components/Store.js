import React, { useEffect, useState } from 'react'
import iphoneGif from './Images/miscellaneous/apple-apple-iphone.gif'
import iphone12 from './Images/miscellaneous/apple-apple-iphone12.gif'
import Products from './Products'
import axios from 'axios'

const Store = () => {
    const [data, setData] = useState([])
    
    useEffect(()=>{
        axios.get('https://e-commerce-bck-end.herokuapp.com/api/products').then((res)=>{
            const data = res.data
            setData(data)
        })
    },[])

  return (
    <div className='store-container'>
        <div className='gif-section'>
        <img src={iphoneGif} alt="" className='iphone-gif'/>
        <img src={iphone12} alt='' className='iphone-gif' style={{marginTop: '50px'}}/>
        </div>
        <div className="store-section-container">
            <div className='store-section'>
                {
                    data.sort((arr)=>arr.length-5).slice(0,25).map((n)=>(
                        <Products
                        key = {n.id}
                        image={n.image}
                        product = {n.product}
                        price = {n.price}
                        />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Store