import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import CartComponent from './CartComponent'
import axios from 'axios'


const Cart = () => {
    const state = useSelector((state)=> state.addItem)
    const [data, setData] = useState([])
    const {id}= useParams()
    
    useEffect(()=>{
        axios.get('https://e-commerce-bck-end.herokuapp.com/api/products').then((res)=>{
            const data = res.data
            setData(data)
        })
        data.forEach((n)=>{
            if(n.id === id){
                setData(state)
            }
        })
    },[data, id, state])

    const cartItems = () => {
      
        return( 
        <div>
            {
                data.sort().slice(0,1).map((n)=>(
                    <CartComponent
                    key = {n.id}
                    image = {n.image}
                    product = {n.product}
                    price = {n.price}
                    />)
                )
            }
        </div>
);
}
const emptyCart = () => {
    return (
        <div className="px-4 my-5 bg-light rounded-3 py-5">
            <div className="container py-4">
                <div className="row">
                    <h3>Your Cart is Empty</h3>
                </div>
                </div>
            </div>
    );
}
const button = () => {
    return(
        <div className="container">
            <div className="row">
                <NavLink to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed To checkout</NavLink>
            </div>
        </div>
    );
}

  return (
    <div>
         <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    </div>
  )
}

export default Cart