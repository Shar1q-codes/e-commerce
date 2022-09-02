import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '../Redux/action/index'
import { useParams } from 'react-router'
import axios from 'axios'

const Products =  (props) => {  
  const [data,setData] = useState([])
  const proid = useParams();
    const proDetail = data.filter(x=>x.id = proid.id)
    const cartItem = proDetail[0];
  const dispatch = useDispatch()
    const addClick = (cartItem)=>{
        dispatch(addItem(cartItem))
    }
  const { image , product , category , price, id} = props
  useEffect(()=>{
    axios.get('https://e-commerce-bck-end.herokuapp.com/api/products').then((res)=>{
            const data = res.data
            setData(data)
        })
    },[])
  return (
    <div className='product-contianer'>
      <NavLink state={{image: image, product: product, category: category, price: price, id: id }} to = {`/`}/>
        <div className="product-card">
          <div className="card-flex-box">
            <h3 className='product-name'>{product}</h3>
            <img src={image} alt="" className='products-img'/>
            <div className="add-cart-container">
            <h3 className='product-price'>{price}</h3>
            <button className='add-cart-btn' onClick={()=>{addClick(cartItem)}}>Add to Cart</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Products