import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'

import { useDispatch } from 'react-redux'
import { delItem } from '../Redux/action/index'

const CartComponent = (props) => {
    const [data,setData] = useState([])
    const proid = useParams();
    const proDetail = data.filter(x=>x.id = proid.id)
    const items = proDetail[0];
    
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delItem(item))
    }

    
    const { image , product , category , price, id} = props
    useEffect(()=>{
      axios.get('https://e-commerce-bck-end.herokuapp.com/api/products').then((res)=>{
              const data = res.data
              setData(data)
          })
      },[])
      console.log(data)
  return (
    <div>
        <NavLink state={{image: image, product: product, category: category, price: price, id: id }} to = '/cart'/>
        <div className="px-4 my-5 bg-light rounded-3" key={id}>
            
        <div className="container py-4">
            <button onClick={()=>{handleClose(items)}} className="btn-close float-end" aria-label="Close"></button>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <img src={image} alt='' height="200px" width="180px" />
                </div>
                <div className="col-md-4">
                    <h3>{product}</h3>
                    <p className="lead fw-bold">{price}</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CartComponent