import React, { useEffect, useState } from 'react'
import firstCorousel from './Images/miscellaneous/2_corousel.png'
import shipping from './Images/Web/shipping.svg'
import refund from './Images/Web/refund.svg'
import support from './Images/Web/support.svg'
import Products from './Products'
import axios from 'axios'

const LandingPage = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('https://e-commerce-bck-end.herokuapp.com/api/products').then((res)=>{
            const data = res.data
            setData(data)
        })
    },[])
  return (
    <div>
        <div className="firstCorousel">
            <img src={firstCorousel} alt="" className='firstcorousel-img'/>
        </div>

        <div className='bestSeller-section'>
            <h2>Best Seller</h2>
        </div>

        
        <div className='productSection-parent'>
        <div className='productSection'>
            {
                data.sort((n)=>Math.random(n.id)).slice(0,8).map((n)=>(
                    <Products
                    key = {n.id}
                    image = {n.image}
                    product = {n.product}
                    price = {n.price}
                    />
                ))
            }
        </div>
        </div>
        
       <div className="secondCorousel">
            <div className="secondCorousel-desc">
                <h1>iPhone 6 Plus</h1>
                <p>Performance and Design. Taken right to the edge</p>
                <p>Shop Now</p>
            </div>
            <img src={firstCorousel} alt="" className='secondcorousel-img'/>
        </div>
        <div className="services-section">
            <div className="free-shipping">
                <img src={shipping} alt="" />
                <h3>Free Shipping</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis harum quia hic fugiat consectetur nihil soluta commodi vel expedita, impedit reiciendis fugit tenetur voluptatem repellat!</p>
            </div>
            <div className="refund">
                <img src={refund} alt="" />
                <h3>Refund</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque mollitia aspernatur voluptatibus, officia quasi, distinctio itaque quibusdam error fugiat necessitatibus molestiae inventore commodi quam maiores.</p>
            </div>
            <div className="support">
                <img src={support} alt="" />
                <h3>24/7 Support</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ullam commodi iste pariatur recusandae eaque! Quidem aut fugiat modi mollitia facere officia id provident aspernatur?</p>
            </div>
        </div>
    </div>
  )
}

export default LandingPage